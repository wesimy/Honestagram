import { twitterProvider,facebookProvider, googleProvider, auth, database } from '../../config/firebase';
import _ from 'lodash';

export function signup(u, p) {
    return dispatch => auth.createUserWithEmailAndPassword(u, p).then(result=>{
        
        if (result.user) {
            
            localStorage.setItem("session",JSON.stringify({
                isAuthenticated: true,
                    user: result.user,
                    account:{}
            }));
            dispatch({
                type: 'AUTH_CHANGE',
                payload: {
                    isAuthenticated: true,
                    user: result.user,
                }
            });
            var u = auth.currentUser;
            u.sendEmailVerification().then(function() {
                // Email sent.
              }).catch(function(error) {
                // An error happened.
              });
        }
        
    });
}

export function signout() {
    return dispatch => {
        auth.signOut();
        localStorage.clear();
        dispatch({ type: 'AUTH_SIGN_OUT' });
    };
}

export function emailSignin(u, p) {
    return dispatch => auth.signInWithEmailAndPassword(u, p).then(result=>{
        onSignin(dispatch);
    });
}

export function googleSignIn() {
    return dispatch => auth.signInWithPopup(googleProvider).then(result=>{
        onSignin(dispatch);
    });
}

export function facebookSignIn() {
    return dispatch => auth.signInWithPopup(facebookProvider).then(result => {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        onSignin(dispatch);
    });
}

const onSignin = dispatch => {
    auth.onAuthStateChanged((user) => {
        if (user) {
            const accountsDB = database.ref(`/accounts`).orderByChild("uid").equalTo(user.uid);
            // return dispatch => {
                accountsDB.once('value', snapshot => {
                    const account = (_.find(snapshot.val())) ? _.find(snapshot.val()) : {}
                    
                    localStorage.setItem("session",JSON.stringify({
                        user,
                        account,
                        isAuthenticated: true
                    }));
                
                    dispatch({
                        type: 'AUTH_CHANGE',
                        payload: {
                            isAuthenticated: true,
                            user,
                            account,
                        }
                    });
                })
            // }
        }
      
    });
}