# Team-Profile-Generator
## Contents:
* User story
* What this application is
* How the application works
* Installation 
* Tests
* Images
* Link
## User Story:

As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles

## What this application is:
This is a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person. 
## How the application works:
When the user typs in node app.js in the terminal, a series of questions prompts one after the other, asking for the following:
- Name
- employee Id
- Email Address 
- Github account (if the name of the employee is MANAGER or ENGINEER)
    *OTHERWISE*
- School they attended
Any number of interns, managers and/or engineers can be iput in to the command line.
When the HTML main page is opened in the browser, the questions and answers are displayed.
## Installation:
npm install Inquirer.

## Tests:
All unit tests have been passed.
## Images:
This is the basic design for the application.

![screenshot](assets/look.png)

## Link:
Teresa Heidt: 

[Link to deployed application](https://teresaheidt.github.io/Team-Profile-Generator/)