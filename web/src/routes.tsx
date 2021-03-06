import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/Login';

function Routes () {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Landing}/>
				<Route path="/app" exact component={OrphanagesMap}/>
				<Route path="/orphanages/create" exact component={CreateOrphanage}/>
				<Route path="/orphanages/:id" exact component={Orphanage}/>
				<Route path="/Login" component={LoginPage}/>
				<Route path="/dashboard" component={Dashboard}/>
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;