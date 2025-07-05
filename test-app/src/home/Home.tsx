import { useEffect, useRef } from "react";
import Ticker from "./Ticker";
import "./style.css";

const Home: React.FC = () => {
  const navMenuRef = useRef<HTMLDivElement>(null);
  const intRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = document.querySelectorAll('.card');

    const rotateCards = () => {
      let angle = 0;
      cards.forEach((card, index) => {
        if (card.classList.contains("away")) {
          (card as HTMLElement).style.transform = `translateY(-120vh) rotate(-48deg)`;
        } else {
          (card as HTMLElement).style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
          angle = angle - 10;
          (card as HTMLElement).style.zIndex = `${cards.length - index}`;
        }
      });
    };

    const handleScroll = () => {
      if (!intRef.current) return;
      let distance = window.innerHeight / 2;
      let topVal = intRef.current.getBoundingClientRect().top;
      let index = -1 * (topVal / distance + 1);
      index = Math.floor(index);

      for (let i = 0; i < cards.length; i++) {
        if (i <= index) {
          cards[i].classList.add("away");
        } else {
          cards[i].classList.remove("away");
        }
      }
      rotateCards();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Ticker />

      <div
        className="header"
        style={{
          minHeight: "100vh",
          width: "100%",
          backgroundImage:
            "linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url('/Images/background.jpeg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div className="txt-box">
          <h1>Learn While You Earn</h1>
          <p>
            Learn from mentors about Market, Industry, and Company research.
          </p>
          <p>
            Earn skills with members by Monthly Mock Trade and Research Due
            Diligence Report
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf0xBY2sK0ub7SwoebbNJBez5PkF6OXDPZfKlCr6y5IqWJdlw/viewform"
            className="register-btn"
          >
            Apply for Fall 2025
          </a>
        </div>
      </div>

      <div className="int" ref={intRef}>
        <div className="left">
          <div className="img-box">
            <img src="/Images/AIM-Logo.svg" />
          </div>
        </div>
        <div className="right">
          <div className="card card1">
            <div className="txt-box">
              <h1>Who we are</h1>
            </div>
          </div>
          <div className="card card2">
            <div className="txt-box">
              <p>
                We are a student-led corporate and quantitative finance
                organization at University of Illinois Urbana-Champaign
              </p>
            </div>
          </div>
          <div className="card card3">
            <div className="txt-box">
              <h1>What we do</h1>
            </div>
          </div>
          <div className="card card4"></div>
          <div className="card card5">
            <div className="txt-box">
              <h1>Research Team</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                quo suscipit praesentium libero nulla vitae provident laborum
                animi ducimus est qui fugit delectus laboriosam quaerat labore
                voluptas quos magnam illum.
              </p>
            </div>
          </div>
          <div className="card card6">
            <div className="txt-box">
              <h1>Investment Team</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam ad itaque nemo fuga accusamus deserunt praesentium eos
                possimus, vel sunt veritatis dolore fugiat eius rerum dolor. Sit
                eaque illum tempora.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="plc">
        <div className="txt-box-2">
          <h1>Placement</h1>
        </div>
        <div className="company">
          <div className="pwc">
            <img src="Images/960px-PricewaterhouseCoopers_Logo.svg.png" />
          </div>
          <div className="kpmg">
            <img src="Images/kpmg.svg" />
          </div>
          <div className="samsung">
            <img src="Images/samsung.svg" />
          </div>
          <div className="ey">
            <img src="Images/ey.svg" />
          </div>
          <div className="deloitte">
            <img src="Images/deloitte.svg" />
          </div>
          <div className="bcg">
            <img src="https://media-publications.bcg.com/BCG_MONOGRAM.png" />
          </div>
          <div className="meta">
            <img src="Images/meta.svg" />
          </div>
          <div className="mcs">
            <img src="Images/microsoft.svg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
