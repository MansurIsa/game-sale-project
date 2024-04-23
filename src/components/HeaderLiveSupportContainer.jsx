import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import { RiUserStarFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const HeaderLiveSupportContainer = () => {
    const [messages, setMessages] = useState([]);
    const [showChat, setShowChat] = useState(false);

    const handleMessageSend = (newMessage) => {
        setMessages([...messages, newMessage]);
        // Yeni mesajı serverə göndərə bilərsiniz
    };

    const toggleChatWindow = () => {
        setShowChat(!showChat);
    };

    const handleCloseChat = () => {
        setShowChat(false);
    };

    return (
        <div className='header_live_support_container'>
            <button onClick={toggleChatWindow} className='live_support_btn'><RiUserStarFill /> 7/24 Canlı Destek</button>
            <div className={`header_live_support ${showChat ? 'show' : ''}`}>
                <IoClose onClick={handleCloseChat} className="close_icon" />
                <h3>Canlı Dəstək</h3>
                <ChatWindow messages={messages} onMessageSend={handleMessageSend} />
            </div>
        </div>
    )
}

export default HeaderLiveSupportContainer;
