import { useNavigate } from "react-router-dom";
import "../App.css"
import React from 'react'

export default function TeacherLogin() {

    const navigate = useNavigate()

    const toRedirect = (e) => {
        e.preventDefault();
        navigate("/teacher-portal");
    }

    return (
        <div className="teacher-login-section">
            <div className="teacher-login-container">
                <div className="teacher-login-title">Teacher Login</div>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Teacher Name</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Phone No.</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit" className="teacher-login-btn" onClick={toRedirect}>Login</button>
                </form>
            </div>
        </div>
    )
}
