import _ from 'lodash';
import { database } from '../../config/firebase';

export function newNotification(data, callback = () => { }) {
    const verifyExist = database.ref(`/notifications/${data.aid}`).orderByChild("fingerprint").equalTo(data.pid+data.oid);
    return dispatch => {
        verifyExist.once('value', valid => {
            
            
            
            if(valid.val() === null || valid.val()[Object.keys(valid.val())[0]].status === false ){
                const noteDB = database.ref(`/notifications/${data.aid}`);
                noteDB.push(data)
                    .once('value', snapshot => {
                        dispatch(
                            {
                                type: 'CREATE_NOTIFICATION',
                                payload: snapshot.val()
                            }
                        );
    
                    });
            }
            else{
                dispatch(
                    {
                        type: 'CREATE_NOTIFICATION',
                        payload: null
                    }
                );
            }
        }).then(() => {
            callback();
        });
    }
   




}


// Fetch Wall Data
export function fetchNotifications(uid, callback = () => { }) {
    
    const noteDB = database.ref(`/notifications/${uid}`).orderByChild("status").equalTo("pending");
    return dispatch => {
        noteDB.once('value', snapshot => {
            dispatch({
                type: 'FETCH_NOTIFICATIONS',
                payload: snapshot.val()
            });
        }).then(() => {
            callback();
        });
    }
}



// Data = {key: ,val:}
export function updateNotification(data, callback = () => { }) {
    
    // Get The Corresponding User Account 
    return dispatch => {
        let updates = {};
            updates[`/notifications/${data.uid}/${data.nid}/${data.key}`] = data.val;
                database.ref().update(updates, function(error) {
                    if (error) {
                      // The write failed...
                      console.log(error);
                    } else {
                      dispatch({
                        type: 'UPDATE_NOTIFICATION',
                        payload: data
                    });
                    }
                  }).then(() => {
                    callback();
                });

    }

}
