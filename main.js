var button = document.getElementsByClassName('hover-button');

function hoverColor() {
  this.classList.toggle('hover-color');
};

for (i=0; i < button.length; i++) {
  button[i].addEventListener('mouseenter', hoverColor);
  button[i].addEventListener('mouseleave', hoverColor);
};