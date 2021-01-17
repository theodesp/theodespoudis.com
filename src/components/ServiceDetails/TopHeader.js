import React from 'react'
import { Link } from 'gatsby'
import logo from '../App/assets/images/logo.png'

const TopHeader = () => {
    return (
        <div className="top-header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="logo">
                            <Link to="/">
                                <img src={logo} alt="Logo" />
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <ul>
                            <li>
                                <Link to="#service-details">
                                    Service Details
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader