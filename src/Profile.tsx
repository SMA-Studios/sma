import { Link } from "react-router-dom";
import "./style/main.css";

export default function Profile(){
    return (
        <div className="profile-container">
            <div className="back-container">
                <Link to="/">
                    <p className="profile-text">Back</p>
                </Link>
            </div>
            <p className="profile-text">I'm adam. I'm in the 2nd grade. My favorite color is blue. I have a mom, a dad, and a brother. I have a pet dog named Sophie. My favorite animal is a piranha. My favorite sport is lacrosse. I like to read, play video games, and watch spongebob. When I grow up I want to be a teacher.</p>
        </div>
    );
}