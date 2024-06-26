import React from 'react'

const MessageList = ({ messages }) => {
    return (
        <div className="message_list">
            {messages.map((message, index) => (
                <div key={index} className="message">
                    {message}
                </div>
            ))}
        </div>
    )
}

export default MessageList