import Dashboard from './module/Dashboard/Dashboard.jsx'
import Trade from './module/Trade/Trade.jsx'

function Overview(props) {
    return (
        <div className="Overview bg-black d-flex flex-grow-1 ms-2">
            {props.Page === 'Dashboard' && <Dashboard />}
            {props.Page === 'Trade' && <Trade />}
        </div>
    )
}

export default Overview