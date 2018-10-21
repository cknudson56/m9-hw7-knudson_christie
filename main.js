//BUTTON HOVER
var button = document.getElementsByClassName('hover-button');

function hoverColor() {
	this.classList.toggle('hover-color');
};

for (i=0; i < button.length; i++) {
	button[i].addEventListener('mouseenter', hoverColor);
	button[i].addEventListener('mouseleave', hoverColor);
};



//LOCATION DROP MENU
var locationButton = document.getElementById('location-button');
var locationMenu = document.getElementById('location-menu');

function dropDownLocations() {
	locationMenu.classList.toggle('show-div');
};
//locationButton.addEventListener('click', dropDownLocations);
locationButton.onclick = dropDownLocations;



//GRID HOVER
var imgItem = document.getElementsByClassName('flex-img');
function opacImg() {
	this.classList.toggle('opac-Img');
}
for (i=0; i < imgItem.length; i++) {
	imgItem[i].addEventListener('mouseenter', opacImg);
	imgItem[i].addEventListener('mouseleave', opacImg);
};
