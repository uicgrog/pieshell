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
	
	<div className={name + "Div"} id={id} style={"color:" + color + ";"}>
		<div className="Label">{label}:</div>
		<input type="text" className={name + "Input"} />
	</div>
}

function PathDiv(props) {
	return <LongInputDiv name="Path" id={props.id} label={props.label} color={props.color} />;
};

function TextDiv(props) {
	return <LongInputDiv name="Text" id={props.id} label={props.label} color={props.color} />;
}

function CheckBoxDiv(props){
	let id = props.id;
	let label =  props.label;
	let color = props.color;
	let initialState = props.initialState;
	
	return (
		<div className="CheckBoxDiv" id={id} style={"color:" + color + ";"}>
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
		<div className="NumberDiv" id={id} style={"color:" + color + ";"}>
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
		<div className="NumberDiv" id={id} style={"color:" + color + ";"}>
			<div className="CheckBox" />
			<div className="Label">{label}:</div>
			<input type="text" className="TimeInput-Hours" value="00" />:
			<input type="text" className="TimeInput-Minutes" value="00" />:
			<input type="text" className="TimeInput-Seconds" value="00" />:
		</div>
	);
}

class AbridgedModal extends Component {
	constructor(props) {
		super(props);
		this.category = this.props.category;
		this.numSlices = this.props.numSlices;
		this.options = this.props.options;
	}
	
	render(){
		return null;
	}
}

export default AbridgedModal;