import { Link } from 'react-router-dom';
import Appointment from '../Appointment Button/Appointment';
import './ourTeam.css'
function OurTeam() {
    return (
        <>
            <div className="our-team">
                <div className="our-team-wrapper">
                    <h2>Our Team</h2>
                    <div className="our-team-container">
                        <h1>A Professional &<br /> Care Provider</h1>
                        <Link to="/contact"><Appointment name="MAKE APPOINTMENT" /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OurTeam;