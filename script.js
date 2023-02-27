var fullName = prompt("Please enter your full name:");
var userName = prompt("Please enter your username");
var gender = confirm("What is your gender?\n Click OK for Male,\n while click Cancel for Female.");
    if (gender){
        gender = "M";
        alert("Your gender has been set to 'Male'")
    }
    else {
        gender = "F";
        alert("Your gender has been set to 'Female'")
    }
var description = prompt("Write a description about yourself:");
var birthYear = prompt("Please enter your birth year:");
var profilepic = confirm("Do you want to use a custom profile picture?");
    if(profilepic){
        profilepic = prompt("Enter the file name of your picture.");
        alert("Your profile picture has been set." + profilepic);
    }    
    else {
        profilepic = "prof.png"
    }

document.getElementById("fname").innerHTML = fullName;
document.getElementById("username").innerHTML = userName;
document.getElementById("gender").innerHTML = gender;
document.getElementById("desc").innerHTML = description;
document.getElementById("year").innerHTML = birthYear;
document.getElementById("age").innerHTML = 2023 - birthYear;
document.getElementById("ppic").setAttribute("src", profilepic);    