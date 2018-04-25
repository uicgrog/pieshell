/*
Abridged modal event handling notes:

- Path Input: we verifying input?

- Destination Input: we verifying input?

- # Processor: limit input to numbers only. already limited to 2 characters. valid inputs are 1-16 for now

- Max run time: limit inputs to 00-60. already limited to 2 characters as well.
*/

import React, { Component } from 'react';
import './stylesheets/css/AbridgedModal.css';
import PropTypes from 'prop-types';
import Plus from 'mdi-react/PlusIcon.js';


function Check(e){
	if (e.target.className === "CheckBox"){
		var CommandBase = document.getElementsByClassName("CommandBase")[0];
		CommandBase.style.display = "inline-block";
		
		e.target.className = "CheckBox-Checked";
		var argDivID = e.target.parentElement.id + "Arg";
		var argDiv = document.getElementById(argDivID);
		argDiv.style.display = "inline-block";
	}
	else{
		e.target.className = "CheckBox";
		var argDivID = e.target.parentElement.id + "Arg";
		var argDiv = document.getElementById(argDivID);
		argDiv.style.display = "none";
	}
}

function LongInputDiv(props) {
	let id = props.id;
	let name = props.name;
	let label =  props.label;
	let color = props.color;
	let disabled = props.disabled;
	return(
		<div className={name + "Div"} id={id} style={{backgroundColor: color}}>
			<div className="Label">{label}:</div>
			<input type="text" className={name + "Input"} disabled={disabled}/>
		</div>
	);
}

function CheckBoxDiv(props) {
	let id = props.id;
	let name = props.name;
	let label =  props.label;
	let color = props.color;
	let disabled = props.disabled;
	return(
		<div className="CheckBoxDiv" id={id} style={{backgroundColor: color}}>
			<div className="CheckBox" onClick={Check} id={id + "Checkbox"}/>
			<div className="Label">{label}</div>
		</div>
	);
}


{/*
function PathDiv(props) {
	return <LongInputDiv name="Path" id={props.id} label={props.label} color={props.color} />;
};

function QueueDiv(props) {
	return <CheckBoxInputDiv name="Queue" id={props.id} label={props.label} color={props.color} />;
}
*/}

function QueueDiv(props){
	let id = props.id;
	let label =  props.label;
	let color = props.color;
	let initialState = props.initialState;
	
	return (
		<div className="QueueDiv" id={id} style={{backgroundColor: color}}>
			<div className="CheckBox" onClick={Check} id={id + "Checkbox"}/>
			<div className="Label">{label}:</div>
			<input type="text" className="Queue" />
		</div>
	);
}

function NumberDiv(props){
	let id = props.id;
	let label =  props.label;
	let color = props.color;
	let initialState = props.initialState;
	let numberRangeStart = props.numberRangeStart;
	let numberRangeEnd = props.numberRangeEnd;
	
	return (
		<div className="NumberDiv" id={id} style={{backgroundColor: color}}>
			<div className="CheckBox" onClick={Check} id={id + "Checkbox"}/>
			<div className="Label">{label}:</div>
			<input type="text" className="NumberInput" maxLength="2"/>
		</div>
	);
}

function TimeDiv(props){
	let id = props.id;
	let label =  props.label;
	let color = props.color;
	let initialState = props.initialState;
	
	return (
		<div className="TimeDiv" id={id} style={{backgroundColor: color}}>
			<div className="CheckBox" onClick={Check} id={id + "Checkbox"}/>
			<div className="Label">{label}:</div>
			<input type="text" className="TimeInput-Hours" id="hours" maxLength="3"/>:
			<input type="text" className="TimeInput-Minutes" id="mins" maxLength="2"/>:
			<input type="text" className="TimeInput-Seconds" id="secs" maxLength="2"/>
		</div>
	);
}

class AbridgedModal extends Component {
	constructor(props) {
		super(props);
		this.name = this.props.name;
		this.components = this.props.components;
	}
	
	render(){
		return (
			<div className="AbridgedModal">
				<div className="AbridgedModalTitle"><div>{this.name}</div></div>
				<div className="AbridgedComponents">
					<CheckBoxDiv id="interactive" label="interactive" color="#a0a0c0" initialState={false} />
					<LongInputDiv name="Path" id="path" label="path to submit script" color="#c0a0c0" disabled />
					<QueueDiv id="queue" label="queue" color="#c0a0a0" initialState={false}/>
					<NumberDiv id="number" label="# processors" color="#c0c0a0" initialState={false} numberRangeStart={1} numberRangeEnd={16}/>
					<TimeDiv id="time" label="max run time" color="#a0c0a0" initialState={false} />
				</div>
			</div>
		);
	}
}


{/*{this.components[0].type}
						{this.components}
						{this.components.map(function(component, key) {
							{component.key.type === "CheckBox" && 
								<CheckBoxDiv
									id={component.id}
									label={component.label}
									color={component.color}
									initialState={false} />
							}
							{component.type === "Path" &&
								<LongInputDiv
									name="Path"
									id={component.id}
									label={component.label}
									color={component.color} />
									disabled
							}
							{component.type === "Queue" &&
								<QueueDiv
									id={component.id}
									label={component.label}
									color={component.color}
									initialState={false} />
							}
							{component.type === "Number" &&
								<NumberDiv
									id={component.id}
									label={component.label}
									color={component.color}
									initialState={false} />
							}
							{component.type === "Time" &&
								<TimeDiv
									id={component.id}
									label={component.label}
									color={component.color}
									initialState={false} />
							}
						})}*/}

export default AbridgedModal;
