import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import Layout from "./components/Layout";

// User pages
import User from "./pages/user/User";

//Agent-cms pages
import AgentDash from "./pages/agent-cms/Dashboard";
import AgentAdmin from "./pages/agent-cms/Admin";

const app = document.getElementById('app');
const route = document.getElementById('route');

ReactDOM.render(
		<Router history={browserHistory} >
		    <Route path="/" component={User} />
		    <Route path="agent-dashboard" component={AgentDash} />
		    <Route path="agent-admin" component={AgentAdmin} />
		</Router>
,app)