import { Link } from "react-router-dom";

    function DropDown(props:any) {
        return (
            <>
                <div className="dropdown">
                    <Link to={props.title}>{props.title}</Link>
                    
                    <div className="dropdown-name">
                        <Link to={props.value1}>{props.value1}</Link>
                        <Link to={props.value2}>{props.value2}</Link>
                        <Link to={props.value3}>{props.value3}</Link>
                        <Link to={props.value4}>{props.value4}</Link>
                        <Link to={props.value5}>{props.value5}</Link>
                        <Link to={props.value6}>{props.value6}</Link>
                        <Link to={props.value7}>{props.value7}</Link>
                        <Link to={props.value8}>{props.value8}</Link>
                    </div>
                </div>
            </>
        )
    }
    export default DropDown;