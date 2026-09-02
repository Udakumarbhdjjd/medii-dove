import { Link } from 'react-router-dom';
import './contact-front-page.css'
function ContactFrontPage() {
    return (
        <>
            <div className="ContactFrontPage">
                <div className="ContactFrontPage-wrapper">
                    <div className="ContactFrontPage-title">
                        <h4>We are here for your care.</h4>
                        <h2>Contact Us</h2>
                    </div>
                    <div className="ContactFrontPage-homeBTN">
                        <Link to="/home"><div className='ContactFrontPage-home'>Home</div></Link>
                        <Link to="/contact"> <div className='ContactFrontPage-contact'>Contact</div></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactFrontPage;