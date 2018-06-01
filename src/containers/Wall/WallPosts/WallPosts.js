import React, { Component } from 'react';
import { connect } from 'react-redux';
import WallPostList from '../../../componenets/WallPostList/WallPostList';

class WallPosts extends Component {

  render() {
    return (
      <div>
        <WallPostList datasource={this.props.wall.posts} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    wall: state.wall,
  }
}

export default connect(mapStateToProps)(WallPosts);