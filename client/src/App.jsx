import React from 'react'
import Navbar from './components/Navbar'
import LoginSelection from './components/LoginSelection'
import { Routes, Route } from "react-router-dom"
import FormLogin from './components/FormLogin'
import StudentLogin from './components/StudentLogin'
import TeacherLogin from './components/TeacherLogin'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<FormLogin />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
      </Routes>
      {/* <LoginSelection /> */}
    </>
  )
}
