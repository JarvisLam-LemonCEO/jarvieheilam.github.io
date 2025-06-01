<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    die(json_encode(['error' => 'Method Not Allowed']));
}

// Get raw POST data
$data = json_decode(file_get_contents('php://input'), true);

// Fallback to regular POST if empty
if (empty($data)) {
    $data = $_POST;
}

$name = filter_var($data['name'] ?? '', FILTER_SANITIZE_STRING);
$email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$message = filter_var($data['message'] ?? '', FILTER_SANITIZE_STRING);

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    die(json_encode(['error' => 'All fields are required']));
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    die(json_encode(['error' => 'Invalid email format']));
}

$to = "jarvislamhk@gmail.com";
$subject = "New Contact Form Submission";
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$email_body = "Name: $name\n";
$email_body .= "Email: $email\n\n";
$email_body .= "Message:\n$message\n";

if (mail($to, $subject, $email_body, $headers)) {
    echo json_encode(['success' => 'Message sent successfully!']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send message. Please try again later.']);
}
?>