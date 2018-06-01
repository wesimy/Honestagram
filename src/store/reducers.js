import { combineReducers } from 'redux';
import authReducer from '../containers/AuthWrapper/authWrapperReducer';
import { reducer as formReducer } from 'redux-form';
// import postsReducers from '../containers/Posts/postsReducers';
import wallReducers from '../containers/Wall/wallReucer';
// import profileReducers from '../containers/Profile/profileReducers';

export default combineReducers({
    session: authReducer,
    form: formReducer,
    wall: wallReducers,
    // posts : postsReducers,
    // profile: profileReducers
});