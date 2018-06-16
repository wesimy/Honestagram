
//import _ from 'lodash';

let initState = {walls:[]};
export default function(state = {...initState}, action){
    switch (action.type){
        case 'FETCH_WALLS':
        return  { ...state, walls: action.payload};

        case 'AUTH_SIGN_OUT':
        return {...initState};
        
        default:
        return state;
    }
    
}

