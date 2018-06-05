import React, { Component } from 'react';
import { connect } from 'react-redux';
import WallItemList from '../../../componenets/WallItemList/WallList';

class DashboardWalls extends Component {

  render() {
    return (
      <div className="content-list-post uk-flex-center uk-grid-collapse" data-uk-grid>
                        <div className="uk-child-expand@s uk-width-4-5@m uk-width-3-5@l">
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