import React from 'react'
import './SidebarSearch.scss'

import SearchIcon from '@material-ui/icons/Search'

import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import IconButton from '@material-ui/core/IconButton'

const SidebarSearch = () => {
	return (
		<div className="Sidebar-Search">
			<FormControl variant="outlined" fullWidth>
				<InputLabel htmlFor="outlined-adornment-search">search</InputLabel>
				<OutlinedInput
					id="outlined-adornment-search"
					endAdornment={
						<InputAdornment position="end">
							<IconButton aria-label="search-icon" edge="end">
								<SearchIcon />
							</IconButton>
						</InputAdornment>
					}
					labelWidth={70}
				/>
			</FormControl>
		</div>
	)
}

export default SidebarSearch
