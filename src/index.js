import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Pie from './PieShell';

const optionList = ["screen on 24252-pts-0", "new screen session", "compilers", "new tmux session"];

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Pie
	category="commands"
	fourSlices="true"
	options={optionList}
  />, document.getElementById('root'));

registerServiceWorker();
