import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import AuthWrapper from './containers/AuthWrapper/AuthWrapper';


//uikit
import Icons from "uikit/dist/js/uikit-icons";
import UIkit from "uikit";
UIkit.use(Icons);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AuthWrapper/>
      </Provider>
    );
  }
}
export default App;
