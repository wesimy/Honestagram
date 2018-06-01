import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import routes from '../../../config/routes';
import {signup} from '../../AuthWrapper/authWrapperActions';
import withoutAuth from '../../../hoc/WithoutAuth/WithoutAuth';
import MasterPage from '../../../hoc/MasterPage/MasterPage';



class SignUp extends Component {

  
    onSubmit(values){
      this.props.signup(values.email,values.password).catch(err => {
       // UIkit.notification(err, {status: 'danger'});  
      });
    }  
  
    renderField(field) {
      return (
        <div>
          <label>{field.label}</label>
          <div>
            <input {...field.input} className={(field.meta.touched && field.meta.error)? `${field.className} uk-form-danger`: field.className } placeholder={field.label} type={field.type} />
            {field.meta.touched &&
              ((field.meta.error && <span>{field.meta.error}</span>) ||
                (field.meta.warning && <span>{field.meta.warning}</span>))}
          </div>
        </div>
      );
    }
  
    render() {
      const { handleSubmit, pristine, reset, submitting } = this.props;
      return (
        <div>
          <h1>Signup</h1>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <fieldset className="uk-fieldset">
              <div className="uk-margin">
                  <Field className="uk-input" name="display-name" type="input"  label="Name" component={this.renderField}/>
              </div>
  
              <div className="uk-margin">
                <Field className="uk-input" name="email" type="email" placeholder="Email" label="Email" component={this.renderField}/>
              </div>
  
              <div className="uk-margin">
                <Field className="uk-input" name="password" type="password"  label="Password" component={this.renderField}/>
              </div>
            </fieldset>
  
            <button className="uk-button uk-button-primary" type="submit" disabled={submitting}>Create Account</button>
            
          </form>
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
    form: 'SessionSignUp',
    validate
  })(connect(mapStateToProps,{signup})(withoutAuth(MasterPage(SignUp))))