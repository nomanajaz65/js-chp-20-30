            //    chapter : 20 to 25
// 1st  
// write a program that takes two user inputs for first and last name using prompt
// and merge them in a new variable titled FULLName.greet the user using his full name.?
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");

var fullName = firstName + " " + lastName;

alert("Welcome " + fullName);


// 2nd Question
// write a program to take a user input about his favorite mobile phone model.
// find & display the length of user input in your browser.
var favPhone = prompt("What is your favorite Mobile Phone?");
document.write("<h3>My favorite Phone is : " + favPhone + "</h3><br>");
document.write("<h3>Length of the String : " + favPhone.length + "</h3>");


// 3rd Question
// write a program to find the index of letter "n" in the word "PAKISTANI" & display
// the result in your browser.
var myCountry = "Pakistan";
document.write("<h3>String : " + myCountry + "</h3><br>");
document.write("<h3>Index of 'n' : " + myCountry.indexOf('n') + "</h3><br>");


// 4th Question
// write a program to find the the last index of letter "L" IN THE WORD "hello world"
// and display the result in your browser.
var greetings = "Hello World";
document.write("<h3>String : " + greetings + "</h3><br>");
document.write("<h3>Last Index of 'l' : " + greetings.lastIndexOf('l') + "</h3><br>"); 


// 5th QUestion
// write a program to find the character at 3rd index in the word "pakistani" and 
// display the result in your browser.


var myNationality = "Pakistani";
document.write("<h3>String : " + myNationality + "</h3><br>");
document.write("<h3>Character at Index 3 : " + myNationality.charAt(3) + "</h3><br>");



    //   chapter 26 to 30



// 1st
//  write a program that simulates a dice using random() method of js math class.
// display the value of dice in your browser?
// document.write("random dice value : " + Math.floor(Math.random() * 11) + "<br>");

// document.write("random dice value : " + Math.floor(Math.random() * 11) + "<br>");


// 2nd
//  write a program that simulates a coin toss using random() method of js math class.
// display the value of coin in your browser?

var coin = Math.floor(Math.random() * 2) + 1;
if(coin == 2)
{
    document.write(coin + "<br>");
    document.write("random coin value : Heads" + "<br>");
}
else if(coin == 1)
{
    document.write(coin + "<br>");
    document.write("random coin value : Tails" + "<br>");
}


// 3rd
// write a program that shows a random number b/w 1 and 100 in your browser?
document.write("random number between 1 and 100 is : " + Math.floor(Math.random() * 101) + "<br>");


// 4th
// write a program that asks the user about his weight. parse the user input and
// display huis weight in your browser.possible user inputs can be:
// a.  50
// b.   50 kgs
// c.  50.2 kgs
// d. 50.2 kilograms

var weight = prompt("Enter your weight in kilograms : ");
weight = weight.split("kgs" || "kilograms");
weight = parseInt(weight);
document.write("The weight of user is : " + weight + " kilograms <br>");


//5 th
// write a program that stores a random secret number from 1 to 10 in a variable.ask 
// the user to input a number b/w 1 & 10. if the user input equals the secret number,
// congraluate the user.?
var secretNumber = Math.floor(Math.random() * 11) + 1;

while(userChoice != secretNumber)
var userChoice = prompt("Enter a number between 1 and 10 : ");
{
    if(parseInt(userChoice) == parseInt(secretNumber))
    {
        alert("Congrats! You guessed it right.");
    }
    else{
        alert("Sorry! Try again.");
    }
}