import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import AuthWrapper from './containers/AuthWrapper/AuthWrapper';

class App extends Component {
  componentDidMount(){
    window.dispatchEvent(new Event('resize'));
  }
  render() {
    return (
      <Provider store={store}>
        <AuthWrapper/>
      </Provider>
    );
  }
}
export default App;
