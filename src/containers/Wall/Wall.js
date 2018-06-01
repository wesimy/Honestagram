import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWallPosts, fetchWall, setWall } from './wallActions';
import WallPostForm from './WallPostForm/WallPostForm';
import WallPosts from './WallPosts/WallPosts';
import MasterPage from '../../hoc/MasterPage/MasterPage';

class Wall extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.match.params.uid) {
      console.log(this.props.match.params.uid);
      this.props.fetchWall(this.props.match.params.uid, this.props.fetchWallPosts(this.props.match.params.uid))
    }
    else {
      this.props.setWall(this.props.session.account);
      this.props.fetchWallPosts(this.props.session.account.uid);
    }
  }
  
  onNewWallPostHandler(){
    console.log('something');
  }

  render() {
    return (
      <div>
        {/* <h1>Welcome {auth.currentUser.displayName}</h1>
        <img src={auth.currentUser.photoURL} /> */}

        <WallPostForm onSubmitCallback={()=>{this.onNewWallPostHandler()}}/>
        
        <WallPosts datasource={this.props.wall.posts} />
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