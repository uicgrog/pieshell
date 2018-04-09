import React, { Component } from 'react';
import './stylesheets/css/AbridgedModal.css';
import PropTypes from 'prop-types';
import Plus from 'mdi-react/PlusIcon.js';
import Close from 'mdi-react/CloseIcon.js';
import CloseCircleOutline from 'mdi-react/CloseCircleOutlineIcon.js';
import CloseOutline from 'mdi-react/CloseOutlineIcon.js';
import AlertOutline from 'mdi-react/AlertOutlineIcon.js';


function LongInputDiv(props) {
	let id = props.id;
	let name = props.name;
	let label =  props.label;
	let color = props.color;
	return(
		<div className={name + "Div"} id={id} style={{backgroundColor: color}}>
			<div className="Label">{label}:</div>
			<input type="text" className={name + "Input"} />
		</div>
	);
}

{/*
function PathDiv(props) {
	return <LongInputDiv name="Path" id={props.id} label={props.label} color={props.color} />;
};

function TextDiv(props) {
	return <LongInputDiv name="Text" id={props.id} label={props.label} color={props.color} />;
}
*/}

function CheckBoxDiv(props){
	let id = props.id;
	let label =  props.label;
	let color = props.color;
	let initialState = props.initialState;
	
	return (
		<div className="CheckBoxDiv" id={id} style={{backgroundColor: color}}>
			<div className="Label">{label}:</div>
			<div className="CheckBox" />
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
			<div className="CheckBox" />
			<div className="Label">{label}:</div>
			<input type="text" className="NumberInput" />
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
			<div className="CheckBox" />
			<div className="Label">{label}:</div>
			<input type="text" className="TimeInput-Hours" maxLength="2" />:
			<input type="text" className="TimeInput-Minutes" maxLength="2" />:
			<input type="text" className="TimeInput-Seconds" maxLength="2" />
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
					<CheckBoxDiv id="interactive" label="interactive" color="#a4c2d1" initialState={false} />
					<LongInputDiv name="Path" id="path" label="path to submit script" color="#d3b2d3" />
					<LongInputDiv name="Text" id="destination" label="destination queue" color="#fbd2c0" />
					<NumberDiv id="number" label="# processors" color="#d2d2c0" initialState={false} numberRangeStart={1} numberRangeEnd={16} />
					<TimeDiv id="time" label="max run time" color="#a8bfb0" initialState={false} />
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
							}
							{component.type === "Text" &&
								<LongInputDiv
									name="Text"
									id={component.id}
									label={component.label}
									color={component.color} />
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