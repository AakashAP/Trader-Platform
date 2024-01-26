function ListItem(props) {
    return (
        <div className="List-Item bg-success d-flex flex-row p-1 mb-1">
            <div style={{ font: 'bold 1em Verdana, sans-serif' }}>{props.Data[0]}</div>
            <div className="mt-auto px-2" style={{ font: '.7em Verdana, sans-serif' }}>{props.Data[1]}</div>
            <div className="flex-grow-1"></div>
            <div style={{ font: 'bold 1em Verdana, sans-serif' }}>{props.Data[2]}</div>
        </div>
    )
}

function Search() {
    return (
        <div className="Search d-flex flex-column me-1 p-1" style={{ backgroundColor: '#444' }}>
            <input type="text" className="Input border-0 text-white text-uppercase text-center p-2"
                style={{
                    outline: 0, width: '300px', backgroundColor: '#222',
                    font: 'bold lem Verdana, sans-serif'
                }} />

            <div className="bg-black my-2" style={{ height: '2px' }} />

            <div className="List flex-grow-1" style={{ backgroundColor: '#444' }}>
                <ListItem Data={["INFY", "NSE", "120"]}/>
                <ListItem Data={["BHEL", "NSE", "120"]}/>
                <ListItem Data={["AAPL", "NSE", "120"]}/>
            </div>
        </div>
    )
}

export default Search