import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { emailSignin, facebookSignIn, googleSignIn } from '../../../AuthWrapper/authWrapperActions';
import { renderInput } from '../../../../util/renderFormFields';
import './SignInForm.css';

class SignInForm extends Component {
    // constructor(props) {
    //     super(props);
    // }
    onSubmit(values) {
        this.props.emailSignin(values.email, values.password).catch(err => {
            // UIkit.notification(err, {status: 'danger'});  
        });

    }
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (

            
                    <div className="uk-flex-center uk-flex uk-text-center">
                        <div className="uk-width-medium form-dark">

                            <p>Sign in with </p>
                            <button type="button" className="button button-social-login button-googleplus" onClick={this.props.googleSignIn} uk-tooltip="title: Sign in with Google; delay: 250;animation: uk-animation-slide-bottom-small"><span data-uk-icon="icon: google"></span></button>
                            <button type="button" className="button button-social-login button-facebook" onClick={this.props.facebookSignIn} uk-tooltip="title: Sign in with Facebook; delay: 250;animation: uk-animation-slide-bottom-small"><span data-uk-icon="icon: facebook"></span></button>
                            <button type="button" className="button button-social-login button-twitter" onClick={this.props.facebookSignIn} uk-tooltip="title: Sign in with Twitter; delay: 250;animation: uk-animation-slide-bottom-small"><span data-uk-icon="icon: twitter"></span></button>

                            <div className="uk-margin ">
                                <hr className="uk-divider-icon" />
                                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                                    <fieldset className="uk-fieldset">
                                        <div className="uk-margin">
                                            <Field className="uk-input" icon="mail" name="email" type="email" placeholder="Email" component={renderInput} />
                                        </div>
                                        <div className="uk-margin">
                                            <Field className="uk-input" icon="lock" name="password" type="password" placeholder="Password" component={renderInput} />
                                        </div>
                                    </fieldset>
                                    <button className="uk-button button-accent" type="submit" disabled={submitting}>Sign in</button>
                                </form>

                            </div>
                            <div className="uk-text-small uk-text-bold uk-flex uk-flex-around">
                                <Link to="/signup">sign up with email</Link> <Link to="/resetpassword">reset password</Link>
                            </div>

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

export default reduxForm({
    form: 'SessionSignIn',
    validate
})(connect(null, { emailSignin, facebookSignIn, googleSignIn })(SignInForm));