import './about.css'
import about from './about img/download.png'
function About(props: any) {
    return (
        <>
            <div className="about-section-wrapper">
                <div className="about-section">
                    <div className="about-section-logo"><img src={props.logo} alt="igm" /></div>

                    <div className="about-section-left">
                        <div className="about-section-left-image-container">
                            <img src={about} alt="img" />
                        </div>
                    </div>
                    <div className="about-section-right">
                        <div className="about-section-text-container">
                            <h3>About Us</h3>
                            <h1>Short Story About MediDove Clinic.</h1>
                            <p>Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit.eaque soluta animi praesentium tempora ipsam asperiores maxime minima.eaque soluta animi praesentium tempora ipsam asperiores maxime minima. Qui voluptatum quae nobis?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.quae pariatur commodi molestias tenetur autem temporibus dicta, voluptas maxime tempora repellendus?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, vitae Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi obcaecati, ut recusandae veritatis dolores delectus in blanditiis Similique quas illum laborum nobis architecto possimus quam, repudiandae autem quisquam fugit nemo!</p>
                            <div className="about-section-card-container">
                                <div className="about-section-card">
                                    <div className="about-section-card-img"><img src={props.image} alt="img" /></div>
                                    <div className="about-section-card-name">{props.name}</div>
                                    <div className="about-section-card-title">FOUNDER</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
export default About;