import './Appointment.css'
function Appointment(props:any){
    return(
        <>
        <div className="appointment-btn">
            <div className="appointment-plus">+</div>
            <div className="appointment-text">{props.name}</div>
        </div>
        </>
    )
}
export default Appointment;