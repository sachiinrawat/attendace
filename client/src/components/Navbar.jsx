import React from 'react'
import logo from '../assets/kcc-logo-new.webp'
import "../App.css"

export default function Navbar() {

    const toPortal = () => {
        window.location.href = "/portal";
        
    }

    return (
        <>

            <div>
                <div className="header">
                    <img src={logo} alt="" />
                    <h1>Attendance Portal</h1>
                    <div className="tagline">Effortless Attendance Tracking for Every Year</div>
                </div>
                <div className="login-section" id="loginSection">
                    <div className="login-container fade-in-up">
                        <div className="login-title">Select Academic Year</div>
                        <div className="year-selection-buttons">
                            <button className="year-select-btn" >1st Year</button>
                            <button className="year-select-btn">2nd Year</button>
                            <button className="year-select-btn" onClick={toPortal}>3rd Year</button>
                            <button className="year-select-btn">4th Year</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
