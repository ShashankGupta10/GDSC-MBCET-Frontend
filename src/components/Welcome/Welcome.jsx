import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import carousel from '../../assets/carousel-bgrm.png';
import electrician from '../../assets/electrician.svg';
import lawyer from '../../assets/Lawyer.svg';
import carpenter  from '../../assets/carpenter.svg';
import plumber from '../../assets/plumber.svg';
import barber from '../../assets/barber.svg';
import home from '../../assets/Build your home.svg';

function WelcomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <div className="container">
          <div className="logo">
            <h2>Hathacons</h2>
          </div>
          <div className="btn-container" style={{gap:'10px'}}>
            <button className="register-btn" onClick={()=> navigate("/signup/provider")} style={{border:'0.5px solid black',borderRadius:'8px'}}>Register As A Service Provider</button>
            <button className="login-btn" onClick={()=> navigate("/login/provider")} style={{width:'auto'}}>Service Provider Login</button>
            <button className="login-btn" onClick={()=> navigate("/login/consumer")} style={{width:'auto'}}>Service Consumer Login</button>
          </div>
        </div>
      </nav>
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Your trusted partner <span>Service Connect.</span>
          </h1>
          <p>
            At Hackathons, we deliver top-notch professional services tailored to meet your specific needs. With our
            extensive expertise and commitment to excellence, we are your trusted partner for all your requirements.
          </p>
          <p>We assure you that we will provide you the best service possible and a smooth path to your fixings.</p>
          <button className="learn-more" onClick={()=> navigate("/signup/consumer")}>
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Get Started</span>
          </button>
        </div>
        <div className="hero-img">
          <img src={carousel} alt="" className="electrician" />
        </div>
      </div>
      <div className="features-container">
        <div className="features-header">
          <h2>Our Services</h2>
        </div>
        <div className="features-card">
          <div className="feature">
            <img src={electrician} alt="" />
            <h3>Electrician</h3>
            <p>Best in class electrician safely doing your work and providing you service.</p>
          </div>
          <div className="feature">
            <img src={carpenter} alt="" />
            <h3>Carpenter</h3>
            <p>Any day work or carpentry will do and provide quick service.</p>
          </div>
          <div className="feature">
            <img src={plumber} alt="" />
            <h3>Plumber</h3>
            <p>Leakages are a problem? We provide you a solution! Get in touch with the best plumbers.</p>
          </div>
        </div>
        <div className="features-card">
          <div className="feature">
            <img src={barber} alt="" />
            <h3>Hair Specialist</h3>
            <p>Who can imagine getting barbers at home? Have a great haircut at home.</p>
          </div>
          <div className="feature">
            <img src={lawyer} alt="" />
            <h3>Legal Advice</h3>
            <p>Got into legal troubles? Find the best lawyers to talk and find solutions.</p>
          </div>
          <div className="feature">
            <img src={home} alt="" />
            <h3>Painting</h3>
            <p>Wanna give your house a new look? Let's paint it with new colors.</p>
          </div>
        </div>
      </div>
      <footer>
        <div className="f-item-con">
          <div className="app-info">
            <span className="app-name">
              <span className="app-initial">H</span>athacons
            </span>
            <p>
              We are<strong> Hathacons</strong>, dedicated to providing the best service to our customers.
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
              <input type="text" name="g-name" className="g-inp" id="g-name" placeholder="Name" />
              <input type="email" name="g-email" className="g-inp" id="g-email" placeholder="Email" />
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
}

export default WelcomePage;