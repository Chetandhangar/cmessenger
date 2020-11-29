
import firebase from 'firebase'
import { userConstant } from './constant'

export const Realtimeuser = (uid) =>{

    return async (dispatch) =>{

    dispatch({type: `${userConstant.GET_REALTIME_USER}_REQUEST`});

    const db = firebase.firestore()

    const unsubscribe = db.collection('user')
    .onSnapshot((querySnapshot) =>{
        const user = [];
        querySnapshot.forEach(function(doc){
            if(doc.data().uid != uid){
                user.push(doc.data())
            }
        });

        dispatch({
            type: `${userConstant.GET_REALTIME_USER}_SUCCESS`,
            payload : {user}
        })
    })

        return unsubscribe;


    }
}

export const updateMessage = (msgObj) => {
    return async dispatch => {

        const db = firebase.firestore();
        db.collection('chat')
        .add({
            ...msgObj,
            isView: false,
            createdAt: new Date()
        })
        .then((data) => {
            console.log(data)
            //success
            // dispatch({
            //     type: userConstants.GET_REALTIME_MESSAGES,
            // })


        })
        .catch(error => {
            console.log(error)
        });

    }
}

export const getRealtimeConversations = (user) => {
    return async dispatch => {

        const db = firebase.firestore();
        db.collection('chat')
        .where('user_uid_1', 'in', [user.uid_1, user.uid_2])
        .orderBy('createdAt', 'asc')
        .onSnapshot((querySnapshot) => {

            const chat = [];

            querySnapshot.forEach(doc => {

                if(
                    (doc.data().user_uid_1 == user.uid_1 && doc.data().user_uid_2 == user.uid_2)
                    || 
                    (doc.data().user_uid_1 == user.uid_2 && doc.data().user_uid_2 == user.uid_1)
                ){
                    chat.push(doc.data())
                }
                
            });

            dispatch({
                type: userConstant.GET_REALTIME_MESSAGES,
                payload: { chat }
            })

            console.log(chat);
        })


    }
}