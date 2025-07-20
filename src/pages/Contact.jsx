const Contact = () => {

    return (
        <>
            <div className="sub-header-3"
                style={{
                    backgroundImage:
                        "linear-gradient(#FFC837, #FF8008)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "50vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div className="txt-box">
                    <h1>Contact</h1>
                </div>
            </div>

            <div className="contact">
                <div className="row">
                    <div className="contact-col">
                        <div>
                            <i className="fa fa-phone"></i>
                            <span>+1 447 902 6627</span>
                        </div>
                        <div>
                            <i className="fa fa-envelope"></i>
                            <span>aimpartnersuiuc@gmail.com</span>
                        </div>
                    </div>

                    <div className="contact-col">
                        <form action="form.php" method="post">
                            <input type="text" name="name" placeholder="Enter your name" required />
                            <input type="email" name="email" placeholder="Enter Email address" required />
                            <input type="text" name="subject" placeholder="Enter your subject" required />
                            <textarea rows={8} name="message" placeholder="Message" required></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Contact;