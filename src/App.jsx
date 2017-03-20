import React, { Component } from 'react';
import { Button, FormGroup, Radio} from 'react-bootstrap';
import FaWindows from 'react-icons/lib/fa/windows';
import FaLinux from 'react-icons/lib/fa/linux';
import FaApple from 'react-icons/lib/fa/apple';
import FaPlug from 'react-icons/lib/fa/plug';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	os : 'windows'
	    };
  	}

  	setOS(os) {
  		this.setState({os:os});
  	}

	render() {
		return (
			<div className="container-fluid App">
				<h1>randomport.io</h1>
				<small>Generate a random <a href="https://en.wikipedia.org/wiki/Ephemeral_port">ephemeral port</a> in the valid range for your OS.</small>
				<FormGroup className="osPicker">
				<Radio inline checked={'linux'===this.state.os} onChange={this.setOS.bind(this,'linux')}>
					<FaLinux />
				</Radio>
				{' '}
				<Radio inline checked={'windows'===this.state.os} onChange={this.setOS.bind(this,'windows')}>
					<FaWindows />
				</Radio>
				{' '}
				<Radio inline checked={'osx'===this.state.os} onChange={this.setOS.bind(this,'osx')}>
					<FaApple />
				</Radio>
				</FormGroup>
				<PortGenerator os={this.state.os} />
				<div className="newOne"><a href="#" onClick={this.setOS.bind(this,this.state.os)}>another?</a></div>
			</div>
		);
	}
}

class PortGenerator extends Component {

	range(min,max) {
		return Math.round(Math.random() * (max - min) + min);
	}

	randomPort(os) {
		switch(os) {
			case 'linux':
				return this.range(32768,61000);
				break;
			case 'windows':
				return this.range(49152,65535);
				break;
			case 'osx':
				return this.range(49152,65535);
				break;
			default:
				return 'NaN'	
		}
	}

	render() {
		return (<div className="randomPortText"><strong>{this.randomPort(this.props.os)}</strong></div>)
	}
}

export default App;
