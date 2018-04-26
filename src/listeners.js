export default function listeners() {
	/*https://appendto.com/2017/01/react-events-101/*/
	window.addEventListener('load', () => {
		DisableExecute();
	});
	document.addEventListener('ready', () => {
		
	});
	document.addEventListener('click', () => {
		
	});
	
	document.addEventListener('click', (e) => {
		console.log(e.target);
		// Here ya guys goooo :D use this as an example of how to add listeners.
		if(e.target.localName === "html"){
			//console.log(">>> transparent, click-through app area, don't register click");
		}
		if (e.target.className === "PieCenter"){
			console.log(">>> user clicked, register click for 3 wedges not 4, 4 handled below code");
		}
		if (e.target.className === "Draggable"){
			//console.log(">>> draggable");
		}
		if (e.target.className === "CheckBox"){
			// handled in AbridgedModal.js
		}
	});

    var ClearButton = document.getElementById('Clear');
    ClearButton.addEventListener('click', () => {
        ToggleAbridgedModal();
		DisableExecute();
    });
	

    var ExecuteButton = document.getElementById('Execute');
    ExecuteButton.addEventListener('click', () => {
		UncheckAllBoxes();	//patches: max time limit shouldn't be checked after an Execute
        ToggleAbridgedModal();
		DisableExecute();
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
		var option = document.getElementsByClassName('PieSliceBottom')[0].children[0];
		if (option.textContent === "submit job"){
			ClearCommandArgs();
			var AMDisplaying = ToggleAbridgedModal();
			UncheckAllBoxes();
			DefaultQSub();
			if (AMDisplaying){
				DisableExecute();
			}
		}
		else if (option.textContent === "chmod"){
			//todo
		}
	});
	
	// toggle show abridge modal on abridge modal title click
	var AbridgedModalTitle = document.getElementsByClassName('AbridgedModalTitle')[0];
	AbridgedModalTitle.addEventListener('click', () => {
		console.log("HEREEE", AbridgedModalTitle);
		ToggleAbridgedModal();
		DisableExecute();
	});

	// queue input check
	var QueueInput = document.getElementsByClassName('Queue')[0];
	QueueInput.addEventListener('input', (e) => {
		var val = e.target.value;
		
		var queueLabel = document.getElementById('queueLabel');
		var split = queueLabel.textContent.split(" ");
		queueLabel.textContent = split[0] + " " + val.toString();
		
		if (val !== "batch"){
			QueueInput.className = "Queue ErrorInput";
			DisableExecute();
		}
		else {
			QueueInput.className = "Queue";
			EnableExecute();
		}
	});
	
	// # of processor input check
	var ProcInput = document.getElementById('number').children[2];
	ProcInput.addEventListener('input', (e) => {
		var val = parseInt(e.target.value, 10);
		
		var numberLabel = document.getElementById('numberLabel');
		var split = numberLabel.textContent.split("=");
		numberLabel.textContent = split[0] + "=" + val.toString();
		
		if (val < 1 || val > 24 || isNaN(val)){
			ProcInput.className = "NumberInput ErrorInput";
			DisableExecute();
		}
		else {
			ProcInput.className = "NumberInput";
			EnableExecute();
		}
	});
	
	// (hours) max run time input check
	var HourInput = document.getElementById('hours');
	HourInput.addEventListener('input', (e) => {
		var val = parseInt(e.target.value, 10);
		
		var timeLabel = document.getElementById('timeLabel');
		var split = timeLabel.textContent.split(":");
		timeLabel.textContent = "-l walltime=" + val.toString() + ":" + split[1] + ":" + split[2];
		
		if (val < 0 || val > 720 || isNaN(val)){
			HourInput.className = "TimeInput-Hours ErrorInput";
			DisableExecute();
		}
		else {
			HourInput.className = "TimeInput-Hours";
			EnableExecute();
		}
	});
	
	// (mins) max run time input check
	var MinInput = document.getElementById('mins');
	MinInput.addEventListener('input', (e) => {
		var val = parseInt(e.target.value, 10);
		
		var timeLabel = document.getElementById('timeLabel');
		var split = timeLabel.textContent.split(":");
		timeLabel.textContent = split[0] + ":" + val.toString() + ":" + split[2];
		
		if (val < 0 || val > 59 || isNaN(val)){
			MinInput.className = "TimeInput-Minutes ErrorInput";
			DisableExecute();
		}
		else {
			MinInput.className = "TimeInput-Minutes";
			EnableExecute();
		}
	});
	
	// (secs) max run time input check
	var SecInput = document.getElementById('secs');
	SecInput.addEventListener('input', (e) => {
		var val = parseInt(e.target.value, 10);
		
		var timeLabel = document.getElementById('timeLabel');
		var split = timeLabel.textContent.split(":");
		timeLabel.textContent = split[0] + ":" + split[1] + ":" + val.toString();
			
		if (val < 0 || val > 59 || isNaN(val)){
			SecInput.className = "TimeInput-Seconds ErrorInput";
			DisableExecute();
		}
		else {
			SecInput.className = "TimeInput-Seconds";
			EnableExecute();
		}
	});

	
	
}

