burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
cointainer = document.querySelector('.cointainer');
font_awesome = document.querySelector('#font_awesome');
search_button = document.querySelector('#search_button');
search_icon = document.querySelector('.search_icon');



h_nav = document.querySelector('.h-nav');



burger.addEventListener('click', () => {
  navbar.classList.toggle('nav-visibility');
  
  cointainer.classList.toggle('h-nav');
  search_icon.classList.toggle('nav-visibility');

  
  
})



font_awesome.addEventListener('click', () => {
  
  
  search_button.classList.toggle('nav-visibility');
  burger.classList.toggle('nav-visibility');



})