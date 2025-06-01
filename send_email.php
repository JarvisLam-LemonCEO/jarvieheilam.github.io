<?php
header('Content-Type: application/json');

// Validate request
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Sanitize inputs
$name = filter_var($_POST['name'] ?? '', FILTER_SANITIZE_STRING);
$email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
$message = filter_var($_POST['message'] ?? '', FILTER_SANITIZE_STRING);

// Validate inputs
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'All fields are required']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email format']);
    exit;
}

// Email configuration
$to = 'jarvislamhk@gmail.com'; // REPLACE WITH YOUR EMAIL
$subject = "New Contact Form Submission from $name";
$headers = [
    'From' => $email,
    'Reply-To' => $email,
    'X-Mailer' => 'PHP/' . phpversion(),
    'Content-Type' => 'text/plain; charset=UTF-8'
];

// Build email content
$emailContent = "Name: $name\n";
$emailContent .= "Email: $email\n\n";
$emailContent .= "Message:\n$message\n";

// Send email
$mailSent = mail($to, $subject, $emailContent, $headers);

if ($mailSent) {
    echo json_encode(['success' => 'Message sent successfully!']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send message. Please try again later.']);
}
?>