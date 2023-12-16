import { useState, useEffect } from "react"
import Search from "./Search"

function Dashboard() {
    return (
        <div className="Dashboard h-100 d-flex flex-row">
            <Search />

            <div className="Summary w-100 flex-grow-1 d-flex flex-column">
                <div className="Basic d-flex flex-row justify-content-between mb-2 px-1"
                    style={{ backgroundColor: '#000' }}>
                    <div>
                        <div className="text-white" style={{ font: 'bold 1.4em Arial, sans-serif' }}>AAKASH MAURYA</div>
                        <div className="text-white" style={{ font: 'bold 1em Arial, sans-serif' }}>RLK210</div>
                    </div>
                    <div className="text-white" style={{ font: 'bold 1.8em Arial, sans-serif' }}>3,300</div>
                </div>

                <div className="Menu bg-primary p-1 mb-1">
                    MARGIN
                </div>
                <div className="Detail bg-primary flex-grow-1 p-2"></div>
            </div>
        </div>
    )
}

export default Dashboard