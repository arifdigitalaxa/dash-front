import React from "react";

import '../../assets/sweetalert.min.js';
import '../../../css/sweetalert.css'

export default class AgentEdit extends React.Component {
  constructor() {
    super();
    this.state = {value: ''};
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

  onGet(event) {
    fetch('http://localhost:1337/agent/register')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
      })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
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
              <tr>
                <td>dale@chief.info</td>
                <td class="text-center">
                  <div class="btn-group">
                    <a class="btn btn-primary" href="#"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a> 
                    <a class="btn btn-danger" href="#"><i class="fa fa-times" aria-hidden="true"></i></a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>ione.gisela@high.org</td>
                <td class="text-center">
                  <div class="btn-group">
                    <a class="btn btn-primary" href="#"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a> 
                    <a class="btn btn-danger" href="#"><i class="fa fa-times" aria-hidden="true"></i></a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>sol.raleigh@language.edu</td>
                <td class="text-center">
                  <div class="btn-group">
                    <a class="btn btn-primary" href="#"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a> 
                    <a class="btn btn-danger" href="#"><i class="fa fa-times" aria-hidden="true"></i></a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>angeline.frieda@thick.com</td>
                <td class="text-center">
                  <div class="btn-group">
                    <a class="btn btn-primary" href="#"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a> 
                    <a class="btn btn-danger" href="#"><i class="fa fa-times" aria-hidden="true"></i></a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>moshe.mikel@parcelpart.info</td>
                <td class="text-center">
                  <div class="btn-group">
                    <a class="btn btn-primary" href="#"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a> 
                    <a class="btn btn-danger" href="#"><i class="fa fa-times" aria-hidden="true"></i></a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>harvey.jared@pullpump.org</td>
                <td class="text-center">
                  <div class="btn-group">
                    <a class="btn btn-primary" href="#"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a> 
                    <a class="btn btn-danger" href="#"><i class="fa fa-times" aria-hidden="true"></i></a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>valeria@hookhope.org</td>
                <td class="text-center">
                  <div class="btn-group">
                    <a class="btn btn-primary" href="#"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a> 
                    <a class="btn btn-danger" href="#"><i class="fa fa-times" aria-hidden="true"></i></a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>   
    );
  }
}