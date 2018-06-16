import React, { Component } from 'react'
import {connect} from 'react-redux';
import withoutAuth from '../../../hoc/WithoutAuth/WithoutAuth';
import MasterPage from '../../../hoc/MasterPage/MasterPage';
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