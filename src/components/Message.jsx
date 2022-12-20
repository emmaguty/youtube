import React from "react";

const Message = () => {
    return (
        <div className="message owner">
            <div className="messageInfo">
                <img src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <span>Just now</span>
            </div>
            <div className="messageContent">
                <p>Hello</p>
                <img src="https://images.pexels.com/photos/806835/pexels-photo-806835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
        </div>
    )
}  

export default Message;