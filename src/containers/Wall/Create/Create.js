import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import routes from '../../../config/routes';
import { createWall } from '../wallActions';
import AntdFormField from '../../../hoc/AntdFormField/AntdFormField';
import { Input, Button } from "antd";
import { renderInput, renderTextArea } from '../../../util/renderFormFields';
import MasterPage from '../../../hoc/MasterPage/MasterPage';
import PhotoUploader from '../../../componenets/PhotoUploader/PhotoUploader';
import placeholder from '../../../media/svg/add-image-placeholder-icon.svg';

const AInput = AntdFormField(Input);
const ATextArea = AntdFormField(Input.TextArea);

class CreateWall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoURL: placeholder
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

    this.props.createWall(data.account, (wid) => {
      this.props.history.push(`${routes.wall}/${wid}`);
    });
  }

  //
  updatePhoto = (url) => {
    this.setState({
      photoURL: url
    });
  }

  render() {

    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div className="uk-position-center ">
        <div className="uk-container uk-text-center">
          <div className="uk-flex-center uk-flex">
            <div className="uk-width-medium form-dark">
            <PhotoUploader onSuccess={this.updatePhoto} placeholder={this.state.photoURL} />
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <Field  name="displayName" placeholder="Wall Title"  component={renderInput} />
              <Field name="wallDescription" placeholder="What is this wall about?"  component={renderTextArea} />
              <Field name="email" placeholder="Email Address" disabled type="hidden" component={renderInput}/>
              <button className="uk-button button-accent" type="submit">Create Wall</button>
            </form>

 </div>
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