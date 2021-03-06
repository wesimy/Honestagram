import React, { Component } from 'react'
import MasterPage from '../../hoc/MasterPage/MasterPage';
import { connect } from 'react-redux';
import { fetchWalls } from './DashboardActions';
import DashboardWalls from './DashboardWalls/DashboardWalls.js'
import DashboardRequests from './DashboardRequests/DashboardRequests';
import './Dashboard.css';
import PageContent from '../../componenets/PageContent/PageContent';
import { database } from '../../config/firebase';
import ProfileCard from '../../componenets/ProfileCard/ProfileCard';
import _ from 'lodash';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }

  componentDidMount() {
    this.props.fetchWalls(this.props.session.account.uid, () => {
      this.setState({
        loading: false,
      });
    });

    // bind live data updates to the wall
    const postsDB = database.ref(`/walls`).orderByChild("uid").equalTo(this.props.session.account.uid);
    postsDB.on('value', data => {
      
      if (data.val()) {
        this.props.fetchWalls(this.props.session.account.uid, () => {
          this.setState({
            loading: false,
          });
        });
      }
    });
  }

  render() {

    


    return (

      <PageContent loading={this.state.loading}>
         <div className="uk-container">
              <div data-uk-grid>
              <div className="uk-width-1-3@s uk-flex-last@s">
      
      <ProfileCard datasource={this.props.dashboard} />

    </div>

                <div className="uk-width-2-3@s">
                  <DashboardWalls datasource={this.props.dashboard} />
                </div>
                
              </div>

            </div>
      </PageContent>

    )
  }
}



function mapStateToProps(state) {
  return {
    session: state.session,
    dashboard: state.dashboard,
  }
}

export default connect(mapStateToProps, { fetchWalls })(MasterPage(Dashboard));