import { Outlet, Link } from "react-router-dom";
import logo from './images/logo.png';
import '../App.css';
import styles from '../mystyle.module.css'

const layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <Link className="navbar-brand styles.navbar-brand" to={"/"}><img src={logo} className="nav-logo" alt={'Logo'}/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to={"/"}>Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/info"}>Learn More</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Resources
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to={"/Tchrsc"}>Teacher Resources</Link>
                                <Link className="dropdown-item" to={"/Stdrsc"}>Student Resources</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

            <Outlet />
        </>
    )
};

export default layout;