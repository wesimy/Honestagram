import { database } from '../../config/firebase';
//import _ from 'lodash';

export function createAccount(data, callback = () => { }) {
    
    const accountDB = database.ref(`/accounts`);

    return dispatch => {
        accountDB.push(data.account)
            .once('value', snapshot => {
                localStorage.setItem("session", JSON.stringify(data));
                dispatch(
                    {
                        type: 'AUTH_CREATE_ACCOUNT',
                        payload: snapshot.val()
                    }
                );
            }).then(() => {
                callback();
            });
    }
}


export function updateAccount(data, callback = () => { }) {
    
    // Get The Corresponding User Account 
    return dispatch => {
        let accountDB = database.ref(`/accounts`).orderByChild("uid").equalTo(data.uid).once('value',  snapshot=> {
            snapshot.forEach(function (record) {
                let updates = {};
                updates[`/accounts/${record.key}`] = data.account;
                database.ref().update(updates, function(error) {
                    if (error) {
                      // The write failed...
                      console.log(error);
                    } else {
                        localStorage.setItem("session", JSON.stringify(data));
                      dispatch({
                        type: 'AUTH_UPDATE_ACCOUNT',
                        payload: data.account
                    });
                    }
                  });
                
            });
        });
    }


    //accountsDB.ref.update(up);
    
    // return dispatch => {
    //     accountDB.push(data.account)
    //         .once('value', snapshot => {
    //             dispatch(
    //                 {
    //                     type: 'AUTH_CREATE_ACCOUNT',
    //                     payload: snapshot.val()
    //                 }
    //             );
    //         }).then(()=>{
    //             localStorage.setItem("session",JSON.stringify(data));
    //             callback();
    //         });
    // }
}
