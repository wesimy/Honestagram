import React, { Component } from 'react'
import {Route,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../../config/routes';

class PrivateRoute extends Component {
  
  render() {
    
    const {component: Component, ...rest} = this.props;
    return (
      <Route
      {...rest}
      render={props =>{
        // isAuth + Has Account +  Create Acc Page
        // if(this.props.session.isAuthenticated && this.props.session.account.uid && this.props.location.pathname == routes.createaccount){
        //   return(
        //   <Redirect
        //     to={routes.default}
        //   />
        //   )
        // }
        
         if(this.props.session.isAuthenticated && this.props.session.account.uid){
          return(
          <Component {...props} />
        )
        }

        else if(this.props.session.isAuthenticated && !this.props.session.account.uid && this.props.location.pathname !== routes.createaccount){
          return(
            <Redirect
            to={routes.createaccount}
          />
          )
          
        }

        else if(this.props.session.isAuthenticated && !this.props.session.account.uid && this.props.location.pathname === routes.createaccount){
          return (
            <Component {...props} />
          )
        }
        else if(!this.props.session.isAuthenticated){
          return(
            <Redirect
            to={{
              pathname: routes.signin,
              state: { from: props.location }
            }}
          />
          )
        }
      }
        
      }
    />
    )
  }
}
function mapStateToProps(state){
  return{
    session : state.session
  }
}
export default connect(mapStateToProps)(PrivateRoute);
