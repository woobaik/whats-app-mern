import React from 'react'
import './SidebarListItem.scss'

import List from '@material-ui/core/List'
import Avatar from '@material-ui/core/Avatar'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import ImageIcon from '@material-ui/icons/Image'

const SidebarListItem = () => {
	return (
		<div className="Sidebar-List-Item">
			<List className={''}>
				<ListItem button>
					<ListItemAvatar>
						<Avatar>First</Avatar>
					</ListItemAvatar>
					<ListItemText primary="Photos" secondary="Jan 9, 2014" />
				</ListItem>
				<ListItem button>
					<ListItemAvatar>
						<Avatar>N</Avatar>
					</ListItemAvatar>
					<ListItemText primary="Work" secondary="Jan 7, 2014" />
				</ListItem>
				<ListItem button>
					<ListItemAvatar>
						<Avatar>OP</Avatar>
					</ListItemAvatar>
					<ListItemText primary="Vacation" secondary="July 20, 2014" />
				</ListItem>
			</List>
		</div>
	)
}

export default SidebarListItem
