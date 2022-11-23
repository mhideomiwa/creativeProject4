import {Link} from "react-router-dom";
import '../App.css';
import Footer from "./Footer";

const Home = () => {
    return(
        <>
            <div class="content-container">
                <div class="content_header">Welcome to Unified Languages</div>
                <div class="content-image">
                </div>
                <div class="content content-1">
                    Unified Language is about bringing people together and creating opportunities for career development through teaching the widest used language, English.
                    We seek to to partner with local and international organizations to provide English learning opportunities in regions where English could be a serious asset for those in need.
                    As our students learn English, they become more valuable employees and can offer more to potential employers in government organizations, tourist positions, or social work groups.
                    <Link to={"./info"}>
                        <button class="button"> Learn More </button>
                    </Link>
                </div>
                <div class={"content content-2"}>
                    A special thanks to our partners
                </div>
                <img src="https://pti-jo.com/wp-content/uploads/2020/06/Logo200px.jpg" alt={"PTI Logo"}></img>
                    <div class="content content-2">Princess Taghrid Institute</div>
                <img src="https://www.blackbeltlogistics.com/wp-content/uploads/2022/04/BBL-Logo-200x81.png" alt={"Blackbelt Logo"}></img>
                        <div class="content content-2">Black Belt Logistics</div>

            </div>
            <Footer />
        </>
    )
};

    export default Home;