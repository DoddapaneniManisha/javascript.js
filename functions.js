function calculateMean(num1,num2,num3,num4,num5)
{
    var sum = num1+num2+num3+num4+num5;
    var mean = sum/5;
    return mean;
}
var num1 = 10;
var num2 = 20;
var num3=30;
var num4=40;
var num5=50;
var result = calculateMean(num1,num2,num3,num4,num5);
console.log("the sum of the numbers is:" + result);
