// import { useEffect, useRef } from "react";
import React from "react";
import Ticker from "./Ticker";
import "./style.css";

const Home = () => {
  return (
    <>
      <Ticker />

      <div
        className="header"
        style={{
          minHeight: "100vh",
          width: "100%",
          backgroundImage:
            "linear-gradient(#FFC837, #FF8008)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div className="txt-box">
          <h1>Learn While You Earn</h1>
          <br />
          <p>
            Learn from mentors about Market, Industrial insights, and Company research.
          </p>
          <p>
            Earn skills with members by Monthly Projects led by each teams and be part of our prestigious networking system
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf0xBY2sK0ub7SwoebbNJBez5PkF6OXDPZfKlCr6y5IqWJdlw/viewform"
            className="register-btn"
          >
            <span className="btn-text"> Apply for Fall 2025 </span>
          </a>
        </div>
      </div>

      <div className="int">
        <div className="left">
          <div className="img-box">
            <img src="/Images/AIM-Logo.svg" />
          </div>
        </div>
        <div className="right">
          <div className="card">
            <div>
            <h1>Who we are</h1>
            <br />
              <h4>
                We are a student-led corporate and quantitative finance 
                organization at University of Illinois Urbana-Champaign
              </h4>
            </div>
          </div>
          <div className="card">
            <div>
              <h1>What we do</h1>
              <br />
              <h4>
              We offer a structured program of market analysis training, quantitative research assignments,
               and simulated trading challenges preparing members for careers in corporate and quantitative finance.
              </h4>
            </div>
          </div>
          <div className="card">
            <div>
              <h1>External Team</h1>
              <br />
              <h4>
              Investment and Research teams form the core of our club. The Investment Team runs rigorous backtesting strategies and hones execution skills,
              while the Research Team conducts market analyses, builds valuation models, and produces montly due dilligence report.
              </h4>
            </div>
          </div>
          <div className="card">
            <div className="txt-box-2">
              <h1>Internal Team</h1>
              <br />
              <h4>
                Internal teams such as software, treasury, and media teams care for the club's overall maintainence and promotion. 
              </h4>
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
            <img src="Images/pricewaterhousecoopers-pwc-seeklogo.png" />
          </div>
          <div className="kpmg">
            <img src="Images/KPMG_id9tLD2YU7_1.png" />
          </div>
          <div className="samsung">
            <img src="Images/Samsung_Orig_Wordmark_BLACK_RGB.png" />
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
          <div className="CBRE">
            <img src="Images/cbre-group-seeklogo.png" />
          </div>
          <div className="lg">
            <img src="Images/lg-electronics-seeklogo.png" />
          </div>
          <div className="protiviti">
            <img src="Images/Protiviti_logo.svg" />
          </div>
          <div className="sk">
            <img src="Images/SK_logo.svg" />
          </div>
          <div className="nh">
            <img src="Images/NH_Investment_&_Securities_Logo_(KOR).svg" />
          </div>
          <div className="standard Chartered">
            <img src="Images/Standard_Chartered_logo.png" />
          </div>
          <div className="bnp-paribas">
            <img src="Images/BNP_Paribas_logo_logotype_emblem.png" />
          </div>
          <div className="ocbc">
            <img src="Images/OCBC_Bank_logo_logotype_Singapore.png" />
          </div>
          <div className="hyundai">
            <img src="Images/Hyundai_Motor_Company_logo.svg" />
          </div>
          <div className="mirae">
            <img src="Images/Mirae_Asset_Logo.svg" />
          </div>
          <div className="berylls">
            <img src="Images/berylls-strategy-advisors-gmbh-logo-vector.svg" />
          </div>
          <div className="synchrony">
            <img src="Images/Synchrony_idq_Jj6q-q_0.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
