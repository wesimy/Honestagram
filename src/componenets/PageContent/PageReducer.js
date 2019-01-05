
//import _ from 'lodash';

const initialState = { notifications: {} };
export default function(state = initialState, action){
    switch (action.type){
        case 'GLOBAL_FETCH_NOTIFICATIONS':
        
        return { ...state , notifications: action.payload};

        default:
        return state;
    }
}



