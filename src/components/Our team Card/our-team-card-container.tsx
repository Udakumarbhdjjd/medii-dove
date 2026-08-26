import './our-team-card-container.css'
import img1 from './our team card images/member1.png'
import img2 from './our team card images/member2.png'
import img3 from './our team card images/member3.png'
import img4 from './our team card images/member4.png'
import img5 from './our team card images/member5.png'
import img6 from './our team card images/member6.png'
import OurTeamCard from './Our-team-card'


let teamCardArray = [
    {
        image: img1 ,
        name: 'Rosalina D. Williamson',
        title: 'Founder',
    }, {
        image:  img2 ,
        name: 'Diconda PIran Will',
        title: 'dentist',
    }, {
        image: img3 ,
        name: 'Hulk M. Kenbon',
        title: 'neurologist',
    }, {
        image: img4 ,
        name: 'Haliam Z. Dicolaz',
        title: 'Consultant',
    }, {
        image:  img5 ,
        name: 'Nicolas D. Case',
        title: 'dentist',
    }, {
        image:  img6 ,
        name: 'Phumdon H. Norman',
        title: 'neurologist',
    },
]
function OurTeamCardContainer() {
    return (
        <>
            <div className="our-team-card-container">
                <div className="our-team-card-container-wrapper">
                    {
                        teamCardArray.map(function (item:any,index) {
                            return <div className="our-team-card-container-items"><OurTeamCard key={index} name={item.name}  image={item.image} title={item.title}/></div>

                        })
                    }
                </div>
            </div>
        </>
    )
}
export default OurTeamCardContainer;