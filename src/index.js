import _ from 'lodash';
//import Style from ./style.css';
//import Icon from './icon.png';
//import Data from './data.xml';

function component() {
	var element = document.createElement('div');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	//element.classList.add('hello');

	// Add the image to our existing div.
	//var myIcon = new Image();
	//myIcon.src = Icon;

	//element.appendChild(myIcon);

	return element;
}

document.body.appendChild(component());