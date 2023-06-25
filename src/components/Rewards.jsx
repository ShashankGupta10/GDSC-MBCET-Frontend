import React, { useState } from 'react';
import './rewards.css';
import Navbar from './Navbar/Navbar';

function Rewards() {
  const [redeemAmount, setRedeemAmount] = useState(100);
  return (
    <>
    <div><Navbar/></div>
      <div className="header">
        <div className="points">
          <div className="reward-img">
            <img src="src\assets\rewards.png" alt="" />
          </div>
          <h3>Available Points</h3>
          <h1>500</h1>
        </div>
        <div className="reward-links">
          <div className="reward-tabs">
            <a href="#">
              <div className="tab-img">
                <img src="src\assets\card-img.svg" alt="" />
              </div>
              <div className="rewards">
                <h5>Book a Service</h5>
                <p>Earn 50 points for booking a service</p>
              </div>
              <div className="arrow">
                <img src="src\assets\arrow.svg" alt="" />
              </div>
            </a>
          </div>
          <div className="reward-tabs">
            <a href="#">
              <div className="tab-img">
                <img src="src\assets\speaker-img.svg" alt="" />
              </div>
              <div className="rewards">
                <h5>Refer a Friend</h5>
                <p>Earn 50 points for referring a friend</p>
              </div>
              <div className="arrow">
                <img src="src\assets\arrow.svg" alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="hero">
        <div className="sidebar">
          <h1>Rewards level</h1>
          <a onClick={()=> setRedeemAmount(100)}>Tier 1</a>
          <a onClick={()=> setRedeemAmount(200)}>Tier 2</a>
          <a onClick={()=> setRedeemAmount(500)}>Tier 3</a>
        </div>
        <div className="features-container">
          <div className="features-card">
            <div className="feature">
              <img src="src\assets\puma-logo.svg" alt="" />
              <h4>500 points out of 1000 points.</h4>
              <p>₹{redeemAmount} Voucher</p>
              <button className="redeem">Redeem</button>
            </div>
            <div className="feature">
              <img src="src\assets\Amazon_logo.svg" alt="" />
              <h4>500 points out of 1000 points.</h4>
              <p>₹{redeemAmount} Voucher</p>
              <button className="redeem">Redeem</button>
            </div>
            <div className="feature">
              <img src="src\assets\boat-music-logo-vector.svg" alt="" />
              <h4>500 points out of 1000 points.</h4>
              <p>₹{redeemAmount} Voucher</p>
              <button className="redeem">Redeem</button>
            </div>
          </div>
          <div className="features-card">
            <div className="feature">
              <img src="src\assets\flipkart-logo-vector.svg" alt="" />
              <h4>500 points out of 1000 points.</h4>
              <p>₹{redeemAmount} Voucher</p>
              <button className="redeem">Redeem</button>
            </div>
            <div className="feature">
              <img src="src\assets\makemytrip-seeklogo.com.svg" alt="" />
              <h4>500 points out of 1000 points.</h4>
              <p>₹{redeemAmount} Voucher</p>
              <button className="redeem">Redeem</button>
            </div>
            <div className="feature">
              <img src="src\assets\bookmyshow-logo-vector.svg" alt="" />
              <h4>500 points out of 1000 points.</h4>
              <p>₹{redeemAmount} Voucher</p>
              <button className="redeem">Redeem</button>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="f-item-con">
          <div className="app-info">
            <span className="app-name">
              <span className="app-initial">H</span>athacons
            </span>
            <p>Lorem ipsum dolor sit.<strong> Lorem ipsum </strong> dolor <strong>Lorem ipsum </strong> Lorem ipsum
              Designs.</p>
          </div>
          <div className="useful-links">
            <div className="footer-title">Useful Links</div>
            <ul>
              <li>Courses</li>
              <li>Sign In</li>
              <li>About Us</li>
              <li>Become an Affiliate</li>
              <li>Advertise with Us</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
          <div className="help-sec">
            <div className="footer-title">Help</div>
            <ul>
              <li>Help Me</li>
              <li>Feedback</li>
              <li>Report a Issue / Bug</li>
            </ul>
          </div>
          <div className="g-i-t">
            <div className="footer-title">Get in Touch</div>
            <form action="/" method="post" className="space-y-2">
              <input type="text" name="g-name" className="g-inp" id="g-name" placeholder="Name" />
              <input type="email" name="g-email" className="g-inp" id="g-email" placeholder="Email" />
              <textarea type="text" name="g-msg" className="g-inp h-40 resize-none" id="g-msg"
                placeholder="Message..."></textarea>
              <button type="submit" className="f-btn">Submit</button>
            </form>
          </div>
        </div>
        <div className="cr-con">Copyright &copy; 2022 | Made by Hathacons</div>
      </footer>
    </>
  );
}

export default Rewards;