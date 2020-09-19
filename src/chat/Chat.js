import React from 'react'

import './Chat.scss'

import ChatHeader from './chatHeader/ChatHeader'
import ChatBody from './chatBody/ChatBody'
import ChatFooter from './chatFooter/ChatFooter'

const Chat = () => {
	return (
		<div className="Chat">
			<ChatHeader />
			<ChatBody />
			<ChatFooter />
		</div>
	)
}

export default Chat
