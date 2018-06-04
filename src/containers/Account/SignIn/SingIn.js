import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {emailSignin, facebookSignIn, googleSignIn} from '../../AuthWrapper/authWrapperActions';
import withoutAuth from '../../../hoc/WithoutAuth/WithoutAuth';
import MasterPage from '../../../hoc/MasterPage/MasterPage';
import {renderInput} from '../../../util/renderFormFields';
class SessionSignIn extends Component {

  onSubmit(values){
    this.props.emailSignin(values.email,values.password).catch(err => {
     // UIkit.notification(err, {status: 'danger'});  
    });

  }
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (

    <div className="uk-position-center uk-overlay uk-overlay-default">

      <div className="uk-container">
        
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <fieldset className="uk-fieldset">
            <div className="uk-margin">
              <Field className="uk-input" name="email" type="email" placeholder="Email" label="Email" component={renderInput}/>
            </div>
            <div className="uk-margin">
              <Field className="uk-input" name="password" type="password"  label="Password" component={renderInput}/>
            </div>
          </fieldset>
          <button className="uk-button uk-button-primary" type="submit" disabled={submitting}>Login</button>
          <Link className="uk-button uk-button-secondary" to="/signup">Create Account</Link>
        </form>

        <button type="button" className="button button-social-login button-googleplus" onClick={this.props.googleSignIn}><span data-uk-icon="icon: google"></span> Sign in with Google</button>
        <button type="button" className="button button-social-login button-facebook" onClick={this.props.facebookSignIn}><span data-uk-icon="icon: facebook"></span> Sign in with Facebook</button>
        <button type="button" className="button button-social-login button-twitter" onClick={this.props.facebookSignIn}><span data-uk-icon="icon: twitter"></span> Sign in with Twitter</button>
      </div>
      </div>
   
    )
  }
}

function validate(values) {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (values.email.length < 4) {
    errors.email = 'Please enter Email'
  }

  if (!values.password) {
    errors.password = 'Required'
  }
  else if (values.password.length < 4) {
    errors.password = 'Please enter Email'
  }

  return errors
}

function mapStateToProps(state) {
  return{
    session: state.session
  }
}

export default reduxForm({
  form: 'SessionSignIn',
  validate
})(connect(mapStateToProps,{emailSignin, facebookSignIn,googleSignIn})(withoutAuth(MasterPage(SessionSignIn))));