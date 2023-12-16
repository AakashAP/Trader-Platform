import { useState } from "react"

import Header from "./Header.jsx"
import Chart from "./Chart.jsx"
import Action from "./Aciton.jsx"

function Trade() {
    const [Visible, toVisible] = useState(true)
    const ToggleAction = () => { toVisible(prev => !prev) }

    return (
        <div className="Trade h-100 d-flex flex-row">
            <div className="d-flex flex-column flex-grow-1">
                <Header onButton={ToggleAction} />
                <Chart />
            </div>            
            {Visible && <Action />}
        </div>
    )
}

export default Trade