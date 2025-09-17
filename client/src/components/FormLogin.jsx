import React from 'react'
import { Link } from 'react-router-dom'

export default function FormLogin() {
    return (
        <div className="login-section" id="loginSection">
            <div className="login-container fade-in-up">
                <div className="login-title">Select Status</div>
                <div className="year-selection-buttons">
                    <Link to={'/student-login'}>
                        <button className="year-select-btn">Student</button>
                    </Link>
                    <Link to={'/teacher-login'}>
                        <button className="year-select-btn">Teacher</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
