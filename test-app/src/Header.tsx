import { useRef } from "react";
import "./header.css";


const Header: React.FC = () => {

    const navMenuRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <div className="header" >

                <nav>
                    <div className="navdiv">
                        <a href="/">
                            <img src="/Images/AIM-Logo.svg" alt="Logo" className="logo" />
                        </a>
                        <div className="nav-menu" id="navMenu">
                            <i className="fa fa-times" onClick={() => {
                                if (navMenuRef.current) {
                                    navMenuRef.current.style.right = "0";
                                }
                            }}></i>
                            <ul>
                                <li><a href="about">About Us</a></li>
                                <li><a href="project">Project</a></li>
                                <li><a href="events">Events</a></li>
                                <li><a href="contact">Contact</a></li>
                            </ul>
                        </div>
                        <i className="fa fa-bars" onClick={() => {
                            if (navMenuRef.current) {
                                navMenuRef.current.style.right = "-200px";
                            }
                        }}></i>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Header;