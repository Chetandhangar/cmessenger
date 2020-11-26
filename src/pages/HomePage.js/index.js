import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import { Realtimeuser } from '../../redux/actions';
import './style.css';

const HomePage = (props) => {

const dispatch = useDispatch();
const auth = useSelector(state => state.auth)
const user = useSelector(state => state.user) 

useEffect(() =>{
    dispatch(Realtimeuser(auth.uid))
}, [])

  return (
    <Layout>
    <section className="container">
    <div className="listOfUsers">
            {
                user.user.length > 0 ?
                user.user.map(user =>{
                    return (
                        <div className="displayName">
                        <div className="displayPic">
                            <img src="https://instagram.fpnq13-1.fna.fbcdn.net/v/t51.2885-19/s150x150/102293229_602841493668536_6352726465050208883_n.jpg?_nc_ht=instagram.fpnq13-1.fna.fbcdn.net&_nc_ohc=YZ1eRRuDMrIAX98fH3x&tp=1&oh=c6cc357e3f334be5bcb0372520c8f7be&oe=5FE6AD64"
                             alt="Profile" />
                        </div>
                        <div style={{display: "flex", flex:1, justifyContent: "space-between", margin: '0 10px'}}>
                    <span style={{fontWeight: 500}}>{user.firsname} {user.lastname}</span>
                    <span>{user.isonline ? "online": "offline"}</span>
                        </div>
                    </div>
                    );
                }) : null
            }
     
                
    </div>
    <div className="chatArea">
        <div className="chatHeader"> Chetan Dhangar </div>
        <div className="messageSections">

            <div style={{ textAlign: 'left' }}>
                <p className="messageStyle" >Hello Chetan</p>
            </div>

        </div>
        <div className="chatControls">
            <textarea />
            <button>Send</button>
        </div>
    </div>
</section>
</Layout>
  );
}

export default HomePage;