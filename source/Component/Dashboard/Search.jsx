function ListItem() {
    return (
        <div className="List-Item bg-success d-flex flex-row p-1 mb-1">
            <div style={{ font: 'bold 1em Verdana, sans-serif' }}>INFY</div>
            <div className="px-2" style={{ font: '.7em Verdana, sans-serif' }}>NSE</div>
            <div className="flex-grow-1"></div>
            <div style={{ font: 'bold 1em Verdana, sans-serif' }}>123456789</div>
        </div>
    )
}

function Search() {
    return (
        <div className="Search d-flex flex-column me-1 p-1" style={{ backgroundColor: '#444' }}>
            <input type="text" className="Input border-0 text-white text-uppercase text-center p-2"
                style={{
                    outline: 0, width: '260px', backgroundColor: '#222',
                    font: 'bold lem Verdana, sans-serif'
                }} />

            <div className="bg-black my-2" style={{ height: '2px' }} />

            <div className="List flex-grow-1" style={{ backgroundColor: '#444' }}>
                <ListItem />
                <ListItem />
                <ListItem />
            </div>
        </div>
    )
}

export default Search