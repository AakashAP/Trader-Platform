import Dashboard from "./Dashboard/Dashboard.jsx"
import Trade from "./Trade/Trade.jsx"

function Content(props) {
    return (
        <div className="Content flex-grow-1 p-1">
            {props.newPage === 'Dashboard' && <Dashboard />}
            {props.newPage === 'Trade' && <Trade />}
        </div>
    )
}

export default Content