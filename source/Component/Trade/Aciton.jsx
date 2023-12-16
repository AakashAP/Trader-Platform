function Action() {
    return (
        <div className="Action bg-secondary p-1 px-2 ms-1" style={{  }}>
            <div className="">
                <div className="text-black" style={{ font: '1.7em Arial, sans-serif' }}>25400</div>

                <div className="d-flex flex-row p-0">
                    <div className="text-black me-1" style={{ font: 'bold 1em Arial, sans-serif' }}>5.2</div>
                    <div className="text-black ms-1" style={{ font: 'bold 1em Arial, sans-serif' }}>0.2%</div>
                </div>
            </div>

            <div className="bg-black my-2" style={{ height: '2px' }} />

            <input type="text" className="border-0 text-white text-end p-1 mb-1"
                style={{
                    outline: 0, width: '250px', backgroundColor: '#333',
                    font: 'bold lem Verdana, sans-serif'
                }} />

            <div className="w-100 d-flex flex-row mb-1">
                <div className="bg-success " style={{ width: '20px' }} />
                <div className="flex-grow-1 d-flex flex-row" style={{ padding: '2px' }}>
                    <div className="align-self-end px-1" style={{ font: 'bold .8em Arial, sans-serif' }}>TRIGGER</div>
                    <div className="flex-grow-1"></div>
                    <div className="align-self-end" style={{ font: 'bold 1.5em Arial, sans-serif' }}>0000</div>
                </div>
            </div>

            <div className="w-100 d-flex flex-row mb-1">
                <div className="bg-success " style={{ width: '20px' }} />
                <div className="flex-grow-1 d-flex flex-row" style={{ padding: '2px' }}>
                    <div className="align-self-end px-1" style={{ font: 'bold .8em Arial, sans-serif' }}>PRICE</div>
                    <div className="flex-grow-1"></div>
                    <div className="align-self-end" style={{ font: 'bold 1.5em Arial, sans-serif' }}>0000</div>
                </div>
            </div>

            <div className="w-100 d-flex flex-row mb-1">
                <div className="bg-success " style={{ width: '20px' }} />
                <div className="flex-grow-1 d-flex flex-row" style={{ padding: '2px' }}>
                    <div className="align-self-end px-1" style={{ font: 'bold .8em Arial, sans-serif' }}>STOPLOSS</div>
                    <div className="flex-grow-1"></div>
                    <div className="align-self-end" style={{ font: 'bold 1.5em Arial, sans-serif' }}>0000</div>
                </div>
            </div>

            <div className="w-100 d-flex flex-row mb-1">
                <div className="bg-success " style={{ width: '20px' }} />
                <div className="flex-grow-1 d-flex flex-row" style={{ padding: '2px' }}>
                    <div className="align-self-end px-1" style={{ font: 'bold .8em Arial, sans-serif' }}>TARGET</div>
                    <div className="flex-grow-1"></div>
                    <div className="align-self-end" style={{ font: 'bold 1.5em Arial, sans-serif' }}>0000</div>
                </div>
            </div>

            <div className="bg-black my-2" style={{ height: '2px' }} />

            <div className="mb-1">
                <div className="mb-1" style={{ font: '1em Aral, sans-serif' }}>20000</div>

                <div className="d-flex flex-row">
                    <div className="border-top border-3 border-danger w-100 me-1">
                        <div className="px-1" style={{ font: '.8em Arial, sans-serif' }}>LTP - Stoploss</div>
                        <div className="px-1" style={{ font: '.8em Arial, sans-serif' }}>(LTP -Stoploss)%</div>
                    </div>
                    <div className="border-top border-3 border-success w-100 ms-1">
                        <div className="px-1" style={{ font: '.8em Arial, sans-serif' }}>LTP - Target</div>
                        <div className="px-1" style={{ font: '.8em Arial, sans-serif' }}>(LTP -Target)%</div>
                    </div>
                </div>
            </div>

            <div className="bg-black my-2" style={{ height: '2px' }} />

            <div className="d-flex flex-row mb-1">
                <div className="btn w-100 bg-success rounded-0 me-1" style={{ font: 'bold 1.2em Arial, sans-serif', lineHeight: 1 }}>BUY</div>
                <div className="btn w-100 bg-danger rounded-0 ms-1" style={{ font: 'bold 1.2em Arial, sans-serif', lineHeight: 1 }}>SELL</div>
            </div>

            <div className="bg-black my-2" style={{ height: '2px' }} />

            <div className="mb-2">
                <div className="" style={{ font: 'bold 1.1em Arial, sans-serif' }}>POSITION</div>
                <div className="" style={{ font: '.9em Arial, sans-serif' }}>
                    <div className="d-flex flex-row justify-content-between">
                        <div>Avg Price</div>
                        <div>P&L</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                        <div>Stoploss</div>
                        <div>LTP</div>
                        <div>Target</div>
                    </div>
                </div>
            </div>

            <div className="bg-black my-2" style={{ height: '2px' }} />

            <div className="mb-1">
                <div className="mb-1" style={{ font: 'bold 1.1em Arial, sans-serif' }}>ORDERS</div>

                <div className="bg-success d-flex flex-column p-2">
                    <div className="bg-primary p-2 px-5 mb-1"></div>
                    <div className="bg-primary p-2 px-5 mb-1"></div>
                    <div className="bg-primary p-2 px-5"></div>
                </div>
            </div>
        </div>
    )
}

export default Action