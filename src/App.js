import React from 'react'

import './App.scss'

import SideBar from './sidebar/SideBar'
import Chat from './chat/Chat'

function App() {
	return (
		<div className="App">
			<SideBar />
			<Chat />
		</div>
	)
}

export default App
