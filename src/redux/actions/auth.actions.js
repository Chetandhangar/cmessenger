import firebase from 'firebase';

export const signup = (user) =>{
    return async (dispatch) =>{

    const db = firebase.firestore();

    firebase.auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(data =>{
        console.log(data);

        const currentuser = firebase.auth().currentUser;
        const name = `${user.firstname} ${user.lastname}`
        currentuser.updateProfile({
            displayName: name
        })
        .then(()=>{
            //if you are here means you updated the profile succsessfully
            db.collection('user').add({
                firstname: user.firstname,
                lastname: user.lastname,
                uid: data.user.uid,
                createdAt: new Date() 
            })
            .then(() =>{
                const loggedinuser = {
                    firstname: user.firstname,
                    lastname: user.lastname,
                    uid : data.user.uid,
                    email: user.email
                }
                localStorage.setItem('user' , JSON.stringify(loggedinuser))
                console.log("You are sucessfully login")
            })
            .catch(err=>console.log(err));

        })
        .catch(err=>console.log(err));
    })
    .catch(err => {console.log(err)});
}
}