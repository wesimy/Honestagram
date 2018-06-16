import React, { Component } from 'react'

import withoutAuth from '../../../hoc/WithoutAuth/WithoutAuth';
import MasterPage from '../../../hoc/MasterPage/MasterPage';
import SignUpForm from './SignUpForm/SignUpForm';

class SignUp extends Component {
  onSubmit(values) {
    this.props.signup(values.email, values.password).catch(err => {
      // UIkit.notification(err, {status: 'danger'});  
    });
  }
  render() {
    return (
      <div className="uk-position-center uk-overlay uk-overlay-default">

                <div className="uk-container ">
        <SignUpForm/>
        </div></div>
    )
  }
}




export default withoutAuth(MasterPage(SignUp));