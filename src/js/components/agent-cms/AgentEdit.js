import React from "react";

export default class AgentEdit extends React.Component {
  constructor() {
    super();
    this.state = {value: ''};
    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onEdit(event) {
    this.setState({value: event.target.value});
  }

  onDelete(event) {
    alert('A name was submitted: ' + this.state.value);
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