function Sidebar(props) {
    const Logo = () => {
        return <div className="Logo mb-1"
            style={{ width: '50px', height: '60px', backgroundColor: '#000' }} />
    }

    const Button = props => {
        return <div className="View btn rounded-0 mb-1"
            style={{ width: '40px', height: '45px', backgroundColor: props.ID === props.Page ? '#666' : '#111' }}
            onClick={() => props.onUpdate(props.ID)} />
    }

    const Log = () => {
        return <div className="Log btn rounded-0 mt-auto mb-1"
            style={{ width: '40px', height: '45px', backgroundColor: '#111' }} />
    }

    return (
        <div className="Sidebar h-100 d-flex flex-column align-items-center"
            style={{ backgroundColor: '#444' }}>
            <Logo />
            <Button ID="Dashboard" Page={props.Page} onUpdate={props.onUpdate} />
            <Button ID="Trade" Page={props.Page} onUpdate={props.onUpdate} />
            <Log />
        </div>
    )
}

export default Sidebar