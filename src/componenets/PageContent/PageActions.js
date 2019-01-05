import _ from 'lodash';
import { database } from '../../config/firebase';


// Fetch Wall Data
export function fetchNotifications(uid, callback = () => { }) {
    
    const noteDB = database.ref(`/notifications/${uid}`).orderByChild("status").equalTo("pending");
    return dispatch => {
        noteDB.once('value', snapshot => {
            dispatch({
                type: 'GLOBAL_FETCH_NOTIFICATIONS',
                payload: snapshot.val()
            });
        }).then(() => {
            callback();
        });
    }
}

