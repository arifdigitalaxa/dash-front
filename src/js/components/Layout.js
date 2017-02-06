import React from "react";

import AgentRegister from "./agent-cms/Agent-Register"

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Hello World!!!!!!",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <h1><strong>{this.state.title}</strong></h1>
        <AgentRegister />
      </div>
    );
  }
}