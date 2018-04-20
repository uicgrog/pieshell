export default function listeners() {
	/*https://appendto.com/2017/01/react-events-101/*/
	document.addEventListener('load', () => {
		console.log("?? load no show");
	});
	document.addEventListener('ready', () => {
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
		if (e.target.className === "CheckBox"){
			// handled in AbridgedModal.js
		}
	});

    var ClearButton = document.getElementById('Clear');
    ClearButton.addEventListener('click', () => {
        ToggleAbridgedModal();
    });
	

    var ExecuteButton = document.getElementById('Execute');
    ExecuteButton.addEventListener('click', () => {
        ToggleAbridgedModal();
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
		
		// toggle show abridge modal on bottom wedge click
		ToggleAbridgedModal();
	});
	
	// toggle show abridge modal on abridge modal title click
	var AbridgedModalTitle = document.getElementsByClassName('AbridgedModalTitle')[0];
	AbridgedModalTitle.addEventListener('click', () => {
		ToggleAbridgedModal();
	});

    var queue = document.getElementById("queue");
    queue.children[2].value = "batch";

    var number = document.getElementById("number");
    number.children[2].value = "1";

    var time = document.getElementById("time");
    time.children[2].value = "48";
    time.children[3].value = "00";
    time.children[4].value = "00";

}



function ClearDisplay(object){
	object.style.display = "none";
}

function ToggleDisplay(object){
	var displayRule = object.style.display;
	
	var CommandBase = document.getElementsByClassName("CommandBase")[0];

	if (displayRule === "" || displayRule === "none"){
		object.style.display = "block";
		CommandBase.style.display = "inline-block";
	}
	else if (displayRule === "block"){
		object.style.display = "none";
		CommandBase.style.display = "none";
	}
}

function ToggleAbridgedModal(){
	var PieSliceBottomOption = document.getElementsByClassName('PieSliceBottom')[0].children[0];
	

	var CommandBase = document.getElementsByClassName("CommandBase")[0];

	if (PieSliceBottomOption.textContent === "submit job"){
		var AbridgedModal = document.getElementsByClassName('AbridgedModal')[0];


	        var CommandWindow = document.getElementsByClassName('CommandWindow')[0];
		ToggleDisplay(AbridgedModal);
	}
}


