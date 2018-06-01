
import _ from 'lodash';

export default function(state = {}, action){
    switch (action.type){
        
        case 'AUTH_SIGN_OUT':
        return {};
        
        default:
        return state;
    }
    
}

