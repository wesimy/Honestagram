import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWallPosts, fetchWall, setWall } from './wallActions';
import MasterPage from '../../hoc/MasterPage/MasterPage';
import PageContent from '../../componenets/PageContent/PageContent';
import WallPostForm from './WallPostForm/WallPostForm';
import WallPosts from './WallPosts/WallPosts';
import PageCover from '../../componenets/PageCover/PageCover';
import PageAvatar from '../../componenets/PageAvatar/PageAvatar';
import SocialShare from '../../componenets/SocialShare/SocialShare';
class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
        }
  }

  componentDidMount() {
    this.props.fetchWall(this.props.match.params.wid ,this.props.session.account.uid, () => {
      this.props.fetchWallPosts(this.props.match.params.wid);
      this.setState({
        loading: false,
      });
    });
  }

  onNewWallPostHandler() {
    this.props.fetchWallPosts(this.props.match.params.wid);
  }

  render() {
   
    return (

<PageContent loading={this.state.loading}>
        <PageCover />
      <div className="page">
    
          <div className="uk-container">
            <PageAvatar datasource={this.props.wall.info} />
            
            {this.props.wall.isOwner && 
            <div className="uk-felx uk-flex-center uk-margin" data-uk-grid>
              <div>
              <SocialShare datasource={this.props.wall.info} size={30} responsive={false} shareurl={window.location.href} />
              </div>
            </div>
            }

            {!this.props.wall.isOwner && <WallPostForm wid={this.props.match.params.wid} datasource={this.props.wall} onSubmitCallback={() => { this.onNewWallPostHandler() }} />}
          </div>

        <div className="uk-margin">
          <div className="uk-container">
            

            <WallPosts wid={this.props.match.params.wid} datasource={this.props.wall.posts} />

          }
          </div>
        </div>

      </div>
      </PageContent>
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