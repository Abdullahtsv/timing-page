var time = +prompt("enter time", "Like 1700 = 5pm");
var gender = prompt("Enter your gender");

var hello;
var togender;
if(gender === "male"){
    togender = "Sir";
}
else if(gender === "female"){
    togender = "Ma'am";
}
else{
    togender = " Gender Error";
};

if(time >= 0000 && time < 1200){
    hello = "Good Morning!";
    document.write("<h1>" + hello + " " + togender + "</h1>")
}
else if(time >= 1200 && time < 1700){
    hello = "Good Afternoon!";
    document.write("<h1>" + hello + " " + togender + "</h1>")
}
else if(time >= 1700 && time < 2100){
    hello = "Good Evening!";
    document.write("<h1>" + hello + " " + togender + "</h1>")
}
else if(time >= 2100 && time < 2400){
    hello = "Good Night!";
    document.write("<h1>" + hello + " " + togender + "</h1>")
}
else{
    hello = "Enter correct time"
};
