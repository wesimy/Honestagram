import { database } from '../../config/firebase';
import _ from 'lodash';




export function fetchWalls(uid, callback = ()=>{}) {
    const postsDB = database.ref(`/walls`).orderByChild("uid").equalTo(uid);
    return dispatch => {
        postsDB.once('value', snapshot => {
            dispatch({
                type: 'FETCH_WALLS',
                payload: snapshot.val()
            });
        }).then(()=>{
            callback();
        });
    }
}


