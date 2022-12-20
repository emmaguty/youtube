import React from "react";
// import React, { useEffect } from "react";
// import { onSnapshot } from "firebase/firestore";
// import { db } from "../firebase";
// import { useContext } from "react";

const Chats = () => {

    // const [chats,setChats] = useState([]) 

    // const {currentUser} = useContext(AuthContext);

    // useEffect(()=>{
    //     const unsub = onSnapshot(doc(db, "userChat", currentUser.uid), (doc) => {
    //         setChats(doc.data());
    //     });

    //     return ()=>{
    //         unsub();
    //     }
    // },[currentUser.uid]);

    // console.log(chats);
    return (
        <div className="chats">
            <div className="userChat">
                <img src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <div className="userChatInfo">
                    <span>Emmanuel</span>
                    <p>Hola mundo</p>
                </div>    
            </div>
            <div className="userChat">
                <img src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <div className="userChatInfo">
                    <span>Emmanuel</span>
                    <p>Hola mundo</p>
                </div>    
            </div>
            <div className="userChat">
                <img src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <div className="userChatInfo">
                    <span>Emmanuel</span>
                    <p>Hola mundo</p>
                </div>    
            </div>
        </div>
    )
}  

export default Chats;