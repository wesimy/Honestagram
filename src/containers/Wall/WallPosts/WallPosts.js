import React, { Component } from 'react';
import { connect } from 'react-redux';
import WallPostList from '../../../componenets/WallPostList/WallPostList';

class WallPosts extends Component {

  render() {
    return (
      <div className="content-form-post uk-flex-center uk-grid-collapse" data-uk-grid>
                        <div className="uk-child-expand@s uk-width-4-5@m uk-width-3-5@l">
        <WallPostList datasource={this.props.wall.posts} />
      </div>
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