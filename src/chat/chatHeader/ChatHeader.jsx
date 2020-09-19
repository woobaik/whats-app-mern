import React from 'react'

import './ChatHeader.scss'

import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const ChatHeader = () => {
	return (
		<div className="Chat-Header">
			{/* Chat Header Left contain AVATARM, ROOMNAME, Last seen */}
			<div className="Chat-Header-left">
				<Avatar
					alt="Remy Sharp"
					src="/static/images/avatar/1.jpg"
					className="Chat-Header-left-avatar"
				/>
				<div className="Chat-Header-left-info">
					<h3>Room name</h3>
					<h6>Last seen at..</h6>
				</div>
			</div>

			<div className="Chat-Header-right">
				<IconButton>
					<SearchIcon />
				</IconButton>
				<IconButton>
					<AttachFileIcon />
				</IconButton>
				<IconButton>
					<MoreVertIcon />
				</IconButton>
			</div>
		</div>
	)
}

export default ChatHeader
