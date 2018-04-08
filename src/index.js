import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Pie from './PieShell';
import debug from './test.js';

/*
=== Temporary notes ===
Wedge Orderings!: 
	4's	=	Top Right Bottom Left / N E S W
	3's =	Right Bottom Left / E S W

	
qsub scenario:
	Menu Title		Action selects..Name of Wedge
	(Category)						(Option)
1	(start)πsh		right			connect
2	connect			any				any
3	(start)πsh		right			commands
4	commands		left			scheduler
5	scheduler		left			submit job
<< abridge options for submit job>>
	... ... ... don't know what to do here at the moment
	
	
*/
// retrieve info from json in future
//					0			1		   2		   3		   4
const MenuTitles = ["πsh logo", "connect", "πsh logo", "commands", "scheduler"];

const optionList0 = ["history", "commands", "settings", "connect"];
const optionList1 = ["new tmux session", "screen session24252-pts-0", "new screen session"];
const optionList2 = optionList0;
const optionList3 = ["file perms.", "sysadmin", "compilers", "scheduler"];
const optionList4 = ["delete job", "job status", "submit job"];


//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Pie
	category={MenuTitles[0]}
	numSlices={optionList0.length}
	options={optionList0}
  />, document.getElementById('root'));

  
registerServiceWorker();
debug();
