import Search from './module/Search.jsx'

function Dashboard() {
    return (
        <div className="Dashboard d-flex flex-row flex-grow-1">
            <Search />

            {/* INFO */}
            <div className="Summary d-flex flex-column flex-grow-1">
                <div className="Basic d-flex flex-row justify-content-between mb-2 p-1"
                    style={{ backgroundColor: '#000' }}>
                    <div>
                        <div className="text-white" style={{ font: 'bold 1.4em Arial, sans-serif' }}>AAKASH MAURYA</div>
                        <div className="text-white" style={{ font: 'lighter 1em Arial, sans-serif' }}>RLK210</div>
                    </div>
                    <div className="text-white" style={{ font: 'lighter 1.5em Verdana, sans-serif' }}>3,000</div>
                </div>

                {/* FUNDS */}
                <div className="Menu bg-primary p-1 mb-1"></div>
            </div>

        </div>
    )
}

export default Dashboard