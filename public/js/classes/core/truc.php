<?php
// ===== DEBUG (optionnel pendant les tests) =====
// À activer si tu veux voir les erreurs PHP dans le navigateur
// à désactiver une fois que tout fonctionne.
//
// error_reporting(E_ALL);
// ini_set('display_errors', 1);

// Autoload PHPMailer (via Composer)
require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// ==============================
//        CONFIG CORS
// ==============================

// URL EXACTE de ton site Netlify
$allowedOrigin = 'https://portfoliotb.netlify.app';

if (isset($_SERVER['HTTP_ORIGIN']) && $_SERVER['HTTP_ORIGIN'] === $allowedOrigin) {
    header('Access-Control-Allow-Origin: ' . $allowedOrigin);
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
}

// Réponse au preflight OPTIONS (CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// On renvoie toujours du JSON
header('Content-Type: application/json; charset=utf-8');


// ==============================
//       MÉTHODE HTTP
// ==============================

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'error' => 'Méthode non autorisée']);
    exit;
}


// ==============================
//      LECTURE DES DONNÉES
// ==============================

$input = file_get_contents('php://input');
$data  = json_decode($input, true);

// Sécurité : si le JSON est invalide
if (!is_array($data)) {
    echo json_encode(['success' => false, 'error' => 'Données invalides']);
    exit;
}

$name    = trim($data['name'] ?? '');
$email   = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');
$subject = trim($data['subject'] ?? '');


// ==============================
//        VALIDATION
// ==============================

if ($name === '' || $email === '' || $message === '') {
    echo json_encode(['success' => false, 'error' => 'Champs manquants']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'error' => 'Email invalide']);
    exit;
}


// ==============================
//        CONFIG PHPMailer
// ==============================

$mail = new PHPMailer(true);

try {
    // ====== Config SMTP o2switch ======
    $mail->isSMTP();
    $mail->Host       = 'mail.tbuilder.fr';           // Host SMTP o2switch
    $mail->SMTPAuth   = true;
    $mail->Username   = 'thibault-boutaud@tbuilder.fr';   // Ton email complet
    $mail->Password   = 'Fmparjpccw@2007ap';        // ?? Mets ici le NOUVEAU mot de passe SMTP
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;   // TLS
    $mail->Port       = 587;                              // Port TLS
    $mail->CharSet    = 'UTF-8';

    // ====== Expéditeur & Destinataire ======
    $mail->setFrom('thibault-boutaud@tbuilder.fr', 'Formulaire Site');
    $mail->addAddress('thibault-boutaud@tbuilder.fr', 'Thibault'); // Là où tu reçois les mails

    // Pour pouvoir répondre au visiteur directement
    $mail->addReplyTo($email, $name);

    // ====== Contenu du mail ======
    $mail->isHTML(false);
    $mail->Subject = $subject;
    $mail->Body    =
        "Nom : $name\n" .
        "Email : $email\n\n" .
        "Message :\n$message";

    // ====== Envoi ======
    $mail->send();

    echo json_encode(['success' => true]);

} catch (Exception $e) {

    // Log interne (visible dans les logs d’erreurs du serveur)
    error_log('Erreur PHPMailer : ' . $mail->ErrorInfo);

    // Réponse générique côté client
    echo json_encode([
        'success' => false,
        'error'   => 'Impossible d\'envoyer le message, réessaie plus tard.'
    ]);
}
