import React, { Component } from 'react';
import { connect } from 'react-redux';
import WallPostList from '../../../componenets/WallPostList/WallPostList';
import './WallPosts.css';
import ShareYourWall from '../../../media/svg/share-your-wall-01.svg';

class WallPosts extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {

    return (
      
      
        (this.props.wall.posts)?

        <div className="content-list-post uk-flex-center uk-grid-collapse" data-uk-grid>
        <div className="uk-child-expand@s uk-width-4-5@m uk-width-3-5@l">
          <WallPostList isOwner={this.props.wall.isOwner} datasource={this.props.wall.posts} />
        </div>
      </div>
      :

      <div className="uk-flex uk-flex-center" data-uk-grid>
              <div className="uk-width-1-2@m uk-width-2-5@xl">
              {this.props.wall.isOwner && <img src={ShareYourWall} width="100%"/>}
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