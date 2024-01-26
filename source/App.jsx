import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

import Login from './Component/Login.jsx'
import Sidebar from './Component/Sidebar.jsx'
import Content from './Component/Content.jsx'

function App() {
	// const [isLogin, toLogin] = useState(false)
	const [Page, setPage] = useState('Dashboard')

	const toPage = ID => setPage(ID)
	// useEffect(() => {}, [])

	return (
		<div className="App bg-black vw-100 vh-100 d-flex flex-row">
			{/* <Login /> */}
			{/* {Login === true && ( */}
				<>
					<Sidebar Page={Page} onUpdate={toPage} />
					<Content CurrentPage={Page} />
				</>
			{/* )} */}
		</div>
	)
}

export default App
