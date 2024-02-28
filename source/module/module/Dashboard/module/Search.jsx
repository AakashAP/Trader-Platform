function Search() {
    const Item = props => {
        return (
            <div className="List-Item d-flex flex-row p-1 mb-1" style={{ backgroundColor: '#666' }}>
                <div style={{ font: 'bold .85em Arial, sans-serif' }}>{props.Data[0]}</div>
                <div className="mt-auto px-2" style={{ font: '.6em Verdana, sans-serif' }}>{props.Data[1]}</div>
                <div className="flex-grow-1"></div>
                <div style={{ font: 'bold .85em Verdana, sans-serif' }}>{props.Data[2]}</div>
            </div>
        )
    }

    return (
        <div className="Search me-2" style={{ padding: '7px', backgroundColor: '#444' }}>
            {/* Search Box */}
            <input type="text" className="Input border-0 text-white text-uppercase text-center p-2"
                style={{
                    outline: 0, width: '280px', backgroundColor: '#222',
                    font: 'light 0.9em Verdana, sans-serif'
                }} />

            <div className="bg-black my-2" style={{ height: '2px' }} />

            {/* List View */}
            <div className="List">
                {/* <Item Data={["INFY", "NSE", "120"]} /> */}
            </div>
        </div>
    )
}

export default Search