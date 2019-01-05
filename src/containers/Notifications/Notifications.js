import React, { Component } from 'react'
import MasterPage from '../../hoc/MasterPage/MasterPage';
import PageContent from '../../componenets/PageContent/PageContent';
import { connect } from 'react-redux';
import { fetchNotifications, updateNotification} from './NotificationsActions';
import {updatePost} from '../Wall/wallActions';
import NotificationList from '../../componenets/NotificationList/NotificationList';
import { database } from '../../config/firebase';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }

  updateNotification = (nid,pid,v) =>{
    
    let opt = {
      nid,
      uid: this.props.session.account.uid,
      key: 'status',
      val: v
    }
    this.props.updateNotification(opt,()=>{
      console.log(pid,v);
      // if accepted --> update the post 
      if(v){
        let auth = {
          pid,
          key: 'author',
          val: this.props.session.account
        }
        this.props.updatePost(auth);
      }
    });

  }

  componentDidMount() {
    this.props.fetchNotifications(this.props.session.account.uid, () => {
      this.setState({
        loading: false,
      });
    });

    // bind live data updates to the wall
    const notesDB = database.ref(`/notifications/${this.props.session.account.uid}`).orderByChild("status").equalTo("pending");
    notesDB.on('value', data => {
      
      //if (data.val()) {
        this.props.fetchNotifications(this.props.session.account.uid);
      //}
    });
  }



  

  render() {
    return (
      <PageContent loading={this.state.loading}>
          <div className="uk-container">
          
          <div className="uk-grid uk-child-width-1-1" data-uk-grid>
          <div className="page-section">
          <div className="section-header">
          <h2>Notifications</h2>
          </div>
          <NotificationList datasource={this.props.notifications} updateNotification={this.updateNotification}/>
          </div>
          </div>
          </div>
      </PageContent>
    )
  }
}


function mapStateToProps(state) {
  return {
    notifications: state.notifications,
    session: state.session
  }
}


export default connect(mapStateToProps,{fetchNotifications, updateNotification, updatePost})(MasterPage(Posts));