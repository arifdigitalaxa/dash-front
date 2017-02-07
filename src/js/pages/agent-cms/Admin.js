import React from 'react'

import AgentRegister from "../../components/agent-cms/AgentRegister"

export default class AgentAdmin extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Agent Admin",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
      	<div class="row">
			<div class="col-lg-12">
				<ol class="breadcrumb">
					<li><i class="fa fa-home"></i><a href="/">Home</a></li>
					<li><i class="fa fa-bars"></i>Agent Admin</li>
				</ol>
			</div>
		</div>
        <h1><strong>{this.state.title}</strong></h1>
        <AgentRegister />
      </div>
    );
  }
}