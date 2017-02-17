import React from "react";

import '../../assets/sweetalert.min.js';
import '../../../css/sweetalert.css'

import AgentEdit from './AgentEdit'

export default class AgentRegister extends React.Component {
  constructor() {
    super();
    this.state = {value: '',email: ''};
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onGet = this.onGet.bind(this);
  }

  onChange(event) {
    this.setState({email: event.target.value});
  }

  onGet() {
    fetch('http://localhost:1337/agent')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({value : responseJson});
      })
    .catch((error) => {
      console.error(error);
    });
  }

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

    function onEdit(event) {
        this.setState({email: event.target.value});
    }

    function onDelete(id,email) {
        swal({
          title: "Deleting "+email,
          text: "Confirm to delete "+email,
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          closeOnConfirm: false,
          closeOnCancel: false
        },
        function(isConfirm){
          if (isConfirm) {
            fetch('http://localhost:1337/agent/delete',{
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                id: id
              })
            })
            .then((response) => response.json())
            .then((responseJson) => {
                swal("Deleted!", email + " successfully is deleted", "success");
                onGet()
              })
            .catch((error) => {
              console.error(error);
            });
          } else {
            swal("Cancelled", "Delete cancelled", "error");
          }
        });
    }

    var agents, agentList

    if(this.state.value != ''){
      agents = this.state.value;
      agentList = agents.map(function(agent){
         return (
          <tr>
           <td>{agent.email}</td>
           <td class="text-center">
             <div class="btn-group">
               <a class="btn btn-primary" href="#" ><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a> 
               <a class="btn btn-danger" href="#" onClick={onDelete.bind(this,agent.id,agent.email)}><i class="fa fa-times" aria-hidden="true"></i></a>
             </div>
           </td>
         </tr> 
         )
      })
    }

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
                  <input id="email" name="email"  type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" required="" onChange = {this.onChange} value = {this.state.email} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </section>
        </div>
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
      </div>
    );
  }

   onSubmit(event) {
    fetch('http://localhost:1337/agent/register',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
        swal("Success!",this.state.email + " has been registered!","success")
        this.onGet() 
        this.setState({email : ''});
      })
    .catch((error) => {
      console.error(error);
    });
    event.preventDefault();
  }

}