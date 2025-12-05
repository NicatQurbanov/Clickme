const firstSec = document.getElementById('firstSec');
const secondSec = document.getElementById('secondSec');
const btnSignUp = document.getElementById('sign-up');
const btnSignIn = document.getElementById('sign-in');
const opacity= document.getElementsByClassName('defaultOpacity');
const firstSecform1 = document.getElementById('firstSecform1')
const firstSecform2 = document.getElementById('firstSecform2')
const secondSecform1 = document.getElementById('secondSecform1')
const secondSecform2 = document.getElementById('secondSecform2')
const main = document.getElementById('main')

const arr = document.querySelectorAll('body *')

btnSignUp.addEventListener('click', e => {
  firstSecform1.style.transform = 'translateY(0%)';
  firstSecform2.style.transform = 'translateY(-100%)';
  secondSecform1.style.transform = 'translateY(0%)';
  secondSecform2.style.transform = 'translateY(-100%)';
  for (let i = 0; i < arr.length; i++) {
 if (arr[i].classList.contains('opacity') && (arr[i].closest('.filter2'))){
  arr[i].classList.remove('opacity');
  arr[i].classList.add('defaultOpacity');
 }
 for (let i = 0; i < arr.length; i++) {
   if ((arr[i].classList.contains('defaultOpacity')) && (arr[i].closest('.filter1'))) {
  arr[i].classList.add('opacity');
  arr[i].classList.remove('defaultOpacity');
 }
}
}
})

btnSignIn.addEventListener('click', e => {
  firstSecform2.style.transform = 'translateY(0%)';
  secondSecform2.style.transform = 'translateY(0%)';
  firstSecform1.style.transform = 'translateY(-100%)';
  secondSecform1.style.transform = 'translateY(-100%)';
   for (let i = 0; i < arr.length; i++) {
 if (arr[i].classList.contains('opacity') && (arr[i].closest('.filter1'))){
  arr[i].classList.remove('opacity');
  arr[i].classList.add('defaultOpacity');
  
 }
 for (let i = 0; i < arr.length; i++) {
   if ((arr[i].classList.contains('defaultOpacity')) && (arr[i].closest('.filter2'))) {
  arr[i].classList.add('opacity');
  arr[i].classList.remove('defaultOpacity');
 }
}
}
})

let eyes = document.getElementsByClassName('eyes');


for (let eye of eyes) {
 eye.addEventListener('click', function() {
  if (eye.classList.contains('fa-eye-slash')) {
    eye.classList.remove('fa-eye-slash');
    eye.classList.add('fa-eye')
    
  } else {
    eye.classList.remove('fa-eye');
    eye.classList.add('fa-eye-slash')
  }
  
 })
}

let inputs = document.getElementsByTagName('input');

for (let input of inputs) {
 input.addEventListener('focus', function() {
  console.log(input)
 })
}



