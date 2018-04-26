
export var backButtonStack=[];
export var connected = false;
export default function listeners() {

    disableWedge("Right");
    disableWedge("Top");
    disableWedge("Bottom");

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
		HideAbridgedModal();
		HideAbridgedModalChmod();
		DefaultQSub();
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
		console.log(backButtonStack);
		var lastScreen = backButtonStack.pop();
		if(lastScreen==="commands"){
            document.getElementById("BackButton").hidden=false;
			openCommands();

		}else if(lastScreen==="home"){
			openHome();
		}else if(lastScreen==="connect"){
            document.getElementById("BackButton").hidden=false;
			openConnect();
		}else if(lastScreen==="scheduler"){
            document.getElementById("BackButton").hidden=false;
			openScheduler();
		}else if(lastScreen==="file perms"){
            document.getElementById("BackButton").hidden=false;
			openFilePerms();
		}
	});
	
	/*https://codepen.io/anon/pen/bvoavP*/
	var FourWedgeTop = document.getElementById('FourWedgeTop');
	FourWedgeTop.addEventListener('click', () => {
		console.log(">>> Top wedge (4)");
		openFilePerms();
	});
	
    var FourWedgeRight = document.getElementById('FourWedgeRight');
	FourWedgeRight.addEventListener('click', () => {
		console.log(">>> Right wedge");

        var option = document.getElementsByClassName('PieSliceRight')[0].children[0];
        if (option.textContent === "screen session24252-pts-0"){   //SELECTING CONNECTION
			openHome();
        } else if(option.textContent === "commands"){   //SELECTING COMMANDS
			openCommands();
        }
	});
	function openFilePerms(){

        var draggable = document.getElementsByClassName("draggable");
        backButtonStack.push(draggable.textContent);
        draggable.textContent="file perms";
        document.getElementById("BackButton").hidden=false;
        var option = document.getElementsByClassName('PieSliceTop')[0].children[0];
        if (option.textContent === "file perms."){   //SELECTING file perms.
            var pieSliceLeft = document.getElementsByClassName('PieSliceLeft')[0].children[0];
            pieSliceLeft.textContent = "change owner";
			disableWedge('Left');
            var pieSliceRight = document.getElementsByClassName('PieSliceRight')[0].children[0];
            pieSliceRight.textContent = "change group";
			disableWedge('Right');
            var pieSliceTop = document.getElementsByClassName('PieSliceTop')[0].children[0];
            pieSliceTop.textContent = "umask";
			disableWedge('Top');
            var pieSliceBottom = document.getElementsByClassName('PieSliceBottom')[0].children[0];
            pieSliceBottom.textContent = "change perms.";
			enableWedge('Bottom');
        }
	}
	function openHome(){
        document.getElementById("BackButton").hidden=true;
		var draggable = document.getElementsByClassName("draggable");
        backButtonStack = [];
        draggable.textContent="home";
		document.getElementsByClassName('PieCenter')[0].style.backgroundColor = 'Lime';
        var pieSliceLeft = document.getElementsByClassName('PieSliceLeft')[0].children[0];
        pieSliceLeft.textContent = "connect";
		enableWedge('Left');
        var pieSliceRight = document.getElementsByClassName('PieSliceRight')[0].children[0];
        pieSliceRight.textContent = "commands";
		enableWedge('Right');
        var pieSliceTop = document.getElementsByClassName('PieSliceTop')[0].children[0];
        pieSliceTop.textContent = "layout";
		disableWedge('Top');
        var pieSliceBottom = document.getElementsByClassName('PieSliceBottom')[0].children[0];
        pieSliceBottom.textContent = "history";
		disableWedge('Bottom');
	}
	function openCommands(){
        if(connected == false){
			return;
        }
        document.getElementById("BackButton").hidden=false;
        var draggable = document.getElementsByClassName("draggable");
        backButtonStack.push("home");
        console.log(backButtonStack);
        draggable.textContent="commands";
        var pieSliceLeft = document.getElementsByClassName('PieSliceLeft')[0].children[0];
        pieSliceLeft.textContent = "scheduler";
		enableWedge('Left');
        var pieSliceRight = document.getElementsByClassName('PieSliceRight')[0].children[0];
        pieSliceRight.textContent = "sysadmin";
		disableWedge('Right');
        var pieSliceTop = document.getElementsByClassName('PieSliceTop')[0].children[0];
        pieSliceTop.textContent = "file perms.";
		enableWedge('Top');
        var pieSliceBottom = document.getElementsByClassName('PieSliceBottom')[0].children[0];
        pieSliceBottom.textContent = "compilers";
		disableWedge('Bottom');
	}
	function openConnect(){
		enableWedge("Top");
		enableWedge("Bottom");
		enableWedge("Right");
        var draggable = document.getElementsByClassName("draggable");
        backButtonStack.push("home");
        draggable.textContent="connect";
        var pieSliceLeft = document.getElementsByClassName('PieSliceLeft')[0].children[0];
        pieSliceLeft.textContent = "new tmux session";
        var pieSliceRight = document.getElementsByClassName('PieSliceRight')[0].children[0];
        pieSliceRight.textContent = "screen session24252-pts-0";
        var pieSliceTop = document.getElementsByClassName('PieSliceTop')[0].children[0];
        pieSliceTop.textContent = "new screen session";
        var pieSliceBottom = document.getElementsByClassName('PieSliceBottom')[0].children[0];
        pieSliceBottom.textContent = "tmux 0";
        connected=true;
	}

	function openScheduler(){
        document.getElementById("BackButton").hidden=false;
        var draggable = document.getElementsByClassName("draggable");
        backButtonStack.push(draggable.textContent);
        draggable.textContent="scheduler";
        var pieSliceLeft = document.getElementsByClassName('PieSliceLeft')[0].children[0];
        pieSliceLeft.textContent = "job status";
		disableWedge('Left');
        var pieSliceRight = document.getElementsByClassName('PieSliceRight')[0].children[0];
        pieSliceRight.textContent = "delete job";
		disableWedge('Right');
        var pieSliceTop = document.getElementsByClassName('PieSliceTop')[0].children[0];
        pieSliceTop.textContent = "hold job";
		disableWedge('Top');
        var pieSliceBottom = document.getElementsByClassName('PieSliceBottom')[0].children[0];
        pieSliceBottom.textContent = "submit job";
		enableWedge('Bottom');
	}
    var FourWedgeLeft = document.getElementById('FourWedgeLeft');
	FourWedgeLeft.addEventListener('click', () => {
		console.log(">>> Left wedge");
		var center = document.getElementsByClassName("draggable");

        var option = document.getElementsByClassName('PieSliceLeft')[0].children[0];
		if (option.textContent === "connect"){    //CLICKING CONNECT
            document.getElementById("BackButton").hidden=false;
            openConnect();
		}
        else if(option.textContent === "scheduler"){   //SELECTING COMMANDS
            document.getElementById("BackButton").hidden=false;
            openScheduler();
        }
	});


	function openSubmitJob(){
        ClearCommandArgs();
        var AMDisplaying = ToggleAbridgedModal();
        UncheckAllBoxes();
        DefaultQSub();
        if (AMDisplaying){
            DisableExecute();
        }
	}

	function openChangePerms(){
        ClearCommandArgsChmod();
        DefaultChmod();
        UncheckAllBoxesChmod();
        ToggleAbridgedModalChmod();
        console.log("CHANGE PERMS");
	}
    var FourWedgeBottom = document.getElementById('FourWedgeBottom');
	FourWedgeBottom.addEventListener('click', () => {
		console.log(">>> Bottom wedge");
		
		// toggle show abridge modal on bottom wedge click
		var option = document.getElementsByClassName('PieSliceBottom')[0].children[0];
		if (option.textContent === "submit job"){
            document.getElementById("BackButton").hidden=false;
            openSubmitJob();
		}
		else if (option.textContent === "change perms."){
            document.getElementById("BackButton").hidden=false;
            openChangePerms();
		}
	});

	function disableWedge(wedgePos){
		console.log("disable "+wedgePos);
		var wedge = document.getElementById("FourWedge" + wedgePos).className+=" disabled";
	}
	function enableWedge(wedgePos){
        var wedge = document.getElementById("FourWedge"+wedgePos);
        var className = wedge.className;
        var classArray = className.split(' ');
		var newClass = []
        for(var name in classArray){
        	if(name!="disabled"){
        		newClass.push(name);
			}
		}
		wedge.className= newClass.join(' ');
	}
	
	// toggle show abridge modal on abridge modal title click
	var AbridgedModalTitle = document.getElementsByClassName('AbridgedModalTitle')[0];
	AbridgedModalTitle.addEventListener('click', () => {
		ToggleAbridgedModal();
		DisableExecute();
	});

	// toggle show abridge modal <<CHMODD>> on abridge modal title click
	var AbridgedModalChmodTitle = document.getElementsByClassName('AbridgedModalChmodTitle')[0];
	AbridgedModalChmodTitle.addEventListener('click', () => {
		ToggleAbridgedModalChmod();
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

	// "~/group_project" input listener
	var FileInput = document.getElementsByClassName('FileInput')[0];
	FileInput.addEventListener('input', (e) => {
		var fileArg = document.getElementById('fileArg');
		fileArg.style.display = "inline-block";

		var val = e.target.value;

		var fileLabel = document.getElementById('fileLabel');
		fileLabel.textContent = val.toString();

		if (val !== "~/group_project"){
			FileInput.className = "FileInput ErrorInput";
			DisableExecute();
			if (val === ""){
				document.getElementById('fileArg').style.display = "none";
			}
		}
		else {
			FileInput.className = "FileInput";
			EnableExecute();
		}
	});

	// G+W
	var GW = document.getElementById('GW');
	GW.addEventListener('click', (e) => {
		var GWArg = document.getElementById('GWArg');
		if (GWArg.style.display !== "inline-block"){
			GWArg.style.display = "inline-block";
			EnableExecute();
		}
		else{
			GWArg.style.display = "none";
			DisableExecute();
		}
	});
    backButtonStack=[];
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

export function ClearCommandArgsChmod(){
	var CommandBase = document.getElementsByClassName("CommandBaseChmod")[0];
	CommandBase.style.display = "none";

	var recursive = document.getElementById("recursiveArg");
	recursive.style.display = "none";

	var GW = document.getElementById("GWArg");
	GW.style.display = "none";

	var file = document.getElementById("fileArg");
	file.style.display = "none";
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

function UncheckAllBoxesChmod(){
	// todo maybe?
};

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
	var QueueLabel = document.getElementById('queueLabel');
	QueueLabel.textContent = "-q batch";

    var number = document.getElementById("number");
    number.children[2].value = "1";
	var ProcInput = document.getElementById('number').children[2];
	ProcInput.className = "NumberInput";
	var NumberLabel = document.getElementById('numberLabel');
	NumberLabel.textContent = "-l procs=1";

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
	var TimeArg = document.getElementById('timeArg');
	TimeArg.value = "-l walltime=48:00:00";

	var TimeLabel = document.getElementById('timeLabel');
	TimeLabel.textContent = "-l walltime=48:00:00";

}

export function DefaultChmod(){
	document.getElementsByClassName('FileInput')[0].value = "";
	document.getElementById('recursiveCheckbox').className = "CheckBox";
	document.getElementById('GW').className = "PlusBox";
	document.getElementById('stickyCheckbox').className = "CheckBox";


};

export function ToggleDisplayChmod(object){
	var displayRule = object.style.display;
	
	var CommandBase = document.getElementsByClassName("CommandBaseChmod")[0];

	if (displayRule === "" || displayRule === "none"){
		object.style.display = "block";
		CommandBase.style.display = "inline-block";
	}
	else if (displayRule === "block"){
		object.style.display = "none";
		CommandBase.style.display = "none";
	}
}

export function ToggleAbridgedModalChmod(){
	var PieSliceBottomOption = document.getElementsByClassName('PieSliceBottom')[0].children[0];

	if (PieSliceBottomOption.textContent === "change perms."){
		var AbridgedModal = document.getElementsByClassName('AbridgedModalChmod')[0];

	    var CommandWindow = document.getElementsByClassName('CommandWindow')[0];
		ToggleDisplayChmod(AbridgedModal);
	}
};

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


export function HideAbridgedModal(){
	var CommandBase = document.getElementsByClassName("CommandBase")[0];
	var AbridgedModal = document.getElementsByClassName('AbridgedModal')[0];
	AbridgedModal.style.display = "none";
	CommandBase.style.display = "none";
};
export function HideAbridgedModalChmod(){
	var CommandBase = document.getElementsByClassName("CommandBaseChmod")[0];
	var AbridgedModal = document.getElementsByClassName('AbridgedModalChmod')[0];
	AbridgedModal.style.display = "none";
	CommandBase.style.display = "none";
};

function resetToDefault() {


}

