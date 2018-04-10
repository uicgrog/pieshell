export default function listeners() {
	/*https://appendto.com/2017/01/react-events-101/*/
	document.addEventListener('load', () => {
		console.log("?? load no show");
	});
	document.addEventListener('Ready', () => {
		console.log("?? ready no show");
	});
	document.addEventListener('click', () => {
		console.log("oh ma lord. finally.");
	});
	
	document.addEventListener('click', (e) => {
		console.log(e.target);
		// Here ya guys goooo :D use this as an example of how to add listeners.
		if(e.target.localName === "html"){
			console.log(">>> transparent, click-through app area, don't register click");
		}
		if (e.target.className === "PieCenter"){
			console.log(">>> user clicked, register click for 3 wedges not 4, 4 handled below code");
		}
		if (e.target.className === "Draggable"){
			console.log(">>> draggable");
		}
	});
	
	var BackButton = document.getElementById('BackButton');
	BackButton.addEventListener('click', () => {
		console.log(">>> back button clicked");
	});
	
	/*https://codepen.io/anon/pen/bvoavP*/
	var FourWedgeTop = document.getElementById('FourWedgeTop');
	FourWedgeTop.addEventListener('click', () => {
		console.log(">>> Top wedge (4)");
	});
	
    var FourWedgeRight = document.getElementById('FourWedgeRight');
	FourWedgeRight.addEventListener('click', () => {
		console.log(">>> Right wedge");
	});

    var FourWedgeLeft = document.getElementById('FourWedgeLeft');
	FourWedgeLeft.addEventListener('click', () => {
		console.log(">>> Left wedge");
	});

    var FourWedgeBottom = document.getElementById('FourWedgeBottom');
	FourWedgeBottom.addEventListener('click', () => {
		console.log(">>> Bottom wedge");
	});
}
