import React , {Component} from 'react'
import {connect} from 'react-redux';
import routes from '../../config/routes';
import {Redirect} from 'react-router-dom';

class Home extends Component {
  state = {}
  render() { 

    if(this.props.session.isAuthenticated){
      return(<Redirect to={routes.default} />)
    }

    return (  
      <React.Fragment>
      home
      </React.Fragment>
    )
  }
}
 
function mapStateToProps(state){
  return {
    session: state.session
  }
}
export default connect(mapStateToProps)(Home);