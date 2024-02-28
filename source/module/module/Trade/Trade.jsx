import { useState } from 'react'

import Header from './module/Header.jsx'
import Candlestick from './module/Candlestick.jsx'
import Transaction from './module/Transaction.jsx'

function Trade() {
    const [Visible, SetVisible] = useState(true)
    const Toggle = () => { SetVisible(prev => !prev) }

    return (
        <div className="Trade w-100 bg-black d-flex flex-row">
            <div className="bg-black d-flex flex-column flex-grow-1">
                <Header onToggle={Toggle} />
                <Candlestick />
            </div>
            {Visible && <Transaction />}
        </div>
    )
}

export default Trade