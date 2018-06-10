import React, { Component } from 'react'
import MasterPage from '../../hoc/MasterPage/MasterPage';
import { connect } from 'react-redux';
import {fetchWalls} from './DashboardActions';
import DashboardWalls from './DashboardWalls/DashboardWalls.js'
import './Dashboard.css';
import { Link } from 'react-router-dom';
import routes from '../../config/routes';

class Dashboard extends Component {
  
  componentDidMount() {
    this.props.fetchWalls(this.props.session.account.uid);
  }

  render() {
    return (
     <div>
      <DashboardWalls datasource={this.props.dashboard}/>
      <Link to={routes.createwall} > new wall</Link>
     </div>
    )
  }
}



function mapStateToProps(state) {
  return {
    session: state.session,
    dashboard: state.dashboard,
  }
}

export default connect(mapStateToProps,{fetchWalls})(MasterPage(Dashboard));