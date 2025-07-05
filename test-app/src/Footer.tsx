import "./footer.css"

const Footer: React.FC = () => {

    return (
        <>
            <div className="footer">
                <div className="row">
                    <div className="col col1">
                        <img src="Images/AIM-Logo.svg" className="logo" />
                        <p>
                            Interested in sponsoring us?
                        </p>
                        <p> Reach out at aimpartnersuiuc@gmail.com!
                        </p>
                    </div>
                    <div className="col">
                        <h3>Location</h3>
                        <p>Digital Computer Lab room #1310</p>
                        <p>1304 W Springfield Ave, Urbana, IL 61801 USA</p>
                        <div className="email-box">
                            <a href="mailto:aimpartnersuiuc@gmail.com">aimpartnersuiuc@gmail.com</a>
                        </div>
                        <h4>+1 - 4479026627</h4>
                    </div>
                    <div className="col">
                        <h3> Links</h3>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/company/aimpartnersuiuc/">
                                <img src="Images/linkedIn.svg" />
                            </a>
                            <a href="https://discord.com/invite/EMSf7pjKM6">
                                <img src="Images/discord.svg" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;