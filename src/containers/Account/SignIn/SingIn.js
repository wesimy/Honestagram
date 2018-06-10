import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import withoutAuth from '../../../hoc/WithoutAuth/WithoutAuth';
import MasterPage from '../../../hoc/MasterPage/MasterPage';
import {renderInput} from '../../../util/renderFormFields';
import SignInForm from './SignInForm/SignInForm';
class SessionSignIn extends Component {


  render() {
    
    return (

      <div className="uk-position-center uk-overlay uk-overlay-default">

      <div className="uk-container ">
        <SignInForm />
        </div></div>

    )
  }
}



function mapStateToProps(state) {
  return{
    session: state.session
  }
}

export default connect(mapStateToProps)(withoutAuth(MasterPage(SessionSignIn)));