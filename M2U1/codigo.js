let btn1 = document.getElementById('box1');
let btn2 = document.getElementById('box2');
let btn3 = document.getElementById('box3');
let color = document.querySelector('#color');
let refresh = document.getElementById('refresh');

btn1.addEventListener('click', () => color.style.backgroundColor='#56c8c8');
btn2.addEventListener('click', () => color.style.backgroundColor='#71cc8c');
btn3.addEventListener('click', () => color.style.backgroundColor='#b858df');
refresh.addEventListener('click', () => color.style.backgroundColor='#cbcbcb');