import React from "react";
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Radio from 'react-bootstrap/lib/Radio';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl'
import HelpBlock from 'react-bootstrap/lib/HelpBlock'
import Col from 'react-bootstrap/lib/Col'

export default class AgentRegister extends React.Component {
  constructor() {
    super();
    this.state = {value: ''};
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({value: event.target.value});
  }

  onSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
         <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              Email
            </Col>
            <Col sm={8}>
              <FormControl type="email" placeholder="Email" placeholder="Enter Email" onChange = {this.onChange} value = {this.state.value}/>
            </Col>
          </FormGroup>
        </form>
      </div>
    );
  }
}