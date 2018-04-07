//https://codesandbox.io/s/488kxml857
//https://github.com/levrik/mdi-react

import React, { Component } from 'react';
import './PieShell.css';
import PropTypes from 'prop-types';
import ArrowLeft from 'mdi-react/ArrowLeftIcon.js';

const slices = ["Top", "Right", "Bottom", "Left"];

function PieBuild(props) {
  let category = props.category;
  let fourSlices = props.fourSlices;
  let options = props.options;

  /*if (fourSlices) {*/
  return (
    <div className="Pie">
      <div>abc</div>
      {slices.map(function(slice, i) {
        return (
          <div className={"PieSlice" + slice}>
            <div className="Option">{options[i]}</div>
          </div>
        );
      })}
      <div className="PieCenter">
        <div className="Category">{category}</div>
		<button className="BackButton"><ArrowLeft color="#fff" size="16"/><div>Back</div></button>
      </div>
    </div>
  );
  /*
  } else if (!fourSlices) {
    return <div>abc4</div>;
  } else {
    return <div>abc3</div>;
  }*/
}

class Pie extends Component {
  constructor(props) {
    super(props);
    this.category = this.props.category;
    this.fourSlices = this.props.fourSlices;
    this.options = this.props.options;
  }
  propTypes = {
    category: PropTypes.string,
    fourSlices: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.string)
  };
  defaultProps = {
    fourSlices: true
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
          fourSlices={this.fourSlices}
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
