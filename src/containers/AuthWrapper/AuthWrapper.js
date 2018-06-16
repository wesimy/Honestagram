import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';


import PrivateRoute from '../../hoc/PrivateRoute/PrivateRoute';

import Home from '../Home/Home';
import Wall from '../Wall/Wall';
import Dashboard from '../Dashboard/Dashboard';
import Notifications from '../Notifications/Notifications';
import SignIn from '../Account/SignIn/SingIn';
import SignOut from '../Account/SignOut/SignOut';
import SingUp from '../Account/SignUp/SingUp';
import Settings from '../Account/Settings/Settings';
import CreateAccount from '../Account/Create/Create'
import CreateWall from '../Wall/Create/Create';

class AuthWrapper extends Component {
  render() {
    return (
        <BrowserRouter>
            <React.Fragment>
            
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signout" component={SignOut} />
              <Route exact path="/signup" component={SingUp} />
              <PrivateRoute path="/account/create" component={CreateAccount} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/wall/create" component={CreateWall} />
              <Route exact path="/wall/:wid" component={Wall} />
              <PrivateRoute exact path="/wall" component={Wall} />
              <PrivateRoute exact path="/notifications" component={Notifications} />
              <PrivateRoute exact path="/account/settings" component={Settings} />
            </Switch>
            </React.Fragment>
        </BrowserRouter>
    )
  }
}


function mapStateToProps(state) {
  return{
    session: state.session
  }
}

export default connect(mapStateToProps)(AuthWrapper);


