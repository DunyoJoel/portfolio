const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area p");

form.onsubmit = (e) =>{
e.preventDefault(); // prevent form from submitting
}