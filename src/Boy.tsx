import { Link } from "react-router-dom";

interface BoyProps {
    name?: string;
    imgName?: string;
    subPage?: string;
}

function Boy(props: BoyProps) {
    return (
        <div className="user">
            <Link to={`${props.subPage}`}><img className="icon" alt="" src={"sma-icons/" + props.imgName}/></Link>
            <div className="nameplate"><p>{props.name}</p></div>
        </div>
    );
}

export default Boy;