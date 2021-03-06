import React, { Component } from 'react';
import './stylesheets/css/App.css';

function Terminal(props){
  return <div className="terminal">{props.response}</div>;
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      status: "disconnected",
      tty: null
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1 className="App-title"> Welcome to PieShell.</h1>
        </header>
        <Terminal response="Ready to begin? Select a TTY instance to get started." />
      </div>
    );
  }
}

export default App;
