import firebase from 'firebase';
import { authConstant } from './constant';

export const signup = (user) =>{

    return async(dispatch) =>{
        
        const db = firebase.firestore();

        dispatch({type:`${authConstant.USER_LOGIN}_REQUEST`});

        firebase.auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(data=>{
            console.log(data);
            const currentuser = firebase.auth().currentUser;
            const name = `${user.firstname} ${user.lastname}`;
            currentuser.updateProfile({
                displayName: name
            })
            .then(()=>{
                    //if you are updated successfully
                    db.collection('user')
                    .doc(data.user.uid)
                    .set({
                        firstname: user.firstname,
                        lastname: user.lastname,
                        uid: data.user.uid,
                        createdAt: new Date(),
                        isOnline : true
                    })
                    .then(()=>{

                        const loggedinuser = {
                            firstname: user.firstname,
                            lastname: user.lastname,
                            uid: data.user.uid,
                            email: user.email
                        }
                        localStorage.setItem('user', JSON.stringify(loggedinuser));
                        console.log("YOu are logged in Sucessfully...!");
                        dispatch({
                            type: `${authConstant.USER_LOGIN}_SUCCESS`,
                            payload: {user: loggedinuser}
                        })

                    })
                    .catch(error =>{
                        console.log(error);
                        dispatch({
                            type: `${authConstant.USER_LOGIN}_FAILURE`,
                            payload: {error}
                        })
                    });

            });
        })
        .catch(error =>{
            console.log(error);
        })
    }
}


export const signin = (user) =>{

    return async (dispatch) =>{

        dispatch({type: `${authConstant.USER_LOGIN}_REQUEST`});

        firebase.auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((data) =>{
            console.log(data);

            const db = firebase.firestore();
            db.collection('user')
            .doc(data.user.uid)
            .update({
                isOnline : true
            })
            .then(()=>{
                const name = data.user.displayName.split(' ');
                const firstname = name[0];
                const lastname = name[1];
    
                const loggedInUser = {
                    firstname,
                    lastname,
                    uid: data.user.uid,
                    email: data.user.email
                }

            localStorage.setItem('user', JSON.stringify(loggedInUser));
            dispatch({
                type: `${authConstant.USER_LOGIN}_SUCCESS`,
                payload : {user: loggedInUser}
            })
        })

        .catch(error=>{
            console.log(error);
         
        })
    
    })
        .catch(error => {
        console.log(error);
        dispatch({
            type: `${authConstant.USER_LOGIN}_FAILURE`,
            payload: { error }
        })
    })

        
    }
}


export const isLoggedInUser = () =>{

    return async dispatch =>{
        const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

        if(user){
            dispatch({
                type: `${authConstant.USER_LOGIN}_SUCCESS`,
                payload: {user}
            });
        }

        else{
            dispatch({
                type: `${authConstant.USER_LOGIN}_FAILURE`,
               // payload: {error}
            });
        }
    }
}


export const logout = () =>{

    return async dispatch =>{

        dispatch({type:`${authConstant.USER_LOGOUT}_REQUEST`});

        firebase.auth()
        .signOut()
        .then(()=>{
            localStorage.clear();
            dispatch({
                type: `${authConstant.USER_LOGOUT}_SUCCESS`
            })
        })
        .catch(error=>{
            console.log(error);
            dispatch({

                type: error
            })
        })

    }
}