import React, { useState } from 'react'

const MessageInput = ({ onMessageSend }) => {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleMessageSend = () => {
        onMessageSend(inputText);
        setInputText('');
    };
    return (
        <div className="message_input">
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Mesajınızı daxil edin..."
            />
            <button onClick={handleMessageSend}>Göndər</button>
        </div>
    )
}

export default MessageInput