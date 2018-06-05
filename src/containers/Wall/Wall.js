import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWallPosts, fetchWall, setWall } from './wallActions';
import WallPostForm from './WallPostForm/WallPostForm';
import WallPosts from './WallPosts/WallPosts';
import MasterPage from '../../hoc/MasterPage/MasterPage';
import PageCover from '../../componenets/PageCover/PageCover';
import PageAvatar from '../../componenets/PageAvatar/PageAvatar';


class Wall extends Component {
  constructor(props){
    super(props);

}

  componentDidMount() {
    console.log(this.props.match.params.wid);
    this.props.fetchWall(this.props.match.params.wid, this.props.fetchWallPosts(this.props.match.params.wid))
  }
  
  onNewWallPostHandler(){
    this.props.fetchWallPosts(this.props.match.params.wid);
  }

  render() {
    return (
      <div className="page">
        
        <PageCover />
        <div className="bg-white ">
        <div className="uk-container">
        <PageAvatar datasource={this.props.wall.info}/>
        <WallPostForm wid={this.props.match.params.wid} datasource={this.props.wall} onSubmitCallback={()=>{this.onNewWallPostHandler()}}/>
        </div>
        </div>
        <div className="uk-margin">
        <div className="uk-container">
        <WallPosts wid={this.props.match.params.wid} datasource={this.props.wall.posts} />
        </div>
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