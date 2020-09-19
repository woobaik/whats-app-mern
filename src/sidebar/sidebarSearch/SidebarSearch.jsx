import React from 'react'
import './SidebarSearch.scss'
import Grid from '@material-ui/core/Grid'
import SearchIcon from '@material-ui/icons/Search'
import TextField from '@material-ui/core/TextField'

const SidebarSearch = () => {
	return (
		<div className="Sidebar-Search">
			<Grid container spacing={1} alignItems="flex-end">
				<Grid item>
					<SearchIcon />
				</Grid>
				<Grid item>
					<TextField id="input-with-icon-grid" label="Search" />
				</Grid>
			</Grid>
		</div>
	)
}

export default SidebarSearch
