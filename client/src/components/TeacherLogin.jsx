import { useNavigate } from "react-router-dom";
import "../App.css";
import "../multi-select.css";
import React, { useState } from 'react';

const SECTIONS = ["A", "B", "C", "D"];
const SUBJECTS = ["Maths", "Physics", "Chemistry", "Biology", "English", "Computer Science"];

export default function TeacherLogin() {
    const navigate = useNavigate();
    const [selectedSections, setSelectedSections] = useState([]);
    const [selectedSubjects, setSelectedSubjects] = useState([]);

    const handleSectionChange = (e) => {
        const { value, checked } = e.target;
        setSelectedSections(prev =>
            checked ? [...prev, value] : prev.filter(s => s !== value)
        );
    };

    const handleSubjectChange = (e) => {
        const { value, checked } = e.target;
        setSelectedSubjects(prev =>
            checked ? [...prev, value] : prev.filter(s => s !== value)
        );
    };

    const toRedirect = (e) => {
        e.preventDefault();
        // You can pass selectedSections and selectedSubjects to the portal if needed
        navigate("/teacher-portal");
    };

    return (
        <div className="teacher-login-section">
            <div className="teacher-login-container">
                <div className="teacher-login-title">Teacher Login</div>
                <form onSubmit={toRedirect}>
                    <div className="form-group">
                        <label htmlFor="username">Teacher Name</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone No.</label>
                        <input type="text" id="phone" name="phone" required />
                    </div>
                    <div className="form-group">
                        <label>Select Sections</label>
                        <div className="multi-select-group">
                            {SECTIONS.map(section => (
                                <label key={section} className="multi-select-option">
                                    <input
                                        type="checkbox"
                                        value={section}
                                        checked={selectedSections.includes(section)}
                                        onChange={handleSectionChange}
                                    />
                                    {section}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Select Subjects</label>
                        <div className="multi-select-group">
                            {SUBJECTS.map(subject => (
                                <label key={subject} className="multi-select-option">
                                    <input
                                        type="checkbox"
                                        value={subject}
                                        checked={selectedSubjects.includes(subject)}
                                        onChange={handleSubjectChange}
                                    />
                                    {subject}
                                </label>
                            ))}
                        </div>
                    </div>
                    <button type="submit" className="teacher-login-btn">Enter Portal</button>
                </form>
            </div>
        </div>
    );
}
