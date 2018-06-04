import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import routes from '../../../config/routes';
import { createAccount } from '../accountActions';
import AntdFormField from '../../../hoc/AntdFormField/AntdFormField';
import { Switch, Form, Input, Select, Checkbox, Button } from "antd";
import MasterPage from '../../../hoc/MasterPage/MasterPage';


const AInput = AntdFormField(Input);
const ATextArea = AntdFormField(Input.TextArea);

class CreateAccount extends Component {
  constructor(props){
    super(props);
    
  }
  componentDidMount() {
    let initialValues = {
      displayName: this.props.session.user.displayName,
      email: this.props.session.user.email,
      photoURL: this.props.session.user.photoURL,
      uid: this.props.session.user.uid,
      isPrivate: false,
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
    );
  }
  onSubmit(values) {
console.log(values);
    let data = {
      ...this.props.session, 
      account: {
        ...values,
      }
    }

    this.props.createAccount(data, () => {
      this.props.history.push(routes.dashboard);
    });
  }
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div>
        <h1>Choose a name for your wall</h1>
        <p>a name could be your name or your nickname</p>
        <img src={(this.props.form.initial)? this.props.form.initial.photoURL: ''} />
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>


          <fieldset className="uk-fieldset">
            <div className="uk-margin">
            <Field label="PhotoURL" name="photoURL" component={AInput} placeholder="PhotoURL" hasFeedback />
            </div>
          </fieldset>

          <Field label="Display Name" name="displayName" component={AInput} placeholder="Display Name" hasFeedback />

          <Field label="Tell us about your wall" name="wallDescription" component={ATextArea} placeholder="This is a good place to ask people what you like them to be honest about" hasFeedback />

          <Field label="Email Address" name="email" component={AInput} placeholder="Email Address" disabled hasFeedback />





          <Button type="primary" htmlType="submit">Submit</Button>
        </form>
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

  // if (!values.email) {
  //   errors.email = 'Required'
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = 'Invalid email address'
  // }
  // if (!values.age) {
  //   errors.age = 'Required'
  // } else if (isNaN(Number(values.age))) {
  //   errors.age = 'Must be a number'
  // } else if (Number(values.age) < 18) {
  //   errors.age = 'Sorry, you must be at least 18 years old'
  // }

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