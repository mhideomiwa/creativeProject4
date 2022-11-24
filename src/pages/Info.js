import {Link} from "react-router-dom";
import '../App.css';
import demo1 from './images/demo1.jpeg';
import demo2 from './images/demo2.jpeg';
import demo3 from './images/demo3.jpeg';


import Footer from "./Footer";
import Nav from "./Nav";

const Info = () => {
    return (
        <>
            <Nav />
            <div className="content-container">
                <div className="content content-2">
                    <img src={demo1} className="demo-photo" alt={"demo1"}></img>
                        <p>
                            A place of connection and learning where students and teachers connect as they work to
                            overcome language barriers and share meaningful cultural experiences.
                        </p>
                </div>
                <div className="content content-3">
                    <p>
                        Where you can make a difference. Our volunteer teachers get daily opportunities to help students
                        gain the valuable life skill of communicating enligsh.
                    </p>
                    <img src={demo2} className="demo-photo"></img>
                </div>
                <div className="content content-2">
                    <img src={demo3} className="demo-photo"></img>
                        <p>
                            Grow through leadership teaching experiences. Our teachers get the opportunity to lead and
                            connect with the students they work with.
                        </p>
                </div>
                <div className="content content-2">
                    <Link to={"./Volunteer"}>
                        <button className="button"> Volunteer</button>
                    </Link>
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default Info;
