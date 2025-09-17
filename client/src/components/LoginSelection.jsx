import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'

export default function LoginSelection() {
    const navigate = useNavigate();
    return (
        <div className="login-section" id="loginSection">
            <div className="login-container fade-in-up">
                <div className="login-title">Select Academic Year</div>
                <div className="year-selection-buttons">
                    <button className="year-select-btn" >1st Year</button>
                    <button className="year-select-btn">2nd Year</button>
                    <button className="year-select-btn" onClick={() => navigate('/login')}>3rd Year</button>
                    <button className="year-select-btn">4th Year</button>
                </div>
            </div>
        </div>
    )
}
