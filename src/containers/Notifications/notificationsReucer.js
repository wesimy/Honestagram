
import _ from 'lodash';

export default function(state = {}, action){
    switch (action.type){
        case 'FETCH_NOTIFICATIONS':
        return action.payload;
        case 'CREATE_NOTIFICATION':
        return  { ...state, note: action.payload};
        default:
        return state;
    }
    
}

