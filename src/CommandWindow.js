/*
Command Window Event handling:

- Pieshell Command Window Close button: gotta get the window which is grandparent rather than child

*/

import React, { Component } from 'react';
import './stylesheets/css/CommandWindow.css';
import Plus from 'mdi-react/PlusIcon.js';
import CloseOutline from 'mdi-react/CloseOutlineIcon.js';
import { ToggleAbridgedModal, DisableExecute, EnableExecute, ClearCommandArgs } from './listeners.js';


function CloseCommandArgument(e){
	e.target.parentElement.style.display = "none";
	if (e.target.getAttribute("data") === "CommandBase"){
		ToggleAbridgedModal();
		DisableExecute();
	}
	else{
		console.log(e.target.getAttribute('data'));
		var Checkbox = document.getElementById(e.target.getAttribute('data'));
		if (Checkbox !== null){
			Checkbox.className = "CheckBox";
		}
		
	}
}

function CommandArgument(props){
	let command = props.command;
	let color = props.color;
	
	return(
		<div className="CommandArgument" id={props.mykey + "Arg"} style={{backgroundColor: color}}>
			<div className="Close" onClick={CloseCommandArgument} data={props.mykey}/>
			<div className="CommandLabel" id={props.mykey + "Label"}>{command}</div>
		</div>
	);
}

function CommandBase(props){
	let command = props.command;
	//let arg =  props.arg;
	let color = props.color;
	//let initialState = props.initialState;
	
	return (
		<div className="CommandBase" style={{backgroundColor: color}}>
			<div className="Close" data="CommandBase" onClick={CloseCommandArgument}/>
			<div className="CommandLabel">{command}</div>
			<CommandArgument color="#80c0c0" mykey="interactive" command="-I" />
			<CommandArgument color="#80c080" mykey="queue" command="-q batch" />
			<CommandArgument color="#c0c080" mykey="number" command="-l procs=1" />
			<CommandArgument color="#c08080" mykey="time" command="-l walltime=48:00:00" />
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

					{/* Chmod command base stuff */}
					<div className="CommandBaseChmod" style={{backgroundColor: "#d0d0d0"}}>
						<div className="Close" data="CommandBase" onClick={CloseCommandArgument}/>
						<div className="CommandLabel">{"chmod"}</div>
						<div className="CommandArgument" id="recursiveArg" style={{backgroundColor: "#80c080"}}>
							<div className="Close" onClick={CloseCommandArgument} data="recursiveCheckbox"/>
							<div className="CommandLabel" id="recursiveLabel">{"-R"}</div>
						</div>

						<CommandArgument color="#c0c080" mykey="GW" command="g+w" />
						<CommandArgument color="#80c0c0" mykey="file" command="~/group_project" />
					</div>
				</div>
				<div className="CommandButtonContainer">
					<button className="CommandButton" id="Clear" onClick={ClearCommandArgs}>Clear</button>
					<button className="CommandButton" id="Explore" disabled>Explore...</button>
					<button className="CommandButton" id="Macro" disabled>Macro...</button>
					<button className="CommandButton" id="Execute" onClick={ClearCommandArgs}>Execute</button>
				</div>
			</div>
		);
	}
}

export default CommandWindow;
