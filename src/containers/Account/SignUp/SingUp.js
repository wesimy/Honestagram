import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import routes from '../../../config/routes';
import {signup} from '../../AuthWrapper/authWrapperActions';
import withoutAuth from '../../../hoc/WithoutAuth/WithoutAuth';
import MasterPage from '../../../hoc/MasterPage/MasterPage';
import {renderInput} from '../../../util/renderFormFields';


class SignUp extends Component {

  
    onSubmit(values){
      this.props.signup(values.email,values.password).catch(err => {
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
                  <Field className="uk-input" name="displayName" type="input"  label="Name" component={renderInput}/>
              </div>
  
              <div className="uk-margin">
                <Field className="uk-input" name="email" type="email" placeholder="Email" label="Email" component={renderInput}/>
              </div>
  
              <div className="uk-margin">
                <Field className="uk-input" name="password" type="password"  label="Password" component={renderInput}/>
              </div>
            </fieldset>
  
            <button className="uk-button uk-button-primary" type="submit" disabled={submitting}>Create Account</button>
            
          </form>
        </div>
        </div>
      )
    }
  }
  
  function validate(values) {
    const errors = {}
    
    if (!values.displayName) {
      errors.displayName = 'Required'
    } else if (values.displayName.length < 4) {
      errors.displayName = 'Please enter your name'
    }

    if (!values.email) {
      errors.email = 'Required'
    } else if (values.email.length < 4) {
      errors.email = 'Please enter Email'
    }
  
    if (!values.password) {
      errors.password = 'Required'
    }
    else if (values.password.length < 4) {
      errors.password = 'Password can\'t be blank'
    }
  
    return errors
  }
  
  
  function mapStateToProps(state) {
    return{
      session: state.session
    }
  }
  
  export default reduxForm({
    form: 'SessionSignUp',
    validate
  })(connect(mapStateToProps,{signup})(withoutAuth(MasterPage(SignUp))))