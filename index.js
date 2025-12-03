const btn = document.getElementById('btn');

document.addEventListener('mouseover', (e) => {
  if (e.target.id === btn.id) {
    let randomNum = Math.floor(Math.random() * 70);
    btn.style.position = 'absolute';
    if (randomNum % 2 == 0) {
       
        btn.style.left = `${randomNum}%`;
    } else { 
        btn.style.right = `${randomNum}%`;
         btn.style.top = `${randomNum}%`;
    }}})