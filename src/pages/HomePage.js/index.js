import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import { Realtimeuser , updateMessage, getRealtimeConversations} from '../../redux/actions';
import './style.css';


const User = (props) =>{
    const { user, onClick} = props;
    return(

    <div onClick={() => onClick(user)} className="displayName">
    <div className="displayPic">
        <img src="https://instagram.fpnq13-1.fna.fbcdn.net/v/t51.2885-19/s150x150/102293229_602841493668536_6352726465050208883_n.jpg?_nc_ht=instagram.fpnq13-1.fna.fbcdn.net&_nc_ohc=YZ1eRRuDMrIAX98fH3x&tp=1&oh=c6cc357e3f334be5bcb0372520c8f7be&oe=5FE6AD64"
         alt="Profile" />
    </div>
    <div style={{display: "flex", flex:1, justifyContent: "space-between", margin: '0 10px'}}>
        <span style={{fontWeight: 500}}>{user.firstname} {user.lastname}</span>
        <span>{user.isOnline ? `onlineStatus`: `onlineStatus off`}</span>
    </div>
</div>
    );

}

const HomePage = (props) => {

const dispatch = useDispatch();
const auth = useSelector(state => state.auth)
const user = useSelector(state => state.user) 
const [chatStarted, setChatStarted] = useState(false);
const [chatUser, setChatUser] = useState('');
const [message, setMessage] = useState('');
const [userUid, setUserUid] = useState(null);
let unsubscribe;


useEffect(() => {

    unsubscribe = dispatch(Realtimeuser(auth.uid))
    .then(unsubscribe => {
      return unsubscribe;
    })
    .catch(error => {
      console.log(error);
    })

  }, []);

  useEffect(() => {
    return () => {
      unsubscribe.then(f => f()).catch(error => console.log(error));

    }
  }, []);


  const initChat = (user) => {

    setChatStarted(true)
    setChatUser(`${user.firstname} ${user.lastname}`)
    setUserUid(user.uid);

    console.log(user);

    dispatch(getRealtimeConversations({ uid_1: auth.uid, uid_2: user.uid }));

  }


  const submitMessage = (e) => {

    const msgObj = {
      user_uid_1: auth.uid,
      user_uid_2: userUid,
      message
    }


    if(message !== ""){
      dispatch(updateMessage(msgObj))
      .then(() => {
        setMessage('')
      });
    }
  }

//useEffect(() =>{
    //dispatch(Realtimeuser(auth.uid))
//}, [])

  return (
    <Layout>
    <section className="container">
    <div className="listOfUsers">
            {
                user.user.length > 0 ?
                user.user.map(user =>{
                    return (
                      <User 
                      onClick={initChat}
                      key={user.uid} 
                      user={user} 
                      />
                    );
                }) : null
            }
     
    </div>

    <div className="chatArea">
        <div className="chatHeader"> 
        {
            chatStarted ? chatUser : ''
        }
        </div>
        <div className="messageSections">

        {
                  chatStarted ? 
                  user.chat.map(con =>
                    <div style={{ textAlign: con.user_uid_1 == auth.uid ? 'right' : 'left' }}>
                    <p className="messageStyle" >{con.message}</p>
                  </div> )
                  : null
            }

        </div>
         
        {
              chatStarted ? 
              <div className="chatControls">
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write Message"
                />
                <button onClick={submitMessage}>Send</button>
            </div> : null
            }
     </div>  
</section>
</Layout>
  );
}

export default HomePage;