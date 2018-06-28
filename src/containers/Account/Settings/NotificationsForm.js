import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { renderCheckBox } from '../../../util/renderFormFields';
import {updateAccount} from '../accountActions';

class NotificationsForm extends Component {
  componentDidMount() {
    let initialValues = {
      postNotification: this.props.session.account.postNotification,
      identityNotification: this.props.session.account.identityNotification,
      newsNotification: this.props.session.account.newsNotification,
    }
    this.props.initialize(initialValues);
  }
  
  handleChange = (e)=>{
    let updatedAccount = { ...this.props.session.account };
    updatedAccount[e.currentTarget.name] = e.currentTarget.checked;
    // We Pass Session Data to update local storage 
    this.props.updateAccount({uid: this.props.session.account.uid, ...this.props.session, account: updatedAccount });
  }
  
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <React.Fragment>
        <h3 className="uk-card-title">Email Notifications</h3>
        <hr />
        <form className="uk-form-horizontal uk-margin-large">
          <div className="uk-flex uk-flex-between uk-margin">
            <div className="uk-form-label">
              New Post Notification
                  <br />
              <small>email me when i receive a new post</small>
            </div>
            <Field name="postNotification" id="postNotification" component={renderCheckBox} onChange={this.handleChange}/>
          </div>

          <div className="uk-flex uk-flex-between uk-margin">
            <div className="uk-form-label">
              Identity Notifications
                  <br />
              <small>email me when someone asks for or reveals identity</small>
            </div>
            <Field name="identityNotification" id="identityNotification" component={renderCheckBox} onChange={this.handleChange} />
          </div>

          <div className="uk-flex uk-flex-between uk-margin">
            <div className="uk-form-label">Honestgram Notifications
                  <br />
              <small>email me Honestgram news, promise we won't spam you</small>
            </div>
            <Field name="newsNotification" id="newsNotification" component={renderCheckBox}  onChange={this.handleChange}/>
          </div>

        </form>

      </React.Fragment>
    )
  }
}



function mapStateToProps(state) {
  return {
    session: state.session,
    form: state.form.settingsNotificationsForm,
  }
}
export default reduxForm({
  form: 'settingsNotificationsForm',
  enableReinitialize: true,
})(connect(mapStateToProps, {updateAccount})(NotificationsForm));