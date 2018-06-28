
//import _ from 'lodash';

const session = localStorage.getItem("session");


const initialState = JSON.parse(session) || { isAuthenticated: false, account: {}, user: {}};
export default function(state = initialState, action){
    switch (action.type){
        case 'AUTH_UPDATE_ACCOUNT':
        return { ...state , account: action.payload};

        case 'AUTH_CREATE_ACCOUNT':
        return { ...state , account: action.payload};

        case 'AUTH_CHANGE':
        return {...state, ...action.payload};
            
        case 'AUTH_SIGN_OUT':
        return {isAuthenticated: false, account: {}, user: {}};
        
        default:
        return state;
    }
}

