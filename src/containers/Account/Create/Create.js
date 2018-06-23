import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import routes from '../../../config/routes';
import { createAccount } from '../accountActions';
import { createWall } from '../../Wall/wallActions';

import MasterPage from '../../../hoc/MasterPage/MasterPage';
import AvatarUploader from '../../../componenets/AvatarUploader/AvatarUploader';

import getAvatar from '../../../util/getAvatar';
import { renderInput, renderTextArea } from '../../../util/renderFormFields';

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoURL: getAvatar()
    }
  }
  getRandomAvatar = ()=>{
    this.setState({ photoURL: getAvatar() });
  }
  componentDidMount() {
    // if (this.props.session.user.photoURL) {
    //   this.setState({
    //     photoURL: this.props.session.user.photoURL
    //   })
    // }

    let initialValues = {
      displayName: this.props.session.user.displayName,
      email: this.props.session.user.email,
      uid: this.props.session.user.uid,
      isPrivate: false,
      isArchive: false,
      
    }
    this.props.initialize(initialValues);
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
      
      // Create Initial Wall
      this.props.createWall({...data, isProfile: true}, (wid) => {
        //this.props.history.push(`${routes.wall}/${wid}`);
        this.props.history.push(routes.dashboard);
      });
      
      
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

      <div className="uk-position-center ">
        <div className="uk-container uk-text-center">
          <div className="uk-flex-center uk-flex">
            <div className="uk-width-medium form-dark">
              <AvatarUploader onSuccess={this.updateAvatar} placeholder={this.state.photoURL} getRandomAvatar={this.getRandomAvatar}/>
              <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field name="displayName" type="text" placeholder="Display Name" component={renderInput} />
                <Field name="wallDescription" component={renderTextArea} placeholder="This is a good place to ask people what you like them to be honest about" />
                <button className="uk-button button-accent" type="submit" disabled={submitting}>Create Profile</button>
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
    form: state.form.createAccount,
  }
}
export default reduxForm({
  //enableReinitialize: true,
  form: 'createAccount',
  validate
})(connect(mapStateToProps, { createAccount,createWall })(MasterPage(CreateAccount)));