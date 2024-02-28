import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

import Login from './module/module/Login.jsx'

import Drawer from './module/Drawer.jsx'
import Overview from './module/Overview.jsx'

function App() {
    const [isLogin, SetLogin] = useState(true)
    const [Page, SetPage] = useState('Dashboard')

    return (
        <div className="App bg-black vw-100 vh-100 d-flex">
            {isLogin === false && <Login />}
            {isLogin === true && (
                <>
                    <Drawer Page={Page} onUpdate={SetPage} />
                    <Overview Page={Page} />
                </>
            )}
        </div>
    )
}

export default App