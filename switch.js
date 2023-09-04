var dayofweek = "saturday";
switch(dayofweek)
{
    case "monday":
        console.log("it's the start of the workweek");
        break;
    case "tuesday":
    case  "wednesday":
    case "thursday":
        console.log("it's a regular workday");
        break;
    case "friday":
        console.log("it's almost the weekend!");
        break;
    case "saturday":
    case "sunday":
        console.log("it's the weekend!time to relax");
        break;
    defualt:
         console.log("invalid day of the week");                            
}
