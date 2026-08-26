import img1 from './srvices card image/service1.png'
import img2 from './srvices card image/service2.png'
import img3 from './srvices card image/service3.png'
import img4 from './srvices card image/service4.png'
import img5 from './srvices card image/service5.png'
import img6 from './srvices card image/service6.png'
import ServicesCard from "./services-card";
import './services-card.css'
function ServiceSection() {
    let ServicesCardArr = [
        {
            name: "Body Surgery",
            text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
            img: img1 
        }, {
            name: "Dental Care",
            text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
            img: img2
        }, {
            name: "Body Surgery",
            text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
            img: img3 
        }, {
            name: "Body Surgery",
            text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
            img: img4
        }, {
            name: "Body Surgery",
            text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
            img: img5 
        }, {
            name: "Body Surgery",
            text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
            img: img6
        },
    ]
    return (
        <>
          <div className="service-section"> 
            <div className="service-section-top">
{ServicesCardArr.slice(0,3).map(function(item:any,index:any){
                return <ServicesCard key={index} name={item.name} text={item.text} img={item.img}/>
            })}
            </div>
            <div className="service-section-bottom">
                {ServicesCardArr.slice(3,6).map(function(item:any,index:any){
                return <ServicesCard key={index} name={item.name} text={item.text} img={item.img}/>
            })}
            </div>
          </div>
            
        </>
    )
}
export default ServiceSection;