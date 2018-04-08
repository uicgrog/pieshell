//https://codesandbox.io/s/488kxml857
//https://github.com/levrik/mdi-react

import React, { Component } from 'react';
import './stylesheets/css/PieShell.css';
import PropTypes from 'prop-types';
import ArrowLeft from 'mdi-react/ArrowLeftIcon.js';


const sliceQuarters = ["Top", "Right", "Bottom", "Left"];
const sliceThirds = ["ThirdsRight", "ThirdsBottom", "ThirdsLeft"];

function PieBuild(props) {
	let category = props.category;
	let options = props.options;
	
	//if (props.numSlices === 4)
	let slices = sliceQuarters;
	//else (props.numSlices === 3)
	//slices = sliceThirds;
	

	return (
		<div className="Pie">
			{slices.map(function(slice, i) {
				return (
					<div className={"PieSlice" + slice}>
						<div className="Option">{options[i]}</div>
					</div>
				);
			})}
			<div className="PieCenter">
			<div className="Draggable" />
			<div className="Category">{category}</div>
				<button className="BackButton">
					<ArrowLeft color="#fff" size="12"/>
					<div>Back</div>
				</button>
			</div>
		</div>
	);
}

class Pie extends Component {
	constructor(props) {
		super(props);
		this.category = this.props.category;
		this.numSlices = this.props.numSlices;
		this.options = this.props.options;
	}
	propTypes = {
		category: PropTypes.string,
		numSlices: PropTypes.number,
		options: PropTypes.arrayOf(PropTypes.string)
	};
	defaultProps = {
		numSlices: true
	};
	render() {
    //return PieSlices(category= {this.prop.category})
    /*{
      PieSlices(category={this.prop.category})
    }*/
    /*return (
      <PieBuild
        category={this.category}
        numSlices={this.numSlices}
        options={this.options}
      />
    );*/
		return (
			<div className="Pie">
				<PieBuild
					category={this.category}
					fourSlices={this.numSlices}
					options={this.options}
				/>
				{/*<Test t={this.category} />*/}
				{/*<div>{this.props.category}</div>
				<div>{this.props.numSlices}</div>
				<div>{this.props.options[0]}</div>
				<div>{this.props.options[1]}</div>
				<div>{this.props.options[2]}</div>*/}
			</div>
		);
	//return null;
	}
}

export default Pie;
