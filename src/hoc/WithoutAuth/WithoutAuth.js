import React from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
//import {bindActionCreators} from 'redux';
//import {onSignin} from '../../containers/AuthWrapper/authWrapperActions';
import routes from '../../config/routes';

////////////////////////////////////////////////////////////////////////////////
// HOC to redirect away if the user is already authenticated 
////////////////////////////////////////////////////////////////////////////
export default function withoutAuth(Component){
  class WithoutAuthentication extends React.Component {
    
    componentDidMount(){
     // this.props.onSignin();
    }

    render() {
      const {from} = this.props.location.state || {from : { pathname : routes.default}};

      if(this.props.session.isAuthenticated && this.props.session.account.uid){
        return(
          <Redirect to={from} />
        )
     }
     else if(this.props.session.isAuthenticated && !this.props.session.account.uid){
      return(
        <Redirect to={routes.createaccount} />
      )
   }
     else{
      return (
        <Component {...this.props} />
      );
     }
      
    }
  }

  function mapStateToProps(state) {
    return{
      session: state.session
    }
  }
  
  return connect(mapStateToProps)(WithoutAuthentication);
}

