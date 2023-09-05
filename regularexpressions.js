var inputString = "Please give Rs 1000";
var match = inputString.match(/\d+/);
if(match)
{
    var amount = parseInt(match[0]);
    console.log("Amount:Rs" + amount);
}else
{
    console.log("No amount found in the string");
}
