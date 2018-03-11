<?php
// $to = "mehdi.lefeuvre@gmail.com";
// $subject = "test";
// $message = "salut";
// mail( $to , $subject , $message);
// echo"stralalafifi";

session_start();

    // Only process POST requests
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
				$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Il semble y avoir eu un problème avec votre envoi. Veuillez renseigner tous les champs et essayer à nouveau.";
            exit;
        }

        // Set the recipient email address.
        $recipient = "mehdi.lefeuvre@gmail.com";

        // Set the email subject.
        $subject = "Nouvelle demande de $name depuis la page du projet 'CV_RWD_ML'";

        // Build the email content.
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Message:\n$message\n";

        // Build the email headers.
        $email_headers = "From: $name <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Merci, votre message a bien été envoyé.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Une erreur a été rencontrée et votre message n'a pas pu être envoyé.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "Il semble y avoir eu un problème avec votre envoi, merci d'essayer à nouveau.";
    }

?>