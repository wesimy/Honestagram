import React, { Component } from 'react'
import MasterPage from '../../hoc/MasterPage/MasterPage';
import PageContent from '../../componenets/PageContent/PageContent';

class Posts extends Component {
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
        notifications
      </PageContent>
    )
  }
}

export default MasterPage(Posts);