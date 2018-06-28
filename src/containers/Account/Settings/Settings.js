import React, { Component } from 'react'
import MasterPage from '../../../hoc/MasterPage/MasterPage';
import PageContent from '../../../componenets/PageContent/PageContent';
import AccountForm from './AccountForm';
import NotificationsForm from './NotificationsForm';
import './Settings.css';

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

        <div className="uk-container">
          <div className="uk-flex uk-flex-center">
            <div className="account-settings uk-card uk-card-default uk-card-body uk-width-2-3@m uk-margin-large-top uk-margin-large-bottom">
              
<AccountForm/>
<NotificationsForm/>

            
            </div>
          </div>

        </div>

      </PageContent>
    )
  }
}

export default MasterPage(Settings);