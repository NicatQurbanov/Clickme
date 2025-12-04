const firstSec = document.getElementById('firstSec');
const secondSec = document.getElementById('secondSec');
const btnSignUp = document.getElementById('sign-up');
const btnSignIn = document.getElementById('sign-in');
const opacity= document.getElementsByClassName('defaultOpacity');
const firstSecform1 = document.getElementById('firstSecform1')
const firstSecform2 = document.getElementById('firstSecform2')
const secondSecform1 = document.getElementById('secondSecform1')
const secondSecform2 = document.getElementById('secondSecform2')

btnSignUp.addEventListener('click', e => {
  firstSecform1.style.transform = 'translateY(0%)';
  firstSecform2.style.transform = 'translateY(-100%)';
  secondSecform1.style.transform = 'translateY(0%)';
  secondSecform2.style.transform = 'translateY(-100%)';
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
  firstSecform2.style.transform = 'translateY(0%)';
  secondSecform2.style.transform = 'translateY(0%)';
  firstSecform1.style.transform = 'translateY(-100%)';
  secondSecform1.style.transform = 'translateY(-100%)';
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


