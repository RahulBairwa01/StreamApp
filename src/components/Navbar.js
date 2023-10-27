import React from 'react'
import { Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from './logos/20.png'

const Navbar = ({ toggleLeftNav }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/login");
    }
    const navExpend=() =>{
        navigate("/Account");
    }
    const LeftNavExpanded=()=>{
        toggleLeftNav();
    }
    return (
        <div className="Nav">
            <nav className="navbar bg-body-tertiary fixed-top">
                <div className="container-fluid justify-content-start">

                    <button className="navbar-toggler me-4" type="button"  onClick={LeftNavExpanded}>
                        <span className="navbar-toggler-icon"></span>
                    </button>                  
                    <div className=''>
                    <Link className="navbar-brand " justify-content=" flex-start"  to="/">
                        <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                        StreamApp
                    </Link>
                    </div>

                    <div className='position-absolute top-5 start-50 translate-middle-x'>
                    <form className="d-flex " role="search">
                        <input className="form-control  rounded-start-pill" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success rounded-end-circle me-3" type="submit"><i className="bi bi-search"></i></button>
                        <button className="btn btn-outline-success rounded-circle" type="submit"><i className="bi bi-mic-fill"></i></button>
                    </form>
                    </div>

                    <div  className=" position-absolute top-5 end-0 me-4" style={{ display: 'flex-column', alignItems: 'center' }}>
                        {!localStorage.getItem('token') ? <form className="d-flex">
                            <Link className="btn btn-outline-primary mx-1" to="/login" role="button">Login</Link>
                            <Link className="btn btn-outline-primary mx-1" to="/signup" role="button">Signup</Link>
                        </form> :<div className='d-flex'> 
                                   <div aria-expanded="false" >
                                       <img src="" alt="" width="32" height="32" className="rounded-circle me-2" onClick={navExpend} />
                                   </div>
                                   <button onClick={handleLogout} className='btn btn-primary'>Logout</button>
                                </div>
                               }
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar;