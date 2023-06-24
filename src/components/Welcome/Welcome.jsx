import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

function Welcome() {
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
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aspernatur laborum, saepe nisi ad quibusdam
            corrupti ducimus placeat, alias, blanditiis doloribus ipsa labore quis harum.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aspernatur laborum, saepe nisi ad quibusdam
            corrupti ducimus placeat, alias, blanditiis doloribus ipsa labore quis harum.</p>
          <button className="learn-more" onClick={()=> navigate("/signup/consumer")}>
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Get Started</span>
          </button>
        </div>
        <div className="hero-img">
          <img src="../../src\assets\carousel-bgrm.png" alt="" className="electrician" />
        </div>
      </div>
      <div className="features-container">
        <div className="features-header">
          <h2>Our Services</h2>
        </div>
        <div className="features-card">
          <div className="feature">
            <img src="../../src\assets\electrician.svg" alt="" />
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
          </div>
          <div className="feature">
            <img src="../../src\assets\carpenter.svg" alt="" />
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
          </div>
          <div className="feature">
            <img src="../../src\assets\plumber.svg" alt="" />
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
          </div>
        </div>
        <div className="features-card">
          <div className="feature">
            <img src="../../src\assets\Barber.svg" alt="" />
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
          </div>
          <div className="feature">
            <img src="../../src\assets\Lawyer.svg" alt="" />
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
          </div>
          <div className="feature">
            <img src="../../src\assets\Build your home.svg" alt="" />
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
          </div>
        </div>
      </div>
      <footer>
        <div className="f-item-con">
          <div className="app-info">
            <span className='app-name'>
              <span className='app-initial'>H</span>athacons
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
              <input type="text" name="g-name" className="g-inp" id="g-name" placeholder='Name' />
              <input type="email" name="g-email" className="g-inp" id="g-email" placeholder='Email' />
              <textarea type="text" name="g-msg" className="g-inp h-40 resize-none" id="g-msg"
                placeholder='Message...'></textarea>
              <button type="submit" className='f-btn'>Submit</button>
            </form>
          </div>
        </div>
        <div className='cr-con'>Copyright &copy; 2022 | Made by Hathacons</div>
      </footer>
    </div>
  );
}

export default Welcome;