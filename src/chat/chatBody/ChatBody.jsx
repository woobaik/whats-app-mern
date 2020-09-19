import React from 'react'

import './ChatBody.scss'
import BackgroundImage from '../../assets/images/chatroom-bg.png'

import ChatMessage from './chatMessage/ChatMessage'
const ChatBody = () => {
	return (
		<div
			className="ChatBody"
			style={{
				backgroundImage: `url('${BackgroundImage}')`,
			}}>
			<ChatMessage />
			<ChatMessage />
			<ChatMessage />
		</div>
	)
}

export default ChatBody
