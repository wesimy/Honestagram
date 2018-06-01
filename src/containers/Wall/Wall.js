import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWallPosts, fetchWall, setWall } from './wallActions';
import WallPostForm from './WallPostForm/WallPostForm';
import WallPosts from './WallPosts/WallPosts';
import MasterPage from '../../hoc/MasterPage/MasterPage';
import PageCover from '../../componenets/PageCover/PageCover';
import PageAvatar from '../../componenets/PageAvatar/PageAvatar';


class Wall extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.match.params.uid) {
      this.props.fetchWall(this.props.match.params.uid, this.props.fetchWallPosts(this.props.match.params.uid))
    }
    else {
      this.props.setWall(this.props.session.account);
      this.props.fetchWallPosts(this.props.session.account.uid);
    }
  }
  
  onNewWallPostHandler(){
    this.props.fetchWallPosts(this.props.wall.info.uid);
  }

  render() {
    return (
      <div className="page">
        
        <PageCover />
        <div className="uk-container">
        <PageAvatar datasource={this.props.wall.info}/>

        <WallPostForm datasource={this.props.wall} onSubmitCallback={()=>{this.onNewWallPostHandler()}}/>
        
        <WallPosts datasource={this.props.wall.posts} />
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

export default connect(mapStateToProps, { fetchWallPosts, fetchWall, setWall })(MasterPage(Wall));