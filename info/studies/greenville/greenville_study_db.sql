CREATE TABLE survey_answer(
	id int auto_increment,
	question1 varchar(25),
    question2 varchar(25),
    question3 varchar(300),
    question4 varchar(25),
    question5 varchar(300),
    PRIMARY KEY (id)
);

CREATE TABLE email(
    id int auto_increment,
    user_email varchar(50),
    PRIMARY KEY (id)
);