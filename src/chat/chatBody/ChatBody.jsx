import React, { useEffect, useRef } from 'react'

import './ChatBody.scss'
import BackgroundImage from '../../assets/images/chatroom-bg.png'

import ChatMessage from './chatMessage/ChatMessage'
const ChatBody = () => {
	let messageEndRef = useRef(null)

	const scrollToBottom = () => {
		messageEndRef.current.scrollIntoView({ behavior: 'smooth' })
	}
	useEffect(scrollToBottom, [])
	return (
		<div
			className="ChatBody"
			style={{
				backgroundImage: `url('${BackgroundImage}')`,
			}}>
			<ChatMessage myMessage={true} />
			<ChatMessage />
			<ChatMessage /> <ChatMessage />
			<ChatMessage /> <ChatMessage />
			<ChatMessage /> <ChatMessage />
			<ChatMessage /> <ChatMessage />
			<ChatMessage /> <ChatMessage />
			<ChatMessage /> <ChatMessage />
			<ChatMessage /> <ChatMessage />
			<ChatMessage /> <ChatMessage />
			<ChatMessage /> <ChatMessage />
			<ChatMessage /> <ChatMessage />
			<ChatMessage />
			<div ref={messageEndRef}></div>
		</div>
	)
}

export default ChatBody