export function ClearCommandArgs(){	
	var CommandBase = document.getElementsByClassName("CommandBase")[0];
	CommandBase.style.display = "none";	
	
	var interactive = document.getElementById("interactiveArg");
	interactive.style.display = "none";
	
	var number = document.getElementById("numberArg");
	number.style.display = "none";
	
	var time = document.getElementById("timeArg");
	time.style.display = "none";
	
	var queue = document.getElementById("queueArg");
	queue.style.display = "none";	
}

function UncheckAllBoxes(){
	var allCheckBoxChecked = document.getElementsByClassName('CheckBox-Checked');
	/*for (var i = 0; i < allCheckBoxChecked.length; i++){
		allCheckBoxChecked[0].className = "CheckBox";
	}*/
	if (allCheckBoxChecked[3] !== undefined) {
		allCheckBoxChecked[3].className = "CheckBox";
	}
	if (allCheckBoxChecked[2] !== undefined) {
		allCheckBoxChecked[2].className = "CheckBox";
	}
	if (allCheckBoxChecked[1] !== undefined) {
		allCheckBoxChecked[1].className = "CheckBox";
	}
	if (allCheckBoxChecked[0] !== undefined) {
		allCheckBoxChecked[0].className = "CheckBox";
	}
}

function CheckErrors(){
	var errors = document.getElementsByClassName("ErrorInput");
	
	if (errors.length === 0){
		var executeButton = document.getElementById("Execute");
		executeButton.disabled = "";
	}
	else {
		DisableExecute();
	}
}

export function EnableExecute(){
	CheckErrors();
}

export function DisableExecute(){
	var executeButton = document.getElementById("Execute");
	executeButton.disabled = "disabled";
}

export function ClearDisplay(object){
	object.style.display = "none";
}

export function ToggleDisplay(object){
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
export function DefaultQSub(){
	var queue = document.getElementById("queue");
    queue.children[2].value = "batch";
	var QueueInput = document.getElementsByClassName('Queue')[0];
	QueueInput.className = "Queue";

    var number = document.getElementById("number");
    number.children[2].value = "1";
	var ProcInput = document.getElementById('number').children[2];
	ProcInput.className = "NumberInput";

    var time = document.getElementById("time");
    time.children[2].value = "48";
    time.children[3].value = "00";
    time.children[4].value = "00";
	var HourInput = document.getElementById('hours');
	HourInput.className = "TimeInput-Hours";
	var MinInput = document.getElementById('mins');
	MinInput.className = "TimeInput-Minutes";
	var SecInput = document.getElementById('secs');
	SecInput.className = "TimeInput-Seconds";
}
	

export function ToggleAbridgedModal(){
	DefaultQSub();
	EnableExecute();
	
	var PieSliceBottomOption = document.getElementsByClassName('PieSliceBottom')[0].children[0];

	if (PieSliceBottomOption.textContent === "submit job"){
		var AbridgedModal = document.getElementsByClassName('AbridgedModal')[0];

	    var CommandWindow = document.getElementsByClassName('CommandWindow')[0];
		ToggleDisplay(AbridgedModal);
	}
}


