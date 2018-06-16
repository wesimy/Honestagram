import React, { Component } from 'react'
import MasterPage from '../../hoc/MasterPage/MasterPage';
import { connect } from 'react-redux';
import { fetchWalls } from './DashboardActions';
import DashboardWalls from './DashboardWalls/DashboardWalls.js'
import DashboardRequests from './DashboardRequests/DashboardRequests';
import './Dashboard.css';
import PageContent from '../../componenets/PageContent/PageContent';


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
  }

  render() {
    return (

      <PageContent loading={this.state.loading}>
         <div className="uk-container">
              <div data-uk-grid>
                <div className="uk-width-2-3@m">
                  <DashboardWalls datasource={this.props.dashboard} />
                </div>
                <div className="uk-width-1-3@m ">

                  <DashboardRequests />

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