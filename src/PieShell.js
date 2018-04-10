//https://codesandbox.io/s/488kxml857
//https://github.com/levrik/mdi-react

import React, { Component } from 'react';
import './stylesheets/css/PieShell.css';
import PropTypes from 'prop-types';
import ArrowLeft from 'mdi-react/ArrowLeftIcon.js';
import AbridgedModal from './AbridgedModal';
import CommandWindow from './CommandWindow';

const sliceQuarters = ["Top", "Right", "Bottom", "Left"];
const sliceThirds = ["Right", "Bottom", "Left"];

function PieBuild(props) {
	let category = props.category;
	let options = props.options;
	let numSlices = props.numSlices;

	return (
		<div className="PieBackground">
			{numSlices === 4 && sliceQuarters.map(function(slice, index) {
				return (
					<div className={["PieSlice" + slice, "PieSlice"].join(' ')} key={index}>
						<div className="Option">{options[index]}</div>
					</div>
				);
			})}
			{numSlices === 3 && sliceThirds.map(function(slice, index) {
				return (
					<div className={"PieSliceThirds" + slice} key={index}>
						<div className="Option">{options[index]}</div>
					</div>
				);
			})}
			{/*testing div as a quartered circle, just the top + bottom wedge*/}
			<div id="FourWedgeTop"/>
			<div id="FourWedgeRight"/>
			<div id="FourWedgeLeft"/>
			<div id="FourWedgeBottom"/>
			<div className="PieCenter">
			<div className="Draggable" />
			<div className="Category">{category}</div>
				<button className="BackButton" id="BackButton">
					<ArrowLeft color="#fff" size="12"/>
					<div>Back</div>
				</button>
			</div>
		</div>
	);
}

function script(props) {
	return(
		<script></script>
	);
}
/*
function Test(props)  {
	const numSlices = props.numSlices;
	return(
		<div>
			{numSlices === 4 &&
				<div className="test">abc{numSlices}</div>
			}
			{numSlices === 3 && 
				<div className="test">got three{numSlices}</div>
			}
		</div>
	);
	
}
*/

class Pie extends Component {
	constructor(props) {
		super(props);
		this.category = this.props.category;
		this.numSlices = this.props.numSlices;
		this.options = this.props.options;
	}
	propTypes = {
		category: PropTypes.string,
		numSlices: PropTypes.array,
		options: PropTypes.arrayOf(PropTypes.string)
	};
	defaultProps = {
		numSlices: true
	};
	
	//const qwee = <Test numSlices={this.numSlices}/>;
	render() {
		return (
			<div className="Pie">
				<PieBuild
					category={this.category}
					numSlices={this.numSlices}
					options={this.options}
				/>
				<AbridgedModal name="submit job" />
				<CommandWindow />
			</div>
		);
	
	}
}

export default Pie;
