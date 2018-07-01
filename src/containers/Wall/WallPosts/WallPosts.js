import React, { Component } from 'react';
import { connect } from 'react-redux';
import WallPostList from '../../../componenets/WallPostList/WallPostList';
import './WallPosts.css';
import ShareYourWall from '../../../media/svg/share-your-wall-01.svg';
import {updatePost} from '../wallActions';
import {newNotification} from '../../Notifications/NotificationsActions';

class WallPosts extends Component {

  makePrivate = (pid,val)=>{
    let opt = {
      pid,
      key: 'isPublic',
      val: !val
    }
    this.props.updatePost(opt);

  }

  requestIdentity = (p)=>{
    let request = {
      pid: p.pid,
      aid: p.author,
      oid: p.owner,
      status: "pending",
    }

    this.props.newNotification(request)
  }

  render() {

    return (


      (this.props.wall.posts) ?

        <React.Fragment>
          <WallPostList isOwner={this.props.wall.isOwner} datasource={this.props.wall.posts} requestIdentity={this.requestIdentity} makePrivate={this.makePrivate} />

        </React.Fragment>
        :
        <div className="uk-flex uk-flex-center" data-uk-grid>
          <div className="uk-width-1-2@s uk-width-3-5@xl">
            {this.props.wall.isOwner && <img src={ShareYourWall} width="100%" />}
          </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    wall: state.wall,
    session: state.session
  }
}

export default connect(mapStateToProps,{updatePost,newNotification})(WallPosts);