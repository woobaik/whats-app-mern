import React from 'react'

import './ChatMessage.scss'

import Avatar from '@material-ui/core/Avatar'
import Moment from 'react-moment'

const ChatMessage = (props) => {
	return (
		<div className={`Chat-Message ${props.myMessage ? 'my-message' : ''}`}>
			<Avatar className="Chat-Message-avatar" />

			<div className="Chat-Message-info">
				<div className="Chat-Message-sender">Haramie</div>
				<div className="Chat-Message-body">
					<div className="Chat-Message-body-message">This is a message</div>
					<div className="Chat-Message-body-timestamp">
						<Moment fromNow>{Date.now()}</Moment>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ChatMessage
