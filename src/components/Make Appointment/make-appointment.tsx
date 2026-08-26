import Appointment from '../Appointment Button/Appointment';
import './make-appointment.css'
function MakeAppointment() {
    return (
        <>
            <div className="make-appointment">
                <div className="make-appointment-wrapper">
                    <div className="make-appointment-left">
                        <h3>We are available 24/7</h3>
                        <h2>We Always Ready<br /> For A Challenge.</h2>
                        <Appointment name="MAKE APPOINTMENT"/>
                    </div>
                    <div className="make-appointment-right">

                        <div className="make-appointment-right-items">
                            <div className="make-appointment-right-item1">1M+</div>
                            <div className="make-appointment-right-item2">
                                <h4><i id='make-appointment-icon' className="fa-solid fa-user"></i>Satisfied Patients</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur assumenda quibusdam optio officiis voluptatem ut autem ea ducimus animi!</p>
                            </div>
                        </div>
                        <div className="make-appointment-right-items">
                            <div className="make-appointment-right-item1">1M+</div>
                            <div className="make-appointment-right-item2">
                                <h4><i id='make-appointment-icon' className="fa-regular fa-thumbs-up"></i>World Awards</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur assumenda quibusdam optio officiis voluptatem ut autem ea ducimus animi!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MakeAppointment;