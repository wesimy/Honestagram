import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import routes from '../../../../config/routes';
import { signup } from '../../../AuthWrapper/authWrapperActions';
import { renderInput } from '../../../../util/renderFormFields';
import UIkit from 'uikit';

class SignUpForm extends Component {
    onSubmit(values) {
        this.props.signup(values.email, values.password).catch(err => {
            UIkit.notification(err, { status: 'danger' });
        });
    }
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (

            
                    <div className="uk-text-center uk-flex-center uk-flex">
                        <div className="uk-width-medium form-dark">

                            <p>Sign Up With </p>
                            <button type="button" className="button button-social-login button-googleplus" onClick={this.props.googleSignIn} uk-tooltip="title: Sign up with Google; delay: 250;animation: uk-animation-slide-bottom-small"><span data-uk-icon="icon: google"></span></button>
                            <button type="button" className="button button-social-login button-facebook" onClick={this.props.facebookSignIn} uk-tooltip="title: Sign up with Facebook; delay: 250;animation: uk-animation-slide-bottom-small"><span data-uk-icon="icon: facebook"></span></button>
                            <button type="button" className="button button-social-login button-twitter" onClick={this.props.facebookSignIn} uk-tooltip="title: Sign up with Twitter; delay: 250;animation: uk-animation-slide-bottom-small"><span data-uk-icon="icon: twitter"></span></button>

                            <div className="uk-margin ">
                                <hr className="uk-divider-icon" />

                                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                                    <fieldset className="uk-fieldset">

                                        <div className="uk-margin">
                                            <Field className="uk-input" name="email" type="email" placeholder="Email" placeholder="Email" icon="mail" component={renderInput} />
                                        </div>

                                        <div className="uk-margin">
                                            <Field className="uk-input" name="password" type="password" placeholder="Password" icon="lock" component={renderInput} />
                                        </div>
                                        <div className="uk-margin">
                                            <Field className="uk-input" name="confirmpassword" type="password" placeholder="Confirm Password" icon="happy" component={renderInput} />
                                        </div>
                                    </fieldset>

                                    <button className="uk-button button-accent" type="submit" disabled={submitting}>Create Account</button>

                                </form>

                            </div>

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



export default reduxForm({
    form: 'SessionSignUp',
    validate
})(connect(null, { signup })(SignUpForm))