function Sidebar(props) {
    const Logo = () => {
        return <div className="Logo mb-1"
            style={{ width: '50px', height: '70px', backgroundColor: '#000' }} />
    }

    const Item = props => {
        return <div className="Item btn rounded-0 mb-1"
            style={{ width: '40px', height: '50px', backgroundColor: '#111' }}
            onClick={() => props.onButton(props.ID)} />
    }

    const Log = () => {
        return <div className="Log btn rounded-0 mt-auto mb-1"
            style={{ width: '40px', height: '50px', backgroundColor: '#111' }} />
    }

    return (
        <div className="Sidebar h-100 d-flex flex-column align-items-center"
            style={{ backgroundColor: '#444' }}>
            <Logo />
            <Item ID="Dashboard" onButton={props.onItem} />
            <Item ID="Trade" onButton={props.onItem} />
            <Log />
        </div>
    )
}

export default Sidebar