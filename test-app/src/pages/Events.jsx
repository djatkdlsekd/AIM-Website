const Events = () => {

    return (
        <>

            <div className="sub-header-3"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url('/Images/background4.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "50vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div className="txt-box">
                    <h1>Events</h1>
                </div>
            </div>

            <div className="loc">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.307915588152!2d-88.22912337242128!3d40.113140971490154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880cd76a9d6de433%3A0xbad854d2549cff44!2sDigital%20Computer%20Laboratory!5e0!3m2!1sko!2skr!4v1750584717049!5m2!1sko!2skr"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>

            <h2 className="events__title">Upcoming Events</h2>
            <div className="events__wrapper">

                <article className="event-card">
                    <time className="event-card__date" dateTime="2025-09-02T18:00">
                        Tue, Sep 2 2025 · 6:00 PM 8:00 PM CST
                    </time>
                    <h3 className="event-card__heading">First Info Night: Fall 2025</h3>
                    <p className="event-card__description">
                        Join us for a walkthrough of this semester’s application process, meet the leadership team, and ask any questions.
                    </p>

                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfbky-jWiNfTXGP7tUGjrT_EDqFcBYR8RCqOwJIQ1FWEtGT8g/viewform" className="event-card__location-btn">
                        Digital Computer Lab Room #1310
                    </a>
                </article>

                <article className="event-card">
                    <time className="event-card__date" dateTime="2025-09-04T18:00">
                        Thu, Sep 4 2025 · 6:00 PM  8:00 PM CST
                    </time>
                    <h3 className="event-card__heading">Second Info Night: Fall 2025</h3>
                    <p className="event-card__description">
                        Join us for a walkthrough of this semester’s application process, meet the leadership team, and ask any questions.
                    </p>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdcck1WoNwbLcK4gQguv4g7gpB8WpC3MP4uSZxjFL_Cdw7Ssw/viewform" className="event-card__location-btn">
                        Digital Computer Lab Room #1310
                    </a>
                </article>

                <article className="event-card">
                    <time className="event-card__date" dateTime="2025-09-17T18:00">Wed, Sep 17 2025 · 6:00 PM CST</time>
                    <h3 className="event-card__heading">General Meeting</h3>
                    <p className="event-card__description">General Meeting</p>
                    <address className="event-card__location">TBD</address>
                </article>

                <article className="event-card">
                    <time className="event-card__date" dateTime="2025-09-24T18:00">Wed, Sep 24 2025 · 6:00 PM CST</time>
                    <h3 className="event-card__heading">General Meeting</h3>
                    <p className="event-card__description">General Meeting</p>
                    <address className="event-card__location">TBD</address>
                </article>

                <article className="event-card">
                    <time className="event-card__date" dateTime="2025-10-01T18:00">Wed, Oct 1 2025 · 6:00 PM CST</time>
                    <h3 className="event-card__heading">General Meeting</h3>
                    <p className="event-card__description">General Meeting</p>
                    <address className="event-card__location">TBD</address>
                </article>

                <article className="event-card">
                    <time className="event-card__date" dateTime="2025-10-08T18:00">Wed, Oct 8 2025 · 6:00 PM CST</time>
                    <h3 className="event-card__heading">General Meeting</h3>
                    <p className="event-card__description">General Meeting</p>
                    <address className="event-card__location">TBD</address>
                </article>

                <article className="event-card">
                    <time className="event-card__date" dateTime="2025-10-22T18:00">Wed, Oct 22 2025 · 6:00 PM CST</time>
                    <h3 className="event-card__heading">General Meeting</h3>
                    <p className="event-card__description">General Meeting</p>
                    <address className="event-card__location">TBD</address>
                </article>

                <article className="event-card">
                    <time className="event-card__date" dateTime="2025-11-05T18:00">Wed, Nov 5 2025 · 6:00 PM CST</time>
                    <h3 className="event-card__heading">General Meeting</h3>
                    <p className="event-card__description">General Meeting</p>
                    <address className="event-card__location">TBD</address>
                </article>

                <article className="event-card">
                    <time className="event-card__date" dateTime="2025-11-12T18:00">Wed, Nov 12 2025 · 6:00 PM CST</time>
                    <h3 className="event-card__heading">General Meeting</h3>
                    <p className="event-card__description">General Meeting</p>
                    <address className="event-card__location">TBD</address>
                </article>

                <article className="event-card">
                    <time className="event-card__date" dateTime="2025-11-19T18:00">Wed, Nov 19 2025 · 6:00 PM CST</time>
                    <h3 className="event-card__heading">General Meeting</h3>
                    <p className="event-card__description">General Meeting</p>
                    <address className="event-card__location">TBD</address>
                </article>

                <article className="event-card">
                    <time className="event-card__date" dateTime="2025-11-26T18:00">Wed, Nov 26 2025 · 6:00 PM CST</time>
                    <h3 className="event-card__heading">General Meeting</h3>
                    <p className="event-card__description">General Meeting</p>
                    <address className="event-card__location">TBD</address>
                </article>

                <article className="event-card">
                    <time className="event-card__date" dateTime="2025-12-03T18:00">Wed, Dec 3 2025 · 6:00 PM CST</time>
                    <h3 className="event-card__heading">General Meeting</h3>
                    <p className="event-card__description">General Meeting</p>
                    <address className="event-card__location">TBD</address>
                </article>

                <article className="event-card">
                    <time className="event-card__date" dateTime="2025-12-10T18:00">Wed, Dec 10 2025 · 6:00 PM CST</time>
                    <h3 className="event-card__heading">General Meeting</h3>
                    <p className="event-card__description">General Meeting</p>
                    <address className="event-card__location">TBD</address>
                </article>

                <article className="event-card">
                    <time className="event-card__date" dateTime="2025-12-17T18:00">Wed, Dec 17 2025 · 6:00 PM CST</time>
                    <h3 className="event-card__heading">General Meeting</h3>
                    <p className="event-card__description">General Meeting</p>
                    <address className="event-card__location">TBD</address>
                </article>

            </div>

        </>
    );
}

export default Events;