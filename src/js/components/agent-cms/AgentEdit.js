import React from "react";

import '../../assets/sweetalert.min.js';
import '../../../css/sweetalert.css'

export default class AgentEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
    //console.log('trigger warning 2')

    this.onGet = this.onGet.bind(this);
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

  onGet() {
    fetch('http://localhost:1337/agent/register')
    .then((response) => response.json())
    .then((responseJson) => {
      this.state.agents = responseJson;
      
      })
    .catch((error) => {
      console.error(error);
    });
  }

  // componentDidMount(){
  //   fetch('http://localhost:1337/agent')
  //   .then((response) => response.json())
  //   .then((responseJson) => {
  //     this.setState({value : responseJson});
  //     })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // }

  componentWillMount(){

    fetch('http://localhost:1337/agent')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({value : responseJson});
      })
    .catch((error) => {
      console.error(error);
    });
  }
  render() {
    var agents, agentList

    if(this.state.value != ''){
      agents = this.state.value;
      agentList = agents.map(function(agent){
         return (
          <tr>
           <td>{agent.email}</td>
           <td class="text-center">
             <div class="btn-group">
               <a class="btn btn-primary" href="#"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a> 
               <a class="btn btn-danger" href="#"><i class="fa fa-times" aria-hidden="true"></i></a>
             </div>
           </td>
         </tr> 
         )
      })
    }
    
    return (
      <div class="col-lg-8">
        <section class="panel">
          <header class="panel-heading">
            <i class="fa fa-users" aria-hidden="true"></i>Agent List
          </header>
          <table class="table table-striped table-advance table-hover">
            <tbody>
              <tr>
                <th><i class="icon_mail_alt"></i> Email</th>
                <th class="text-center"><i class="icon_cogs"></i> Action</th>
              </tr>
              {agentList}
            </tbody>
          </table>
        </section>
      </div>   
    );
  }
}