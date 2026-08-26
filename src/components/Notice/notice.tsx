import "./notice.css"
function Notice(props:any){
    return(
        <>
            <div className="notice-container">
                <div className="notice">
                    <div className="notice-image">
                        <img src={props.image} alt="fhaw" />
                    </div>
                    <div className="notice-text">
                        <h4>{props.title}</h4>
                        <h1>{props.text}</h1>
                    </div>
                    <div className="notice-line">
                        <img src={props.line} alt="awfj" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Notice;