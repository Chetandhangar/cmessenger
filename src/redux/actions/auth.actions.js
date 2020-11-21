import firebase from 'firebase';

export const signup = (user) =>{
    return async (dispatch) =>{

    const db = firebase.firestore();

    firebase.auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(user =>{
        console.log(user)
    })
    .catch(err => {console.log(err)});
}
}