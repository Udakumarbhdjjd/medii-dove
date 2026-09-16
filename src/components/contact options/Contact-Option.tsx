import './Contact-Option.css'
function ContactOption() {
    let ContactOptionArray = [
        {   
            img: "fas fa-envelope",
            name: "Mail Here",
            details: "Admin@BasicTheme.comInfo@ Themepur.com"
        }, {
            img: "fas fa-envelope",
            name: "Visit Here",
            details: "27 Division St, New York, NY 10002, Jaklina, United Kingpung"
        }, {
            img: "fas fa-envelope",
            name: "Call Here",
            details: "+8 (123) 985 789 +787 878897 87"
        },
    ]
    return (
        <>
            <div className="ContactOption">
                <div className="ContactOption-wrapper">
                    {
                        ContactOptionArray.map(
                            function(item){
                                return <div className='ContactOption-element'>
                                        <div className="ContactOption-element-logo"><i className={item.img}></i></div>
                                        <h3>{item.name}</h3>
                                        <p>{item.details}</p>
                                </div>
                            }
                        )
                    }
                </div>
            </div>
        </>
    )
}
export default ContactOption;