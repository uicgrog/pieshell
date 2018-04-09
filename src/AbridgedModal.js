import React, { Component } from 'react';
import './stylesheets/css/AbridgedModal.css';
import PropTypes from 'prop-types';
import Plus from 'mdi-react/PlusIcon.js';
import Close from 'mdi-react/CloseIcon.js';
import CloseCircleOutline from 'mdi-react/CloseCircleOutlineIcon.js';
import CloseOutline from 'mdi-react/CloseOutlineIcon.js';
import AlertOutline from 'mdi-react/AlertOutlineIcon.js';

function PathDiv(props) {
	let label =  props.label;
	let color = props.color;
	
	
	return null;
}

function CheckBoxDiv(props){
	let label =  props.label;
	let color = props.color;
	let initialState = props.initialState;
	
	return (
		<div className="CheckBoxDiv" style={"color:" + color + ";"}>
			<div className="Label">{label}:</div>
			<div className="CheckBox" />
		</div>
	);
}

function NumberInputDiv(props){
	let label =  props.label;
	let color = props.color;
	let numberRangeStart = props.numberRangeStart;
	let numberRangeEnd = props.numberRangeEnd;
	
	return (
		<div className="NumberInputDiv" style={"color:" + color + ";"}>
			<div className="Label">{label}:</div>
			<div className="NumberInput" />
			
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