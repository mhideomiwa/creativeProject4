import {Link} from "react-router-dom";
import '../App.css';
import Footer from "./Footer";



const Stdrsc = () => {
    return (
        <>
            <div className="content-container">
                <div className="content content-1">
                    <h1>Homework Resources</h1>
                    <a href="https://app.burlingtonenglish.com/">
                        <button className="button"> Burlington English</button>
                    </a>
                </div>
                <div className="content content-4">
                    <h1 className="content-4">Practice your english with the EnglishBot!</h1>
                    <dev>
                        <iframe width="500" height="600" allow="microphone;"
                                src="https://console.dialogflow.com/api-client/demo/embedded/f3d83214-303f-4a9a-8894-678f5c1da03b"></iframe>
                    </dev>
                    To use the EnglishBot just click where it says "Ask something..." and try having a conversation!
                    Right now EnglishBot does best with smalltalk conversations, but we plan on upgrading him to have
                    good conversations related to your homework!
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Stdrsc;