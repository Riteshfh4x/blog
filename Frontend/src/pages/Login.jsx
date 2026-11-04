import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function Login() {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [pwd, setPwd] = useState("")
    const [status, setStatus] = useState("login")

    async function sendData(e) {
        e.preventDefault()
        if (status == "login") {
            let d = await axios.post("http://localhost:8000/login", { pwd, username })

        } else {
            let d = await axios.post("http://localhost:8000/register", { name, pwd, username })
        }
    }
    return (
        <div>
            <form action="" onSubmit={sendData}>
                {
                    status == "login" ? "" : <div className="">
                        <label htmlFor="">Name</label>
                        <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Ritesh' />
                    </div>
                }
                <div className="">
                    <label htmlFor="">Username</label>
                    <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder='R@007' />
                </div>
                <div className="">
                    <label htmlFor="">Password</label>
                    <input onChange={(e) => setPwd(e.target.value)} type="text" placeholder='***' />
                </div>

                {
                    status == 'login' ?
                        <p>Don't have an account? <span onClick={() => setStatus("register")}>Register</span></p> :
                        <p>Already have an account? <span onClick={() => setStatus("login")}>Login</span></p>

                }

                {
                    status == "login" ? <button>Login</button> : <button>Register</button>
                }
            </form>
        </div>
    )
}

export default Login