import React from 'react'
import MessageList from './MessageList'
import MessageInput from './MessageInput'

const ChatWindow = ({ messages, onMessageSend }) => {
    return (
        <div className="chat_window">
            <MessageList messages={messages} />
            <MessageInput onMessageSend={onMessageSend} />
        </div>
    )
}

export default ChatWindow