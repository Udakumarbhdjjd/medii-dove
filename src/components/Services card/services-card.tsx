import { Link } from 'react-router-dom'
import './services-card.css'
function ServicesCard(props:any) {
    return (
        <>
            <div className="service-card">
                <div className="service-card-image"><img src={props.img} alt="a32" /></div>
                <Link to='/about-us'><h1>{props.name}</h1></Link>
                <p>{props.text}</p>
                <Link to='/about-us'><h3>Read more</h3></Link>

            </div>
        </>
    )
}
export default ServicesCard;