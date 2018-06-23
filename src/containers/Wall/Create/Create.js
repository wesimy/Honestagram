import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import routes from '../../../config/routes';
import { createWall } from '../wallActions';
import AntdFormField from '../../../hoc/AntdFormField/AntdFormField';
import { Input, Button } from "antd";
import MasterPage from '../../../hoc/MasterPage/MasterPage';
import AvatarUploader from '../../../componenets/AvatarUploader/AvatarUploader';
import getAvatar from '../../../util/getAvatar';

const AInput = AntdFormField(Input);
const ATextArea = AntdFormField(Input.TextArea);

class CreateWall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoURL: getAvatar()
    }
  }
  componentDidMount() {
    let initialValues = {
      email: this.props.session.user.email,
      uid: this.props.session.user.uid,
      isPrivate: false,
      isArchive: false,
      isProfile: false,
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

    this.props.createWall(data, (wid) => {
      this.props.history.push(`${routes.wall}/${wid}`);
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
            <AvatarUploader onSuccess={this.updateAvatar} placeholder={this.state.photoURL} />
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
    form: state.form.createWall,
  }
}
export default reduxForm({
  //enableReinitialize: true,
  form: 'createWall',
  validate
})(connect(mapStateToProps, { createWall })(MasterPage(CreateWall)));