import React, { Component } from 'react'
import MasterPage from '../../../hoc/MasterPage/MasterPage';
import PageContent from '../../../componenets/PageContent/PageContent';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }

  componentDidMount() {

    this.setState({
      loading: false,
    });
  }

  render() {
    return (
      <PageContent loading={this.state.loading}>
        settings
      </PageContent>
    )
  }
}

export default MasterPage(Settings);