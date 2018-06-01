import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import routes from '../../../config/routes';
import { signout } from '../../AuthWrapper/authWrapperActions';
import MasterPage from '../../../hoc/MasterPage/MasterPage';

class SignOut extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.signout();
    
    }

    render() {
        if (this.props.session.isAuthenticated) {
            return (
                <div>
                    Signing Out
            </div>
            )
        }
        else{
            return (
                <Redirect to={routes.signin} />
            );
        }
        
    }
}

function mapStateToProps(state) {
    return {
        session: state.session
    }
}

export default connect(mapStateToProps, { signout })(MasterPage(SignOut))