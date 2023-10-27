import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom'

const Leftnav = ({ isExpanded }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/login");
    }
    return (
        /*<div className="container.d-flex fixed-left">
            <div className='position-absolute top-0 start-0'style={{ width: 200, marginTop:60}}>
     */
        <div className={isExpanded ? 'leftnav-expanded' : 'leftnav-collapsed'}> {isExpanded ? (
            <div className="fixed-top" style={{ width: 200, marginTop: 60 }}>
                <div className=" flex-column flex-shrink-0 p-3 text-bg-dark overflow-y-scroll" style={{ width: 200, height: 682, overflow: 'auto' }} >
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white" onMouseOver={e => e.target.style.backgroundColor = 'gray'} onMouseOut={e => e.target.style.backgroundColor =''}>
                                <i className="bi bi-house-door-fill" style={{ float: 'left' }}></i>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/Shorts" className="nav-link text-white" onMouseOver={e => e.target.style.backgroundColor = 'gray'} onMouseOut={e => e.target.style.backgroundColor =''}>
                                <i className="bi bi-robot" style={{ float: 'left' }}></i>
                                Shorts
                            </Link>
                        </li>
                        <li>
                            <Link to="/Subscription" className="nav-link text-white" onMouseOver={e => e.target.style.backgroundColor = 'gray'} onMouseOut={e => e.target.style.backgroundColor =''}>
                                <i className="bi bi-award" style={{ float: 'left' }}></i>
                                Subscription
                            </Link>
                        </li>
                        <hr style={{
                            color: 'white',
                            backgroundColor: '#000000',
                            height: .5,
                            borderColor: 'white'
                        }} />

                        <li>
                            <Link to="/Library" className="nav-link text-white" onMouseOver={e => e.target.style.backgroundColor = 'gray'} onMouseOut={e => e.target.style.backgroundColor =''}>
                                <i className="bi bi-collection-play" style={{ float: 'left' }}></i>
                                Library
                            </Link>
                        </li>
                        <li>
                            <Link to="/History" className="nav-link text-white" onMouseOver={e => e.target.style.backgroundColor = 'gray'} onMouseOut={e => e.target.style.backgroundColor =''}>
                                <i className="bi bi-clock-history" style={{ float: 'left' }}></i>
                                History
                            </Link>
                        </li>
                        <hr style={{
                            color: 'white',
                            backgroundColor: '#000000',
                            height: .5,
                            borderColor: 'white'
                        }} />



                        <div style={{ display: 'flex-column', alignItems: 'center' }}>
                            <p > Signup for comments</p>
                            {!localStorage.getItem('token') ? <form className="d-flex">
                                <Link className="btn btn-outline-primary mx-1" to="/login" role="button">Login</Link>
                                <Link className="btn btn-outline-primary mx-1" to="/signup" role="button">Signup</Link>
                            </form> : <button onClick={handleLogout} className='btn btn-primary'>Logout</button>}
                        </div>
                        <hr style={{
                            color: 'white',
                            backgroundColor: '#000000',
                            height: .5,
                            borderColor: 'white'
                        }} />


                        <h6 style={{ marginTop: 30, textAlign: 'left' }}>Explore</h6>

                        <li>
                            <Link to="/Trending" className="nav-link text-white" onMouseOver={e => e.target.style.backgroundColor = 'gray'} onMouseOut={e => e.target.style.backgroundColor =''}>
                                <i className="bi bi-fire" style={{ float: 'left' }}></i>
                                Trending
                            </Link>
                        </li>
                        <li>
                            <Link to="/Shoping" className="nav-link text-white" onMouseOver={e => e.target.style.backgroundColor = 'gray'} onMouseOut={e => e.target.style.backgroundColor =''}>
                                <i className="bi bi-bag-fill" style={{ float: 'left' }}></i>
                                Shoping
                            </Link>
                        </li>
                        <li>
                            <Link to="/Music" className="nav-link text-white" onMouseOver={e => e.target.style.backgroundColor = 'gray'} onMouseOut={e => e.target.style.backgroundColor =''}>
                                <i className="bi bi-music-note" style={{ float: 'left' }}></i>
                                Music
                            </Link>
                        </li>
                        <li>
                            <Link to="/Movie" className="nav-link text-white" onMouseOver={e => e.target.style.backgroundColor = 'gray'} onMouseOut={e => e.target.style.backgroundColor =''}>
                                <i className="bi bi-easel2" style={{ float: 'left' }}></i>
                                Movies
                            </Link>
                        </li>
                        <li>
                            <Link to="/Live" className="nav-link text-white" onMouseOver={e => e.target.style.backgroundColor = 'gray'} onMouseOut={e => e.target.style.backgroundColor =''}>
                                <i className="bi bi-broadcast" style={{ float: 'left' }}></i>
                                Live
                            </Link>
                        </li>
                        <li>
                            <Link to="/Gaming" className="nav-link text-white" onMouseOver={e => e.target.style.backgroundColor = 'gray'} onMouseOut={e => e.target.style.backgroundColor =''}>
                                <i className="bi bi-controller" style={{ float: 'left' }}></i>
                                Gaming
                            </Link>
                        </li>
                        <li>
                            <Link to="/News" className="nav-link text-white" onMouseOver={e => e.target.style.backgroundColor = 'gray'} onMouseOut={e => e.target.style.backgroundColor =''}>
                                <i className="bi bi-receipt" style={{ float: 'left' }}></i>
                                News
                            </Link>
                        </li>
                        <li>
                            <Link to="/Sports" className="nav-link text-white" onMouseOver={e => e.target.style.backgroundColor = 'gray'} onMouseOut={e => e.target.style.backgroundColor =''}>
                                <i className="bi bi-trophy" style={{ float: 'left' }}></i>
                                Sports
                            </Link>
                        </li>
                        <li>
                            <Link to="/Learning" className="nav-link text-white" onMouseOver={e => e.target.style.backgroundColor = 'gray'} onMouseOut={e => e.target.style.backgroundColor =''}>
                                <i className="bi bi-lightbulb" style={{ float: 'left' }}></i>
                                Learning
                            </Link>
                        </li>
                        <li>
                            <Link to="/Fashion" className="nav-link text-white" onMouseOver={e => e.target.style.backgroundColor = 'gray'} onMouseOut={e => e.target.style.backgroundColor =''}>
                                <i className="bi bi-emoji-sunglasses-fill" style={{ float: 'left' }}></i>
                                Fashion & Beauty
                            </Link>
                        </li>
                        <hr style={{
                            color: 'white',
                            backgroundColor: '#000000',
                            height: .5,
                            borderColor: 'white'
                        }} />


                        <div style={{ display: 'flex-column', alignItems: 'center' }}>
                            <button type="button" className="btn btn-outline-primary  top-5 end-0 me-4">Browse channels</button>
                        </div>
                        <hr style={{
                            color: 'white',
                            backgroundColor: '#000000',
                            height: .5,
                            borderColor: 'white'
                        }} />


                        <h6 style={{ marginTop: 30 }}>More from YouTube</h6>
                        <li>
                            <Link to="/" className="nav-link text-white" onMouseOver={e => e.target.style.backgroundColor = 'gray'} onMouseOut={e => e.target.style.backgroundColor =''}>
                                <svg className="bi pe-none me-2" width="16" height="16"><use href="#table"></use></svg>
                                Preamium App
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="nav-link text-white" onMouseOver={e => e.target.style.backgroundColor = 'gray'} onMouseOut={e => e.target.style.backgroundColor =''}>
                                <svg className="bi pe-none me-2" width="16" height="16"><use href="#grid"></use></svg>
                                 Music App
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="nav-link text-white" onMouseOver={e => e.target.style.backgroundColor = 'gray'} onMouseOut={e => e.target.style.backgroundColor =''}>
                                <svg className="bi pe-none me-2" width="16" height="16"><use href="#people-circle"></use></svg>
                                Kids App
                            </Link>
                        </li>
                        <hr style={{
                            color: 'white',
                            backgroundColor: '#000000',
                            height: .5,
                            borderColor: 'white'
                        }} />



                        <li>
                            <Link to="/" className="nav-link text-white" onMouseOver={e => e.target.style.backgroundColor = 'gray'} onMouseOut={e => e.target.style.backgroundColor =''}>
                                <i className="bi bi-flag" style={{ float: 'left' }}></i>
                                Report History
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="nav-link text-white" onMouseOver={e => e.target.style.backgroundColor = 'gray'} onMouseOut={e => e.target.style.backgroundColor =''}>
                                <i className="bi bi-question-circle" style={{ float: 'left' }}></i>
                                Help
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="nav-link text-white" onMouseOver={e => e.target.style.backgroundColor = 'gray'} onMouseOut={e => e.target.style.backgroundColor =''}>
                                <i className="bi bi-info-square" style={{ float: 'left' }}></i>
                                Send feedback
                            </Link>
                        </li>
                        <hr style={{
                            color: 'white',
                            backgroundColor: '#000000',
                            height: .5,
                            borderColor: 'white'
                        }} />
                        <p style={{ marginTop: 30, fontSize: 12 }}>This is an Striming app where the user can able to see vedios or media and if a user have an account in this app than he also able to upload vedios.</p>
                        <div className="dropdown">
                            <Link to="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="" alt="" width="32" height="32" className="rounded-circle me-2" />
                                <strong>more..</strong>
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                                <li><Link className="dropdown-item" to="/"><i className="bi bi-gear me-2"></i>Settings</Link></li>
                                <li><Link className="dropdown-item" to="/"><i className="bi bi-person"></i>Profile</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/"><i className="bi bi-box-arrow-right"></i>Sign out</Link></li>
                            </ul>
                        </div>
                    </ul>

                </div>
            </div>
        ) : (
            <div className="fixed-top" style={{ width:76, marginTop: 60 }}>
                <div className="d-flex flex-column flex-shrink-0 text-bg-dark" style={{ width:74 ,height: 682}}>
                   
                    <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                       
                       <div className="nav-item flex-column d-flex "onMouseOver={e => e.target.style.backgroundColor = 'gray'} onMouseOut={e => e.target.style.backgroundColor =''}> 
                            <Link to="/" className="nav-link text-white flex-column d-flex" aria-current="page" style={{ width:72}}>
                                    <i className="bi bi-house-door-fill" style={{ float:'left'}}><p style={{ fontSize: '12px' }}>Home</p></i>
                            </Link>
                        </div>
                       <div className="nav-item flex-column d-flex " onMouseOver={e => e.target.style.backgroundColor = 'gray'} onMouseOut={e => e.target.style.backgroundColor =''}>
                            <Link to="/Shorts" className="nav-link text-white flex-column d-flex" style={{ width:72}}>
                                <i className="bi bi-robot" style={{ float: 'left' }}><p style={{ fontSize: '12px' }}>Shorts</p></i>
                            </Link>
                       </div>
                       <div className="nav-item flex-column d-flex" style={{ width:72}} onMouseOver={e => e.target.style.backgroundColor = 'gray'} onMouseOut={e => e.target.style.backgroundColor =''}>
                            <Link to="/Subscription" className="nav-link text-white flex-column d-flex" style={{ width:72,paddingLeft:'5px',paddingRight:'5px'}}>
                                <i className="bi bi-award" style={{ float: 'left' }}><p style={{ fontSize: '12px' }}>Subscription</p></i>
                            </Link>
                       </div>
                       <div className="nav-item flex-column d-flex" onMouseOver={e => e.target.style.backgroundColor = 'gray'} onMouseOut={e => e.target.style.backgroundColor =''}>
                            <Link to="/Library" className="nav-link text-white flex-column d-flex" style={{ width:72}}>
                                <i className="bi bi-collection-play" style={{ float: 'left' }}><p style={{ fontSize: '12px' }}>Library</p></i>
                            </Link>
                       </div>
                    </ul>
                    
                </div>
            </div>
        )}
        </div>
    );
}
export default Leftnav;