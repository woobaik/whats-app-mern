import React from 'react'

import './SideBar.scss'
import SideBarHeader from './sidebarHeader/SideBarHeader'
import SidebarSearch from './sidebarSearch/SidebarSearch'
import SidebarList from './sidebarList/SidebarList'

const SideBar = () => {
	return (
		<div className="Side-Bar">
			<SideBarHeader />
			<SidebarSearch />
			<SidebarList />
		</div>
	)
}

export default SideBar
