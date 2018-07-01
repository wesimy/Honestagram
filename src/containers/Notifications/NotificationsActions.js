
import { database } from '../../config/firebase';

export function newNotification(data, callback = ()=>{}) {
    const noteDB = database.ref(`/notifications`);
    return dispatch => {
        noteDB.push(data)
            .once('value', snapshot => {
                dispatch(
                    {
                        type: 'CREATE_NOTIFICATION',
                        payload: snapshot.val()
                    }
                );
                
            }).then(()=>{
                callback();
            });
    }


}
