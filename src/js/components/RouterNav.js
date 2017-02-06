import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
     <aside>
          <div id="sidebar"  class="nav-collapse ">
            <Router>
              <ul class="sidebar-menu">                
                  <li><Link to="/">
                        <a class="" href="">
                            <i class="fa fa-user"></i>
                            <span>Profile</span>
                        </a>
                      </Link>
                  </li>
                  <li class="sub-menu">
                      <a href="javascript:;" class="">
                          <i class="fa fa-users"></i>
                          <span>Agent CMS</span>
                          <span class="menu-arrow arrow_carrot-right"></span>
                      </a>
                      <ul class="sub">
                          <li><Link to="/agent-cms-dashboard"><a class="" href="">Dashboard</a></Link></li>                          
                          <li><a class="" href="form_validation.html">Agent Settings</a></li>
                      </ul>
                  </li>                      
              </ul>
            </Router>
          </div>
      </aside>  
    )
  }
})
