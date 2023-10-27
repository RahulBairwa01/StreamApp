import React from 'react'
import { Link } from "react-router-dom";

const Account = ({isExpanded}) => {

    return (
        <div className={isExpanded ? 'leftnav-expanded' : 'leftnav-collapsed'}>
            <div className="fixed-top" style={{ marginTop: 60, backgroundColor: '#da7855a8', marginLeft: isExpanded ? 200 : 78 }}>
                <div className=" flex-column flex-shrink-0" style={{ height: 680, overflowY: 'auto', overflowX: 'hidden' }} >
                    <div className="rounded " >
                        <ul className="nav nav-pills flex-column mb-auto">
                            <li className="nav-item rounded bg-dark m-2">
                                <Link to="/UploadMedia" className="nav-link text-white" onMouseOver={e => e.target.style.backgroundColor = 'gray'} onMouseOut={e => e.target.style.backgroundColor = ''}>
                                    UploadMedia
                                </Link>
                            </li>
                            <li className="nav-item rounded bg-dark m-2">
                                <Link to="/UpdateAccount" className="nav-link text-white" onMouseOver={e => e.target.style.backgroundColor = 'gray'} onMouseOut={e => e.target.style.backgroundColor = ''}>
                                    UpdateAccount
                                </Link>
                            </li>
                            <li  className="nav-item rounded bg-dark m-2"> 
                                <Link to="/ManageMedia" className="nav-link text-white " onMouseOver={e => e.target.style.backgroundColor = 'gray'} onMouseOut={e => e.target.style.backgroundColor = ''}>
                                    Manage Media                             
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
       
        </div>
    );
};
export default Account;