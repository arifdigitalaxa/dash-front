import React from "react";

import '../../assets/sweetalert.min.js';
import '../../../css/sweetalert.css'

import AgentEdit from './AgentEdit'

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
    fetch('http://localhost:1337/agent/register',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.value
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson)
        swal("Success!",this.state.value + " has been registered!","success")
      })
    .catch((error) => {
      console.error(error);
    });
    event.preventDefault();
  }

  

  render() {
    return (
      <div>
        <div class="col-lg-4">
          <section class="panel">
            <header class="panel-heading">
              <i class="fa fa-envelope-o" aria-hidden="true"></i> Register Agents' Email
            </header>
            <div class="panel-body">
              <form onSubmit={this.onSubmit} role="form">
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input id="email" name="email"  type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" required="" onChange = {this.onChange} value = {this.state.value} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </section>
        </div>
        <AgentEdit />
      </div>
    );
  }
}