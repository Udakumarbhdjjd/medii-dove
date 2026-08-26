import { Link } from 'react-router-dom';
import './Our-team-card.css'
function OurTeamCard(props:any) {
    return (
        <>
            <div className="our-team-card">

                <div className="our-team-card-profile">
                    <img src={props.image} alt="" />
                    <Link to="/doctor-details"><div className="adding-btn">+</div></Link>
                </div>

                <div className="our-team-card-text">
                    <h3>{props.name}</h3>
                    <p>{props.title}</p>
                </div>

            </div>
        </>
    )
}
export default OurTeamCard;
