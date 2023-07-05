import React, { useState } from "react";
import "./ref.css";

const RewardsPage = () => {
  const [referralCode, setReferralCode] = useState("");
  const [mainDivContent, setMainDivContent] = useState("");

  const handleGenerateReferralCode = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const codeLength = 16;
    const btn = document.getElementById("referal-id");
    const image = document.getElementById("generateimg");
    const dat = document.getElementById("dat");

    let code = "";

    for (let i = 0; i < codeLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters[randomIndex];
    }

    setReferralCode(code);

    btn.style.display = "none";
    dat.innerHTML = "You can only generate single referal code";
    dat.style.textAlign = "center";
    image.style.display = "flex";
    setMainDivContent(`Referral Code: ${referralCode}`);
  };
  return (
    <div>
      <div className="header">
        <div className="reward-links">
          <div className="reward-tabs" id="maindiv">
            <p id="dat"></p>
            <button id="referal-id" onClick={handleGenerateReferralCode}>
              {mainDivContent}
              <div className="image">
                <img src="src\assets\referal-code.svg" alt="" srcSet="" />
              </div>
              <div className="rewards">
                <h5>Generate Referral Code</h5>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="hero">
        <img
          id="generateimg"
          src="src\assets\poof.jpg"
          style={{ display: "none", width: "100px", marginBottom: "30px" }}
        ></img>
        <h1 id="data">
          You can earn 50 points by referring this code to your friend...
        </h1>
        <input
          type="text"
          name="text"
          className="input"
          id="referralCodeInput"
          value={referralCode}
          placeholder="Code will be generated..."
        />
      </div>

      <footer>
        <div className="f-item-con">
          <div className="app-info">
            <span className="app-name">
              <span className="app-initial">H</span>athacons
            </span>
            <p>
              Lorem ipsum dolor sit.<strong> Lorem ipsum </strong> dolor{" "}
              <strong>Lorem ipsum </strong> Lorem ipsum Designs.
            </p>
          </div>
          <div className="useful-links">
            <div className="footer-title">Useful Links</div>
            <ul>
              <li>Sign In</li>
              <li>About Us</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
          <div className="help-sec">
            <div className="footer-title">Help</div>
            <ul>
              <li>Help Me</li>
              <li>Feedback</li>
              <li>Report an Issue / Bug</li>
            </ul>
          </div>
          <div className="g-i-t">
            <div className="footer-title">Get in Touch</div>
            <form action="/" method="post" className="space-y-2">
              <input
                type="text"
                name="g-name"
                className="g-inp"
                id="g-name"
                placeholder="Name"
              />
              <input
                type="email"
                name="g-email"
                className="g-inp"
                id="g-email"
                placeholder="Email"
              />
              <textarea
                type="text"
                name="g-msg"
                className="g-inp h-40 resize-none"
                id="g-msg"
                placeholder="Message..."
              ></textarea>
              <button type="submit" className="f-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="cr-con">Copyright &copy; 2022 | Made by Hathacons</div>
      </footer>
    </div>
  );
};

export default RewardsPage;
