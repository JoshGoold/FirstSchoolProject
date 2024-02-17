function promptUser(){


Email = prompt("Enter your email: ");

if (Email == ""){
    alert("Please fill in all available fields.");
    
}
else if (Email != "") {
    
    alert("Success! " + Email + " Has entered the Giveaway!");
  }

console.log(Email);


}