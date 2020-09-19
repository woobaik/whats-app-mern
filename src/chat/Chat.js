import React from 'react'

import './Chat.scss'

import ChatHeader from './chatHeader/ChatHeader'
import ChatBody from './chatBody/ChatBody'

const Chat = () => {
	return (
		<div className="Chat">
			<ChatHeader />
			<ChatBody />
		</div>
	)
}

export default Chat
