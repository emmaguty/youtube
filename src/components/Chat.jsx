import React from "react";
import Add from "../images/add_images.png";
import Cam from "../images/camera.png";
import More from "../images/more.png";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
    return (
        <div className="chat">
            <div className="chatInfo">
                <span>Karen</span>
                <div className="chatIcons">
                    <img src={Cam} alt="" />
                    <img src={Add} alt="" />
                    <img src={More} alt="" />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}  

export default Chat;