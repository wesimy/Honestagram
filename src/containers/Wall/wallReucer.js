
//import _ from 'lodash';

export default function(state = {}, action){
    switch (action.type){

        // case 'NEW_WALL_POST':
        // return {...state}
        
        case 'FETCH_WALL_INFO':
        case 'SET_WALL_INFO':
        return { ...state, info: action.payload.info, isOwner: action.payload.isOwner};

        case 'FETCH_WALL_POSTS':
        return  { ...state, posts: action.payload};

        case 'AUTH_SIGN_OUT':
        return {};

        default:
        return state;
    }
    
}

