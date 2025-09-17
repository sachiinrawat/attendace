import logo from '../assets/kcc-logo-new.webp'
import "../App.css"

export default function Navbar() {

    const toPortal = () => {
        alert('hello')
    }

    return (
        <>
            <div>
                <div className="header">
                    <img src={logo} alt="" />
                    <h1>Attendance Portal</h1>
                    <div className="tagline">Effortless Attendance Tracking for Every Year</div>
                </div>
               
            </div>

        </>
    )
}
