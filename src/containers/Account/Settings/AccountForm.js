import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { renderInput } from '../../../util/renderFormFields';
import {resetPassword} from '../../AuthWrapper/authWrapperActions';

class AccountForm extends Component {
  // resetPassword(e){
  //   e.prevntDefault();
  //   this.props.newPassword(this.props.session.account.email);
  // }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <React.Fragment>

<h3 className="uk-card-title">Account</h3>
              <hr />
              <form className="uk-form-horizontal uk-margin-large">

                <div className="uk-margin">
                  <label className="uk-form-label" htmlFor="form-horizontal-text">Email</label>
                  <div className="uk-form-controls">
                    <label className="uk-text-mute">{this.props.session.account.email}</label>
                  </div>
                </div>

                {(this.props.session.user.providerData[0].providerId === 'password') &&
                <div className="uk-margin">
                  <label className="uk-form-label" htmlFor="form-horizontal-text">Password</label>
                  <div className="uk-form-controls">
                    <a onClick={()=>{this.props.resetPassword(this.props.session.account.email)}}>Reset Password</a>
                  </div>
                </div>
                }

              </form>

      </React.Fragment>
    )
  }
}



function mapStateToProps(state) {
  return {
    session: state.session,
    form: state.form.settingsAccountForm,
  }
}
export default reduxForm({
  form: 'settingsAccountForm',
  enableReinitialize: true,
})(connect(mapStateToProps, {resetPassword})(AccountForm));