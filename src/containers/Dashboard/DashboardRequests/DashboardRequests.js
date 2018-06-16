import React, { Component } from 'react';
import { connect } from 'react-redux';
import routes from '../../../config/routes';
import {Link } from 'react-router-dom';

class DashboardRequests extends Component {

  render() {
    return (
      <div className="page-section">
      <div className="section-header  uk-flex uk-flex-middle" data-uk-grid>
          <div className="uk-width-expand">
          <h2><i data-uk-icon="bell"></i> Needs Attention</h2>
          </div>
          <div className="">
          <Link className="" to={routes.notifications} data-uk-icon="icon: arrow-right" >Review All</Link>
          </div>

      </div>
      <div className="section-body">

        <dl className="uk-description-list uk-description-list-divider">
          <dt>Identity request</dt>
          <dd>
            [someone] requested your Identity on <a href="#">asdasdas</a>
          </dd>

          <dt>Identity Revealed</dt>
          <dd>
            [someone] shared his Identity on <a href="#">asdasdas</a>
          </dd>

          <dt>Identity request</dt>
          <dd>
            [someone] requested your Identity on <a href="#">asdasdas</a>
          </dd>
        </dl>

      </div>
  </div>      
        
        
    )
  }
}

function mapStateToProps(state) {
  return {
    //walls: state.dashboard.walls,
  }
}

export default connect(mapStateToProps)(DashboardRequests);