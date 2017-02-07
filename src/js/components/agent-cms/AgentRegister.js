import React from "react";
require ('../../assets/alertify.min.js');

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
    alertify.alert('This email is saved: ' + this.state.value);
    //alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div class="row">
            <div class="col-md-12">
                <label for="exampleInputEmail1">Email </label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
            </div>
          </div>
        </form>
      </div>
    );
  }
}