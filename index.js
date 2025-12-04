const firstSec = document.getElementById('firstSec');
const secondSec = document.getElementById('secondSec');
const btnSignUp = document.getElementById('sign-up');
const btnSignIn = document.getElementById('sign-in');
const opacity= document.getElementsByClassName('defaultOpacity');

btnSignUp.addEventListener('click', e => {
  firstSec.style.transform = 'translateY(-100%)';
  secondSec.style.transform = 'translateY(-100%)';
  const firstSecElements = firstSec.querySelectorAll('.defaultOpacity');
  for (let tag of firstSecElements) {
  tag.classList.add('opacity');
  tag.classList.remove('defaultOpacity');
  tag.classList.add('transition');
  const secondSecElements = secondSec.querySelectorAll('.opacity');
  for (let tag of secondSecElements) {
   tag.classList.add('defaultOpacity');
   tag.classList.remove('opacity');
   tag.classList.add('transition');
  }
}
})

btnSignIn.addEventListener('click', e => {
  firstSec.style.transform = 'translateY(0%)';
  secondSec.style.transform = 'translateY(0%)';
  const secondSecElements = secondSec.querySelectorAll('.defaultOpacity');
  for (let tag of secondSecElements) {
   tag.classList.remove('defaultOpacity');
   tag.classList.add('opacity');
  }
  const firstSecElements = firstSec.querySelectorAll('.opacity');
  for (let tag of firstSecElements) {
    tag.classList.remove('opacity');
    tag.classList.add('defaultOpacity');
  }
})


