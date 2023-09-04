const correctNumber = 42;
function getUserInput()
{
    const userInput =prompt("guess the number:");
    return parseInt(userInput);
}
while(true)
{
    const userGuess = getUserInput();
    if(userGuess === correctNumber)
    {
        console.log("congratulations! you guessed the correct number");
        break;
    }
    else
    {
        console.log("try again");
    }
}
