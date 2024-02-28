function Login() {
    const Input = props => {
        return (
            <input type={props.type} className={props.class}
            style={{
                outline: 0, width: props.width, backgroundColor: '#111',
                font: '1em Verdana, sans-serif'
            }} />
        )
    }

    return (
        <div className="Login h-100 d-flex align-items-center justify-content-center flex-grow-1"
        style={{ backgroundColor: '#111' }}>
            <div className="rounded-4 p-4" style={{ backgroundColor: '#333' }}>
                <div className="d-flex">
                    {/* LOGO */}
                    <div className="rounded-3 p-5 flex-grow-1" style={{ backgroundColor: '#555' }}></div>

                    {/* USER/PASS/PIN */}
                    <div className="ms-3" style={{ backgroundColor: '#333' }}>
                        {/* FULL NAME */}
                        <div style={{ height: '200px', backgroundColor: '#333' }}></div>

                        <div className="d-flex flex-column align-items-end">
                            {/* USER */}
                            <div className="text-white fw-bold px-2 mb-1"
                            style={{ backgroundColor: '#333', font: 'bold 1em Verdana, sans-serif' }}>USERNAME</div>
                            
                            <Input type="text" width="300px" class="border-0 text-white text-uppercase p-2" />
                            <div className="m-2" />

                            {/* PASS */}
                            <div className="text-white fw-bold px-2 mb-1"
                            style={{ backgroundColor: '#333', font: 'bold 1em Verdana, sans-serif' }}>PASSWORD</div>
                            
                            <Input type="password" width="300px" class="border-0 text-white p-2" />
                            <div className="m-2" />

                            {/* PIN */}
                            <Input type="text" width="150px" class="border-0 text-white text-center p-2" />
                        </div>
                    </div>
                </div>

                {/* TOKEN */}
                <div className="d-flex mt-3">
                    <Input type="text" width="800px" class="border-0 text-white p-2" />
                    
                    <div className="btn bg-success rounded-0"
                    style={{ width: '150px', font: 'bold 1.2em Verdana, sans-serif', lineweight: .8 }}>LOGIN</div>
                </div>
            </div>
        </div>
    )
}

export default Login