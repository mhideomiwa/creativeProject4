import {Link} from "react-router-dom";
import '../App.css';
import Footer from "./Footer";
import Nav from "./Nav";
const Tchrsc = () => {
    return (
        <>
            <Nav />
        <div className="content-container">
            <div className="content content-4">
                <h1>Volunteer Login</h1>
                <Link to={"../Portal"}>
                    <button className="button"> Login to Teacher Portal</button>
                </Link>
            </div>
            <div className="content content-1">
                <div className="dropdown">
                    <button className="btn btn-secondary btn-xlg dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" styles="margin:20px;">
                        Teaching Resources
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="https://app.burlingtonenglish.com/">Burlington English</a>
                        <a className="dropdown-item" href="https://www.merriam-webster.com/word-of-the-day">Word of the
                            Day</a>
                        <a className="dropdown-item"
                           href="https://translate.google.com/?sl=auto&tl=en&op=translate">Translate</a>
                    </div>
                </div>
                If you desire to volunteer to become a teacher, please visit our Learn More page to get more information
                about how you could become a Unified Languages teacher. Thank you for your interest in Unified
                Languages.
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default Tchrsc;