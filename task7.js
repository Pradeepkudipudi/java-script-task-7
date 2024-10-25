


// ------
// 1.Traffic Light System
// Simulate a traffic light system:

// If the light is red, log "Stop."
// If the light is yellow, log "Get ready to move."
// If the light is green, log "Go."
// If the input doesn't match any color, log "Invalid input."


user = "red" ;
// // user = "yellow" ;
// // user = "green" ;
// // user = "CEO";

// if (user == "red") {
//   console.log("stop")}
//  else if (user == "yellow") {
//   console.log("get ready to move");
// } else if (user == "green") {
//   console.log("let's go");
// } 

// else  {
//   console.log("invalid output");
// }



// 2.Weather Description (Temperature Descriptions)
// Write a program that describes the temperature:

// If the temperature is exactly 0, log "It's freezing cold."
// If the temperature is exactly 15, log "It's a cool day."
// If the temperature is exactly 25, log "It's a pleasant day."
// If the temperature doesn't match any of these, log "Unknown weather."




// var user = "0";
// user = "15";
 user = "225";

if (user == "0") {
  console.log("It's freezing cold.")
}
else if (user == "15") {
  console.log("It's a cool day.")
} else if ( user == "25") {
  console.log("It's a pleasant day.")
} else {
  console.log("Unknown weather.")
}

// 3.: Day of the Week

// Create a program that takes input of a number representing the day of the week (1-7):

// If the number is 1, log "Today is Monday."
// If the number is 2, log "Today is Tuesday."
// If the number is 3, log "Today is Wednesday."
// If the number is 4, log "Today is Thursday."
// If the number is 5, log "Today is Friday."
// If the number is 6, log "Today is Saturday."
// If the number is 7, log "Today is Sunday."
// If the input is not between 1 and 7, log "Invalid day number."

var user = "1";
// user = "2";
// user = "3";
// user = "4";
// user = "5";
// user ="6";
// user = "7";

if ( user == "1"){
  console.log("Today is Monday.");
} else if ( user == "2"){
  console.log("Today is Tuesday.")
} else if (user == "3"){
  console.log("Today is Wednesday.")
} else if ( user == "4"){
  console.log("Today is Thursday.")
} else if (user == "5") {
  console.log("Today is Friday")
   
} else if ( user == "6") {
  console.log("Today is Saturday.") }
  else if ( user == "7"){
    console.log("Today is Sunday.") }
    else {
      console.log("Invalid Day number")}