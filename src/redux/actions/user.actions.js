
import firebase from 'firebase'
import { userConstant } from './constant'

export const Realtimeuser = (uid) =>{

    return async (dispatch) =>{

    dispatch({type: `${userConstant.GET_REALTIME_USER}_REQUEST`});

    const db = firebase.firestore()

    db.collection('user')
    .onSnapshot((querySnapshot) =>{
        const user = [];
        querySnapshot.forEach(function(doc){
            if(doc.data.uid != uid){
                user.push(doc.data())
            }
        });

        dispatch({
            type: `${userConstant.GET_REALTIME_USER}_SUCCESS`,
            payload : {user}
        })
    })




    }
}