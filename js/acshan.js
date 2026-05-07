let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');

window.onscroll = function () {
    let value = scrollY;
    stars.style.left = value + 'px';
    mountains3.style.top = value * 2.5 + 'px';
    mountains4.style.top = value * 1 + 'px';
    river.style.top = value + 'px';
   
}