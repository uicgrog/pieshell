import React, { Component } from 'react';
import './stylesheets/css/AbridgedModal.css';
import PropTypes from 'prop-types';
import Plus from 'mdi-react/PlusIcon.js';
import AlertOutline from 'mdi-react/AlertOutlineIcon.js';
import { EnableExecute, DisableExecute } from './listeners.js';


function Check(e){
	if (e.target.className === "CheckBox"){
		var CommandBase = document.getElementsByClassName("CommandBaseChmod")[0];
		CommandBase.style.display = "inline-block";
		
		e.target.className = "CheckBox-Checked";
		var argDivID = e.target.parentElement.id + "Arg";
		var argDiv = document.getElementById(argDivID);
		if (argDiv !== null){
			argDiv.style.display = "inline-block";
			EnableExecute();
		}
	}
	else{
		e.target.className = "CheckBox";
		var argDivID = e.target.parentElement.id + "Arg";
		var argDiv = document.getElementById(argDivID);
		if (argDiv !== null){
			argDiv.style.display = "none";
			DisableExecute();
		}
	}
}

function CheckPlus(e){
	if (e.target.className === "PlusBox"){
		var CommandBase = document.getElementsByClassName("CommandBaseChmod")[0];
		CommandBase.style.display = "inline-block";

		e.target.className = "PlusBox-Checked";
		var argDivID = e.target.parentElement.id + "Arg";
		var argDiv = document.getElementById(argDivID);
		if (argDiv !== null){
			argDiv.style.display = "inline-block";
			EnableExecute();
		}
	}
	else{
		e.target.className = "PlusBox";
		var argDivID = e.target.parentElement.id + "Arg";
		var argDiv = document.getElementById(argDivID);
		if (argDiv !== null){
			argDiv.style.display = "none";
			DisableExecute();
		}
	}
}

class AbridgedModalChmod extends Component {
	constructor(props) {
		super(props);
		this.name = this.props.name;
		this.components = this.props.components;
	}
	
	render(){
		return (
			<div className="AbridgedModalChmod">
				<div className="AbridgedModalChmodTitle"><div>{this.name}</div></div>
				<div className="AbridgedChmodComponents">
					<div className="FileDiv" id="file" style={{backgroundColor: "red"}}>
						<div className="Label"><AlertOutline color="#fff" size="16"/>{" name of file or directory"}:</div>
						<input type="text" className={"FileInput"}/>
					</div>

					<div className="CheckBoxDiv" id="recursive" style={{backgroundColor: "blue"}}>
						<div className="CheckBox" onClick={Check} id="recursiveCheckbox"/>
						<div className="Label">{"recursive"}</div>
					</div>

					<div id="PermissionsDiv">
						<table id="PermissionsTable">
							<tr>
								<td><div className="Label">{"permissions:"}</div></td>
								<td><div className="DiagonalLabel">{"read"}</div></td>
								<td><div className="DiagonalLabel">{"write"}</div></td>
								<td><div className="DiagonalLabel">{"execute"}</div></td>
								<td><div className="DiagonalLabel">{"setuid"}</div></td>
							</tr>
							<tr>
								<td><div className="HorizontalLabel">{"owner"}</div></td>
								<td><div className="PlusBox" onClick={CheckPlus}/></td>
								<td><div className="PlusBox" onClick={CheckPlus}/></td>
								<td><div className="PlusBox" onClick={CheckPlus}/></td>
								<td><div className="PlusBox" onClick={CheckPlus}/></td>
							</tr>
							<tr>
								<td><div className="HorizontalLabel">{"group"}</div></td>
								<td><div className="PlusBox" onClick={CheckPlus}/></td>
								<td><div className="PlusBox" onClick={CheckPlus} id="GW"/></td>
								<td><div className="PlusBox" onClick={CheckPlus}/></td>
								<td><div className="PlusBox" onClick={CheckPlus}/></td>
							</tr>
							<tr>
								<td><div className="HorizontalLabel">{"world"}</div></td>
								<td><div className="PlusBox" onClick={CheckPlus}/></td>
								<td><div className="PlusBox" onClick={CheckPlus}/></td>
								<td><div className="PlusBox" onClick={CheckPlus}/></td>
							</tr>
						</table>






					</div>

					<div className="CheckBoxDiv" id="sticky" style={{backgroundColor: "pink"}}>
						<div className="CheckBox" onClick={Check} id="stickyCheckbox"/>
						<div className="Label">{"sticky bit"}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AbridgedModalChmod;
