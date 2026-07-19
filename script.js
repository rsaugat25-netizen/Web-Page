let images = [
"images/cafe1.jpg",
"images/cafe2.jpg",
"images/cafe3.jpg"
];

let i = 0;

setInterval(function(){

document.getElementById("slide").src = images[i];

i++;

if(i == images.length){
i = 0;
}

},3000);
function validateForm(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;

if(name == ""){
alert("Please enter name");
return false;
}

if(email == ""){
alert("Please enter email");
return false;
}

return true;
}