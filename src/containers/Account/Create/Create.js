import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import routes from '../../../config/routes';
import { createAccount } from '../accountActions';
import AntdFormField from '../../../hoc/AntdFormField/AntdFormField';
import { Switch, Form, Input, Select, Checkbox, Button } from "antd";
import MasterPage from '../../../hoc/MasterPage/MasterPage';
import { Upload, Icon, message } from 'antd';
import AvatarUploader from '../../../componenets/AvatarUploader/AvatarUploader';
import PageCover from '../../../componenets/PageCover/PageCover';
import placeholder from '../../../media/png/avatar.png';

const AInput = AntdFormField(Input);
const ATextArea = AntdFormField(Input.TextArea);

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoURL: placeholder
    }
  }
  componentDidMount() {
    let initialValues = {
      //  displayName: this.props.session.user.displayName,
      email: this.props.session.user.email,
      uid: this.props.session.user.uid,
      isPrivate: false,
      isArchive: false,
    }
    this.props.initialize(initialValues);
  }

  renderField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <div>
          <input {...field.input} className={(field.meta.touched && field.meta.error) ? `${field.className} uk-form-danger` : field.className} placeholder={field.label} type={field.type} />
          {field.meta.touched &&
            ((field.meta.error && <span>{field.meta.error}</span>) ||
              (field.meta.warning && <span>{field.meta.warning}</span>))}
        </div>
      </div>
    )
  }
  onSubmit(values) {
    let data = {
      ...this.props.session,
      account: {
        ...values,
        photoURL: this.state.photoURL,
        date: Date.now(),
      }
    }

    this.props.createAccount(data, () => {
      this.props.history.push(routes.dashboard);
    });
  }

  //
  updateAvatar = (url) => {
    this.setState({
      photoURL: url
    });
  }

  render() {

    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div className="page">
        <div className="bg-white ">
          <div className="uk-container">
            <AvatarUploader onSuccess={this.updateAvatar} placeholder={placeholder} />
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <Field label="Display Name" name="displayName" component={AInput} placeholder="Display Name" hasFeedback />
              <Field label="Tell us about your wall" name="wallDescription" component={ATextArea} placeholder="This is a good place to ask people what you like them to be honest about" hasFeedback />
              <Field label="Email Address" name="email" component={AInput} placeholder="Email Address" disabled hasFeedback />
              <Button type="primary" htmlType="submit">Submit</Button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

function validate(values) {
  const errors = {}
  // if (!values.title) {
  //   errors.title = 'Required'
  // } else if (values.title.length < 4) {
  //   errors.title = 'Please enter a real title'
  // }

  // if (!values.category) {
  //   errors.category = 'Required'
  // }
  if (!values.displayName) {
    errors.displayName = "Required";
  }


  return errors
}
function mapStateToProps(state) {
  return {
    session: state.session,
    form: state.form.createAccount,
  }
}
export default reduxForm({
  //enableReinitialize: true,
  form: 'createAccount',
  validate
})(connect(mapStateToProps, { createAccount })(MasterPage(CreateAccount)));