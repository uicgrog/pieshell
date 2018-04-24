/*
Command Window Event handling:

- Pieshell Command Window Close button: gotta get the window which is grandparent rather than child

*/

import React, { Component } from 'react';
import './stylesheets/css/CommandWindow.css';
import PropTypes from 'prop-types';
import Plus from 'mdi-react/PlusIcon.js';
import CloseOutline from 'mdi-react/CloseOutlineIcon.js';
import { ToggleAbridgedModal } from './listeners.js';

function CloseCommandArgument(e){
	e.target.parentElement.style.display = "none";
	if (e.target.getAttribute("data") === "CommandBase"){
		ToggleAbridgedModal();
	}
}

function Clear(){
	var AbridgedModal = document.getElementsByClassName('AbridgedModal')[0];
	AbridgedModal.style.display = "none";	

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
	
	var CheckedBoxes = document.getElementsByClassName("CheckBox-Checked");
	if(CheckedBoxes[0] != undefined){
		CheckedBoxes[0].className = "CheckBox";
	}
	if(CheckedBoxes[0] != undefined){
		CheckedBoxes[0].className = "CheckBox";
	}
	if(CheckedBoxes[0] != undefined){
		CheckedBoxes[0].className = "CheckBox";
	}
	
}

function CommandArgument(props){
	let command = props.command;
	let id = props.id;
	let color = props.color;
	
	return(
		<div className="CommandArgument" id={id} style={{backgroundColor: color}}>
			<div className="Close" onClick={CloseCommandArgument}/>
			<div className="CommandLabel">{command}</div>
		</div>
	);
}

function CommandBase(props){
	let command = props.command;
	let arg =  props.arg;
	let color = props.color;
	let initialState = props.initialState;
	
	return (
		<div className="CommandBase" style={{backgroundColor: color}}>
			<div className="Close" data="CommandBase" onClick={CloseCommandArgument}/>
			<div className="CommandLabel">{command}</div>
			<CommandArgument color="#a0a0c0" id="interactiveArg" command="-I" />
			<CommandArgument color="#d0b0b0" id="queueArg" command="-q batch" />
			<CommandArgument color="#d2d2c0" id="numberArg" command="-l procs=1" />
			<CommandArgument color="#a8bfb0" id="timeArg" command="-l walltime=48:00:00" />
		</div>
	);
}

const qsubArgumentList = ["sample", "-I", "-q batch", "-l procs=1", "-l walltime=48:00:00"];

class CommandWindow extends Component {
	constructor(props) {
		super(props);
		this.components = this.props.components;
	}
	
	render(){
		return (
			<div className="CommandWindow">
				<div className="CommandWindowTitle">
					<div className="CloseOutline" />
					{"pieshell command window"}
				</div>
				<div className="CommandBox">
					<CommandBase command="qsub" color="#d0d0d0" arg={qsubArgumentList} />
				</div>
				<div className="CommandButtonContainer">
					<button className="CommandButton" id="Clear" onClick={Clear}>Clear</button>
					<button className="CommandButton" id="Explore" disabled>Explore...</button>
					<button className="CommandButton" id="Macro" disabled>Macro...</button>
					<button className="CommandButton" id="Execute" onClick={Clear}>Execute</button>
				</div>
			</div>
		);
	}
}

export default CommandWindow;
