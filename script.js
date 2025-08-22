"use strict";

// view modal if checkemail function is true
const content = document.querySelector(".outside-container");
const modal = document.querySelector(".modal-container");
const errLabel = document.querySelector(".err-label");
const input = document.querySelector("input");
const buttonSubscribe = document.querySelector(".subscribe");
const output = document.querySelector(".output");
const buttonDismiss = document.querySelector(".dismiss");

let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

function checkEmailAddress(email_address) {
  let result = pattern.test(email_address);
  return result;
  // this will return true if email address format is correct and false if not.
}
buttonSubscribe.addEventListener("click", function (e) {
  e.preventDefault();
  if (checkEmailAddress(input.value)) {
    output.innerHTML = input.value;
    input.value = "";
    input.classList.remove("errinput");
    errLabel.classList.add("hidden");

    content.classList.add("hidden");
    modal.classList.remove("hidden");
  } else {
    input.classList.add("errinput");
    errLabel.classList.remove("hidden");
  }
});

buttonDismiss.addEventListener("click", function (e) {
  e.preventDefault();
  content.classList.remove("hidden");
  modal.classList.add("hidden");
});
