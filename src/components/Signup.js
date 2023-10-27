import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = ({showAlert, isExpanded}) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/Account");
            showAlert("Account created Successfully", "success")
        }
        else {
            showAlert("Invalid creadential", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className={isExpanded ? 'leftnav-expanded' : 'leftnav-collapsed'}>
            <div className="fixed-top" style={{ marginTop: 60, backgroundColor: '#f0a9b0', marginLeft: isExpanded ? 200 : 78 }}>
                <div className=" flex-column flex-shrink-0 " style={{ height: 680, overflowY: 'auto', overflowX: 'hidden' }} >
                    <div className="overflow-auto position-absolute top-0 start-50 translate-middle-x " style={{ marginTop: 60 }}>
                        <h1 className='my-3'>Signup</h1>
                        <div className='border border-black rounded d-flex p-2' style={{ width: 404, backgroundColor: 'rgba(88,66,11, 0.5)', alignItems: 'center' }}>
                            <form onSubmit={handleSubmit} style={{ width: 400, alignItems: 'center' }}>

                                <div className="form-floating mb-3" >
                                    <input type="text" className="form-control" id="floatingname" placeholder="Name" name="name" onChange={onChange} aria-describedby="name" />
                                    <label htmlFor="floatingInput">Name</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" onChange={onChange} aria-describedby="emailHelp" />
                                    <label htmlFor="floatingInput">Email address</label>
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={onChange} minLength={5} required />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingCPassword" placeholder="CPassword" name="cpassword" onChange={onChange} minLength={5} required />
                                    <label htmlFor="floatingPassword">Conferm Password</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
       
        </div>
    )
}

export default Signup