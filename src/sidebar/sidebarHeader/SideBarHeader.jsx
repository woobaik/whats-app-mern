import React from 'react'
import './SideBarHeader.scss'

import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import MessageIcon from '@material-ui/icons/Message'

const SideBarHeader = () => {
	return (
		<div className="Side-Bar-Header">
			<Avatar
				alt="USER PROFILE"
				src="https://randomuser.me/api/portraits/men/18.jpg"
				className="large-avatar"
			/>

			<div className="side-bar-header-right">
				<IconButton>
					<DonutLargeIcon />
				</IconButton>
				<IconButton>
					<MessageIcon />
				</IconButton>
				<IconButton>
					<MoreVertIcon />
				</IconButton>
			</div>
		</div>
	)
}

export default SideBarHeader
