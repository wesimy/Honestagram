import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import PrivateRoute from '../../hoc/PrivateRoute/PrivateRoute';

import Home from '../Home/Home';
import Wall from '../Wall/Wall';
import Dashboard from '../Dashboard/Dashboard';
import SignIn from '../Account/SignIn/SingIn';
import SignOut from '../Account/SignOut/SignOut';
import SingUp from '../Account/SignUp/SingUp';
import CreateAccount from '../Account/Create/Create'


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
              <Route exact path="/wall/:uid" component={Wall} />
              <PrivateRoute exact path="/wall" component={Wall} />
              {/* <PrivateRoute exact path="/dashboard/" component={Dashboard} /> */}
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


