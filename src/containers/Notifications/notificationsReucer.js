
import _ from 'lodash';

export default function(state = {}, action){
    switch (action.type){
        case 'CREATE_NOTIFICATION':
        return  { ...state, notification: action.payload};
        default:
        return state;
    }
    
}

