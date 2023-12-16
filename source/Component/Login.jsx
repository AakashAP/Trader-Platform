import { useState } from "react";

function Login() {
    const [User, toUser] = useState('')
    const [Pass, toPass] = useState('')
    const [Pin, toPin] = useState('')
    const [ENC, toENC] = useState('')

    return (
        <div className="Login d-flex flex-grow-1 align-items-center justify-content-center"
            style={{ backgroundColor: '#111' }}>
            <div className="rounded-3 p-5" style={{ backgroundColor: '#444' }}>
                <div className="d-flex">
                    <div className="flex-grow-1 rounded-3 p-2" style={{ backgroundColor: '#666' }}></div>

                    <div className="d-flex flex-column align-items-end p-2" style={{ height: '500px', backgroundColor: '#444' }}>
                        <div className="flex-grow-1 p-2"></div>

                        <div className="mb-2">
                            <div className="text-white fw-bold px-2 mb-1"
                                style={{ backgroundColor: '#444', font: 'bold .9em Verdana, sans-serif' }}>USERNAME</div>
                            <input type="text" className="border-0 text-white text-uppercase rounded-2 p-2"
                                style={{
                                    outline: 0, width: '300px', backgroundColor: '#222',
                                    font: '1em Verdana, sans-serif'
                                }} />
                        </div>

                        <div className="mb-2">
                            <div className="text-white fw-bold px-2 mb-1"
                                style={{ backgroundColor: '#444', font: 'bold .9em Verdana, sans-serif' }}>PASSWORD</div>
                            <input type="password" className="border-0 text-white rounded-2 p-2"
                                style={{
                                    outline: 0, width: '300px', backgroundColor: '#222',
                                    font: '1em Verdana, sans-serif'
                                }} />
                        </div>

                        <input type="text" className="border-0 text-white text-center rounded-2 p-2"
                            style={{
                                outline: 0, width: '150px', backgroundColor: '#222',
                                font: 'bold 1em Verdana, sans-serif'
                            }} />
                    </div>
                </div>

                <div className="d-flex flex-row py-2 pe-2" style={{ backgroundColor: '#444' }}>
                    <input type="text" className="border-0 text-white rounded-2 p-2 me-2"
                        style={{
                            outline: 0, width: '800px', backgroundColor: '#222',
                            font: '1em Verdana, sans-serif'
                        }} />

                    <div className="btn bg-success rounded-2"
                        style={{ width: '150px', font: 'bold 1.25em Verdana, sans-serif', lineHeight: .9 }}>LOGIN</div>
                </div>
            </div>
        </div>
    )
}

export default Login;