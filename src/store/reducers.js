import { combineReducers } from 'redux';
import authReducer from '../containers/AuthWrapper/authWrapperReducer';
import { reducer as formReducer } from 'redux-form';
// import postsReducers from '../containers/Posts/postsReducers';
import wallReducer from '../containers/Wall/wallReucer';
import dashboardReucer from '../containers/Dashboard/dashboardReucer';
import notificationsReucer from '../containers/Notifications/notificationsReucer';
// import profileReducers from '../containers/Profile/profileReducers';

export default combineReducers({
    session: authReducer,
    form: formReducer,
    wall: wallReducer,
    dashboard : dashboardReucer,
    notifications: notificationsReucer
    // profile: profileReducers
});