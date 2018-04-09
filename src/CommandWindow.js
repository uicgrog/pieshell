/*
Command Window Event handling:

- Close buttons: .Close on click, get child (either .CommandBase or .CommandArgument, set display none

- Pieshell Command Window Close button: gotta get the window which is grandparent rather than child

- Clear, Explore, Macro, Execute: IDs are #Clear, #Explore, #Macro, #Execute

*/

import React, { Component } from 'react';
import './stylesheets/css/CommandWindow.css';
import PropTypes from 'prop-types';
import Plus from 'mdi-react/PlusIcon.js';
import Close from 'mdi-react/CloseIcon.js';
import CloseCircleOutline from 'mdi-react/CloseCircleOutlineIcon.js';
import CloseOutline from 'mdi-react/CloseOutlineIcon.js';
import AlertOutline from 'mdi-react/AlertOutlineIcon.js';

function CommandArgument(props){
	let command = props.command;
	let color = props.color;
	
	return(
		<div className="CommandArgument" style={{backgroundColor: color}}>
			<div className="Close">
				<CloseCircleOutline color="#666" size="16px" />
			</div>
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
			<div className="Close">
				<CloseCircleOutline color="#666" size="16px" />
			</div>
			<div className="CommandLabel">{command}</div>
			<CommandArgument color="#a4c2d1" command="-I" />
			<CommandArgument color="#d2d2c0" command="-l procs=1" />
			<CommandArgument color="#a8bfb0" command="-l walltime=48:00:00" />
		</div>
	);
}

const qsubArgumentList = ["sample", "-I", "-l procs=1", "-l walltime=48:00:00"];

class CommandWindow extends Component {
	constructor(props) {
		super(props);
		this.components = this.props.components;
	}
	
	render(){
		return (
			<div className="CommandWindow">
				<div className="CommandWindowTitle">
					<div className="CloseOutline">
						<CloseOutline color="fff" />{/*replace with correct X*/}
					</div>
					{"pieshell command window"}</div>
				<div className="CommandBox">
					<CommandBase command="qsub" color="#d0d0d0" arg={qsubArgumentList} />
				</div>
				<div className="CommandButtonContainer">
					<button className="CommandButton" id="Clear">Clear</button>
					<button className="CommandButton" id="Explore" disabled>Explore...</button>
					<button className="CommandButton" id="Macro" disabled>Macro...</button>
					<button className="CommandButton" id="Execute">Execute</button>
				</div>
			</div>
		);
	}
}

export default CommandWindow;