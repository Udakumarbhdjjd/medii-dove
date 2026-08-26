import About from "../components/about/about";
import FrontSection from "../components/frontsection/frontSection";
import docImage from '../components/about/about img/author-ava.png'
import logoImage from '../components/about/about img/medical-brand-icon-border.png'
import Notice from "../components/Notice/notice";
import noticeImage from '../components/Notice/notice image/section-back-icon.png'
import noticeLine from '../components/Notice/notice image/section-title-line.png'
import ServiceSection from "../components/Services card/service-section";
import OurTeam from "../components/Our team/ourTeam";
import OurTeamCardContainer from "../components/Our team Card/our-team-card-container";
import MakeAppointment from "../components/Make Appointment/make-appointment";

function HomePage(){
return(
    <>

    <FrontSection/>
    <About logo={logoImage} image={docImage} name="Rosalina D. Williamson"/>
    <Notice title="Departments" text="Managed Your
Heathcare Services" image={noticeImage} line={noticeLine}/>
        <ServiceSection/>
        <OurTeam/>
        <OurTeamCardContainer/>
        <MakeAppointment/>
    </> 
)
}
export default HomePage;