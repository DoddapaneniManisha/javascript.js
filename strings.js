var inputString = "were you able to do it?";
if(inputString.length >= 4)
{
    var prefix = inputString.substring(0,3);
    var modifiedChar = 'D';
    var suffix = inputString.substring(4);
    var modifiedString = prefix + modifiedChar + suffix;
    console.log(modifiedString);
}else
{
    console.log("The String does not have at least 4 characters");
}
