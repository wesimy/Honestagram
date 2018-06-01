import { twitterProvider,facebookProvider, googleProvider, auth, database } from '../../config/firebase';
import _ from 'lodash';

export function createAccount(data, callback = ()=>{}) {
    const accountDB = database.ref(`/accounts`);

    return dispatch => {
        accountDB.push(data.account)
            .once('value', snapshot => {
                dispatch(
                    {
                        type: 'AUTH_CREATE_ACCOUNT',
                        payload: snapshot.val()
                    }
                );
            }).then(()=>{
                localStorage.setItem("session",JSON.stringify(data));
                callback();
            });
    }
}
