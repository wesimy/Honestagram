import { database } from '../../config/firebase';
import _ from 'lodash';

// Fetch Wall Data
export function fetchWall(wid,callback=()=>{}) {
    
    const wallDB = database.ref(`/accounts/${wid}`);
    return dispatch => {
        wallDB.once('value', snapshot => {
            console.log(snapshot.val());
            const data = snapshot.val()? snapshot.val(): {}
            dispatch({
                type: 'FETCH_WALL_INFO',
                payload: data
            });
        }).then(()=>{
            callback()
        });
    }
}

// Sets Wall Data from object
export function setWall(account,callback=()=>{}) {
    return {
        type: 'SET_WALL_INFO',
        payload: account
    };
}


export function fetchWallPosts(wid, callback = ()=>{}) {
    const postsDB = database.ref(`/posts`).orderByChild("wall").equalTo(wid);
    return dispatch => {
        postsDB.once('value', snapshot => {
            dispatch({
                type: 'FETCH_WALL_POSTS',
                payload: snapshot.val()
            });
        }).then(()=>{
            callback();
        });
    }
}


export function newWallPost(data, callback = ()=>{}) {
    console.log(data);
    const postsDB = database.ref(`/posts`);
    return dispatch => {
        postsDB.push(data)
            .once('value', snapshot => {
                dispatch(
                    {
                        type: 'NEW_WALL_POST',
                        payload: snapshot.val()
                    }
                );
                
            }).then(()=>{
                callback();
            });
    }


}
