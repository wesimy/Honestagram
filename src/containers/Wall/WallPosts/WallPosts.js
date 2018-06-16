import React, { Component } from 'react';
import { connect } from 'react-redux';
import WallPostList from '../../../componenets/WallPostList/WallPostList';
import './WallPosts.css';

class WallPosts extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    
    return (
      <div className="content-list-post uk-flex-center uk-grid-collapse" data-uk-grid>
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
    session: state.session
  }
}

export default connect(mapStateToProps)(WallPosts);