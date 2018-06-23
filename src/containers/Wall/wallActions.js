import { database } from '../../config/firebase';

export function createWall(data, callback = ()=>{}) {
    const accountDB = database.ref(`/walls`);

    return dispatch => {
        let wid =  accountDB.push(data)
            .once('value', snapshot => {
                dispatch(
                    {
                        type: 'CREATE_WALL',
                        payload: snapshot.val()
                    }
                );
            }).then((snapshot)=>{
                //localStorage.setItem("session",JSON.stringify(data));
                callback(snapshot.key);
            });
    }
}


// Fetch Wall Data
export function fetchWall(wid,uid,callback=()=>{}) {
    
    const wallDB = database.ref(`/walls/${wid}`);
    return dispatch => {
        wallDB.once('value', snapshot => {
            const data = snapshot.val()? snapshot.val(): {}
            dispatch({
                type: 'FETCH_WALL_INFO',
                payload: {
                    info: data,
                    isOwner: data.uid === uid
                }
            });
        }).then(()=>{
            callback()
        });
    }}

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
                        type: 'CREATE_WALL_POST',
                        payload: snapshot.val()
                    }
                );
                
            }).then(()=>{
                callback();
            });
    }


}
