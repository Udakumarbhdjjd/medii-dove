import { Link } from "react-router-dom";

    function DropDown(props:any) {
        return (
            <>
                <div className="dropdown">
                    <Link to={props.title}>{props.title}</Link>
                    
                    <div className="dropdown-name">
                        <a href="#Home1">{props.value1}</a>
                        <a href="#Home2">{props.value2}</a>
                        <a href="#Home3">{props.value3}</a>
                        <a href="#Home4">{props.value4}</a>
                        <a href="#Home4">{props.value5}</a>
                        <a href="#Home4">{props.value6}</a>
                        <a href="#Home4">{props.value7}</a>
                        <a href="#Home4">{props.value8}</a>
                    </div>
                </div>
            </>
        )
    }
    export default DropDown;