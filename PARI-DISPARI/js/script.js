//Declaration user variables
let userChoice;
let userNumber;
//is extracted a randomic number from 1 to 5 with the rndNumber function
const pcNumber = rndNumber();

//is checked if the user is actually a number is ever or odd, if is not the loop runs
  do{
       userChoice = prompt("Even or odd?");
  }while(userChoice !== "even" && userChoice !== "odd");

//is checked if the userNumber is actually a number and if it is between 1 and 5
  do{
      userNumber = parseInt(prompt("Enetr a number from 1 to 5"));
  }while((userNumber < 1 || userNumber > 5) || isNaN(userNumber));

//The sum is calculated
const sum = userNumber + pcNumber;

//is checked if the user choice is actually even or odd with the evenOdd function
if (userChoice === evenOdd(sum)) {
    alert("You win!");
} else {
    alert("You lose!")
}


/*********************************/
// FUNCTIONS
//Function name: rndNumber 
//Returns a number from 1 to 5
function rndNumber(){
    return Math.floor(Math.random() * 5) + 1;
}


//Function name: evenOdd
//Parameter: number n
//If the number is divisible by 2 returns: "even", if it is not returns "odd"
function evenOdd(n){
    if (n % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}