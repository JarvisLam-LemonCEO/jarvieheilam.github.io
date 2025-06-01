<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    die(json_encode(['error' => 'Only POST requests allowed']));
}

$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    die(json_encode(['error' => 'All fields are required']));
}

$to = "jrvislamhk@gmail.com";
$subject = "New Contact Form Submission";
$headers = "From: $email";

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['success' => 'Message sent!']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}
?>