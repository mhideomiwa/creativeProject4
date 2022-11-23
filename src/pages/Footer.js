// cost Footerimport { Outlet, Link } from "react-router-dom";
import logo from './images/logo.png';
import '../App.css';
import styles from '../mystyle.module.css'

const Footer = () => {
    return (
        <>
        <div class='footer'>
            <div class='footer-item'>
                <div class="footer-one">
                    <h4>Sources</h4>
                </div>
                <div class="footer-one">Photos: Shatha Aboudeh</div>
                <div class="footer-one">Photos: Matthew Miwa</div>
                <div class="footer-one"><a href="https://github.com/mhideomiwa/cs260CreativeProject/blob/main/README.md">Github</a></div>
            </div>
            <div class='footer-item'>
                <div class='footer-one'>
                    <h4>Contact Us</h4>
                    <div>Phone: (555)-555-5555</div>
                    <div>Email: ul.info@example.com</div>
                    <div>Address: Lehi, UT</div>
                </div>
            </div>
            <div class='footer-item'>
                <div class='footer-one'>
                    <h4>Partners</h4>
                    <div><a href="https://www.blackbeltlogistics.com/">Black Belt logistics</a></div>
                    <div><a href="https://pti-jo.com/">Princess Taghrid Institute</a></div>
                    <div><a href="https://info.html/">Become a Partner</a></div>
                </div>
            </div>
        </div>
        </>
    )
};

export default Footer;