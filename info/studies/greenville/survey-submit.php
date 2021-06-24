<?php
    echo("Submitting answers...");

    //check if form is submitted 
    if (isset($_POST['submit'])){

        //database information
        $host = "localhost";
        $dbUsername = "website_user";
        $dbPassword = "_!@Cd1898";
        $dbName = "greenville_study_db";

        //Connect to greenville_study_db
        $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);
        if (!($conn->connect_error)) {

            //get the user's answers to the questions
            $user_email = $_POST['Email'];
            $question1 = $_POST['Question1'];
            $question2 = $_POST['Question2'];
            $question3 = $_POST['Question3'];
            $question4 = $_POST['Question4'];
            $question5 = $_POST['Question5'];

            //add the user's answers to greenville_study_db database
            $stmt = $conn->prepare("INSERT INTO survey_answer(question1, question2, question3, question4, question5) values(?,?,?,?,?)");
            $stmt-> bind_param("sssss", $question1, $question2, $question3, $question4, $question5);
            $stmt->execute();
            $stmt->close();

            //put user's email into email database
            $stmt = $conn->prepare("INSERT INTO email(user_email) values(?)");
            $stmt-> bind_param("s", $user_email);
            $stmt->execute();
            $stmt->close();

            //close the connection
            $conn->close();

            //inform the user that their submission was successful
            echo("Your report has been submitted. Thank you for your participation.");
        }

        //if the connection to the database failed...
        die("Connection failed: " . $conn->connect_error);
            $conn->close();
            echo("There was an error connecting to the server. If this error persists, please submit a bug report to 'shoemaker30@marshall.edu'");
            exit;
    }
?>