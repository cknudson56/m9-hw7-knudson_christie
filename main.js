var button = document.getElementsByClassName('hover-button');

function hoverColor() {
	this.classList.toggle('hover-color');
};

function showDiv() {
	this.nextElementSibling.classList.toggle('show-div');
//The only way I can get the drop nav is this but it also affects the other button.
};

for (i=0; i < button.length; i++) {
	button[i].addEventListener('mouseenter', hoverColor);
	button[i].addEventListener('mouseleave', hoverColor);
	button[i].addEventListener('click', showDiv);
};

//var locationButton = document.getElementsByClassName('hover-button')[0];
//var locationDiv = document.getElementsByClassName('hide-div');

//function dropDownLocations() {
//	locationDiv.classList.toggle("show-div");
//};
//locationButton.onclick = dropDownLocations;