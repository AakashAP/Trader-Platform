function Drawer(props) {
    const Button = props => {
        return (
            <div className="View btn rounded-1 mb-0" onClick={() => props.onUpdate(props.ID)}
                style={{
                    width: '35px', height: '40px', margin: '5px',
                    backgroundColor: props.ID === props.Page ? '#080' : '#111'
                }} />
        )
    }

    return (
        <div className="Drawer h-100 d-flex flex-column align-items-center"
            style={{ backgroundColor: '#444' }}>
            {/* LOGO */}
            <div className="Logo w-100 mb-0" style={{ height: '60px', backgroundColor: '#000' }} />

            {/* VIEWS */}
            <Button ID="Dashboard" Page={props.Page} onUpdate={props.onUpdate} />
            <Button ID="Trade" Page={props.Page} onUpdate={props.onUpdate} />

            {/* LOG BUTTON */}
            <div className="Log btn rounded-1 mt-auto"
                style={{ width: '35px', height: '40px', margin: '5px', backgroundColor: '#111' }} />
        </div>
    )
}

export default Drawer