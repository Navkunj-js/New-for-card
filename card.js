let letterCap = document.querySelector("#letterCap2");
let letterCapSec = document.querySelector(".letterCapSec");
let letter = document.querySelector("#letter");
let letterSec = document.querySelector(".letterSec");
let open = document.querySelector(".open");
let reset = document.querySelector(".reset");
let envelope = document.querySelector(".envelope");
let heart = document.querySelector(".heart");
let first = document.querySelector(".first");
let first2 = document.querySelector(".first2");
let second = document.querySelector(".second");
let second2 = document.querySelector(".second2");
let third = document.querySelector(".third");
let third2 = document.querySelector(".third2");

function letterlate() {
  letter.style.zIndex = "3"; 
  letter.classList.toggle("letterSec");
};

function toggle() {
  letterCap.classList.toggle("letterCapSec");
  setTimeout(letterlate, 200);
  setTimeout(()=>{first.classList.toggle("first2")},000);
  setTimeout(()=>{second.classList.toggle("second2")},100);
  setTimeout(()=>{third.classList.toggle("third2")},500);
  letter.style.zIndex = "1";
  letterCap.style.zIndex = "1";
  envelope.style.zIndex="5";
  open.removeEventListener("click", toggle);
  reset.addEventListener("click", res);
};

open.addEventListener("click", toggle);

function capLate() {
  letterCap.classList.toggle("letterCapSec");
  first.classList.toggle("first2");
  second.classList.toggle("second2");
  third.classList.toggle("third2");
};

function res() {
  setTimeout(capLate, 100);
  letter.classList.toggle("letterSec");
  letter.style.zIndex = "2";
  letterCap.style.zIndex = "3";
  envelope.style.zIndex="5";
  reset.removeEventListener("click", res);
  open.addEventListener("click", toggle);
}

reset.addEventListener("click", res);