import { Outlet, Link } from "react-router-dom";
import logo from './images/cropped-Unified-Languages-Logo-92x92.png';
import '../App.css';
import styles from '../mystyle.module.css'


const layout = () => {
    return (
        <>


            <Outlet />
        </>
    )
};

export default layout;