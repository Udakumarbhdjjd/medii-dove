
import './info-strip.css'
function InfoStrip() {
    return (
        <>
            <div className="info-strip-wrapper">
                <div className="info-strip">
                    <div className="info-strip-contact">
                        <p><i className="fa-solid fa-phone"></i>+1 800 833 9780</p>
                        <p><i className="fa-solid fa-envelope"></i>info@example.com</p>
                    </div>
                    <a href="#"><div className="info-strip-button">MAKE APPOINTMENT</div></a>
                </div>
            </div>
        </>
    )
}
export default InfoStrip;