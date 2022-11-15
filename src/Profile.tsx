import { Link, useParams } from "react-router-dom";
import "./style/main.css";

const motd = [
    {name: "adam", message: "I'm adam. I'm in the 2nd grade. My favorite color is blue. I have a mom, a dad, and a brother. I have a pet dog named Sophie. My favorite animal is a piranha. My favorite sport is lacrosse. I like to read, play video games, and watch spongebob. When I grow up I want to be a teacher."},
    {name: "lucas", message: "i own the tv"},
    {name: "nico", message: "talk to me!"},
    {name: "jon", message: "pobis"}
]

export default function Profile(){
    const { member } = useParams();

    return (
        <div className="profile-container">
            <div className="back-container">
                <Link to="/">
                    <p className="profile-text">Back</p>
                </Link>
            </div>
            <p className="profile-text">{`${member}'s greeting is supposed to go here but i'm an idiot so idk how to do that`}</p>
        </div>
    );
}