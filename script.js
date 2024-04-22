document.addEventListener('DOMContentLoaded', (event) => {
const cardName = document.querySelector(".card-name");
const cardNumber = document.querySelector(".card-number");
const cardMonth = document.querySelector(".card-month");
const cardYear = document.querySelector(".card-year");
const cardCvc = document.querySelector(".card-cvc");
const cardholderNameInput = document.getElementById("cardholder-name");
const cardholderNumberInput = document.getElementById("cardholder-number");
const cardExpMonth = document.getElementById("exp-month");
const cardExpYear = document.getElementById("exp-year");
const cvc = document.getElementById("card-cvc");
const submitBtn = document.querySelector(".submit-btn");
const submitedContainer = document.querySelector(".submited-container");
const form = document.querySelector(".form"); 
const cardNameError = document.querySelector(".card-name-error");
const cardNumberError = document.querySelector(".card-number-error");
const cardMonthError = document.querySelector(".card-month-error");
const cardYearError = document.querySelector(".card-year-error");
const cardCvcError = document.querySelector(".card-cvc-error");
const continueBtn = document.querySelector(".continue-btn");

cardholderNameInput.addEventListener("keyup", (e) => {
    let cardNameValue = cardholderNameInput.value;
    let key = e.key;
    let keyletters = key.match(/^[A-z a-z ]*$/);
    if(cardNameValue.length === 0){ 
        cardNameError.innerHTML = "Please enter your name!";
    } else if (keyletters) {
        cardName.innerHTML = cardNameValue;
    } else {
        cardholderNameInput.removeAttribute("disabled");
        cardNameError.innerHTML = "Please use only letters!";
    }
});

cardNumberInput.addEventListener("keyup", (e) => {
    let cardNumberValue = cardNumberInput.value;
    let key = e.key;
    let keyNumbers = key.match(/^[0-9 ]*$/);
    if(cardNumberValue.length === 0){ 
        cardNumberError.innerHTML = "Please enter your card number!";
    } else if (keyNumbers) {
        cardNumber.innerHTML = cardNumberValue;
    } else if (key === "Backspace") {
        cardNumberInput.removeAttribute("disabled"); 
    } else {
        cardNumberInput.setAttribute("disabled", "");
        cardNumberError.innerHTML = "Please use only numbers!"; 
    }
});

cardNumberInput.addEventListener("input", (e) => {
    e.target.value = e.target.value
    .replace(/[^\d]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim(); 
});

cardExpMonth.addEventListener("input",(e) => {
    let value = e.target.value;
    let valueNumbers = value.match(/^[0-9 ]*$/);
    if (value === "") {
        cardMonthError.innerHTML = "Please enter month";
    } else if (valueNumbers) {
        cardMonth.innerHTML = value;
    } else {
        cardMonthError.innerHTML = "Please enter month!";
        cardExpMonth.removeAttribute("disabled"); 
    }
});

cardExpYear.addEventListener("input", (e) => {
    let value = e.target.value;
    let valueNumbers = value.match(/^[0-9 ]*$/);
    if (value === "") {
        cardYearError.innerHTML = "Please enter year";
    } else if (valueNumbers) {
        cardYear.innerHTML = value;
    } else {
        cardYearError.innerHTML = "Please enter year!";
        cardExpYear.removeAttribute("disabled");
    } 
});

cvc.addEventListener("input", (e) => {
    let value = e.target.value;
    let valueNumbers = value.match(/^[0-9 ]*$/);
    if (value === "") {
        cardCvcError.innerHTML = "Please enter your cvc";
    } else if (valueNumbers) {
        cardCvc.innerHTML = value;
    } else {
        cardCvcError.innerHTML = "Please enter your cvc!";
        cvc.removeAttribute("disabled"); 
    } 
});
submitBtn.addEventListener("click", (e) => {
    e.preventDefault(); 

        if (cardholderNameInput.value.trim() === "") {
            cardNameError.textContent = "Please enter your name!";
        } else if (cardholderNumberInput.value.trim() === "") {
            cardNumberError.textContent = "Please enter your card number!";
        } else if (cardExpMonth.value.trim() === "") {
            cardMonthError.textContent = "Please enter month!";
        } else if (cardExpYear.value.trim() === "") {
            cardYearError.textContent = "Please enter year!";
        } else if (cvc.value.trim() === "") {
            cardCvcError.textContent = "Please enter cvc!";
        } else {

            submitedContainer.style.display = "block";
            form.style.display = "none";
        }
    });
    

continueBtn.addEventListener("click", () => {
    submitedContainer.style.display = "none";
    form.style.display = "block";
    
});
});