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
    super(props)
    //Of course I can code this more programatically, but this seems good to me.



}

  flyPlane(){
    setTimeout(function() {
      document.querySelector('#plate').classList.remove('front');
      document.querySelector('.curvable').classList.add('curved');
        setTimeout(function() {
          document.querySelector('#container').classList.add('hover');
            setTimeout(function() {
              document.querySelector('#container').classList.add('fly_away_first');
                setTimeout(function() {
                  document.querySelector('#container').classList.add('fly_away');
                    setTimeout(function(){
                      document.querySelector('#plate').classList.add('front');
                      document.querySelector('#container').classList.remove('fly_away fly_away_first hover')
                      document.querySelector('.curvable').classList.remove('curved');
                    },3000);
                }, 600);
            }, 2000);
        }, 2800);
    }, 200);
};

  componentWillUpdate(nextProps,nextState) {
    if(nextProps.wall.info & this.props.posts !== nextProps.wall.posts){
     nextProps.fetchWallPosts(nextProps.wall.info.uid);
    }
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