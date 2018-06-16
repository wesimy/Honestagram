import React, { Component } from 'react';
import { connect } from 'react-redux';
import WallItemList from '../../../componenets/WallItemList/WallList';
import routes from '../../../config/routes';
import {Link } from 'react-router-dom';

class DashboardWalls extends Component {

  render() {
    return (
      <div className="page-section">
      <div className="section-header uk-flex uk-flex-middle" data-uk-grid>
          <div className="uk-width-expand">
          <h2><i data-uk-icon="comments"></i> Walls</h2>
          </div>
          <div className="">
          <Link className="uk-width-extend" to={routes.createwall} data-uk-icon="icon: plus-circle; ratio:0.8" >Create a Wall </Link>
          </div>

      </div>
      <div className="section-body">
      <WallItemList datasource={this.props.datasource.walls} />
      </div>
  </div>      
        
        
    )
  }
}

function mapStateToProps(state) {
  return {
    walls: state.dashboard.walls,
  }
}

export default connect(mapStateToProps)(DashboardWalls);