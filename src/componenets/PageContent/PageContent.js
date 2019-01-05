import React, { Component } from 'react'
import './PageContent.css';
import Loader from '../../componenets/loader/loader';
import { connect } from 'react-redux';
import {fetchNotifications} from './PageActions';
import { database } from '../../config/firebase';




class PageContent extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    console.log(this.props.session.account);
    this.props.fetchNotifications(this.props.session.account.uid, () => {
      
    });


    // bind live data updates to the wall
    const notesDB = database.ref(`/notifications/${this.props.session.account.uid}`).orderByChild("status").equalTo("pending");
    notesDB.on('value', data => {
        this.props.fetchNotifications(this.props.session.account.uid);
    });
  }

  render(){
    return (
      <div className="app-content bg-grey-bg">
        {
          (this.props.loading) ?
            <Loader />
            :
              this.props.children
        }
  
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    session: state.session,
      global: state.global
  }
}

export default connect(mapStateToProps,{fetchNotifications})(PageContent);
