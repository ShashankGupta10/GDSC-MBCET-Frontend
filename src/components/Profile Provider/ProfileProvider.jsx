import React, { useEffect, useState } from "react";
import './profileProvider.css';
import profileicon from '../../assets/profile.png';
import axios from "axios";
import Navbar from "../Navbar/Navbar";

function ProfileProvider() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = { authorization: `Bearer ${token}` };
    axios
      .get("http://localhost:3002/api/v1/provider/", {headers})
      .then((resp) => {
        console.log(resp.data);
        setData(resp.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (loading) {
    return <></>;
  } else {
  return (
    <div>
      <Navbar />

      <div className="hero-container">
        <div className="profile-info">
          <div className="profile-img">
            <img src={profileicon} alt="" />
          </div>
          <h3>Shashank Gupta</h3>
          <p>Service Provider</p>
        </div>

        <div className="profile-details">
          <div className="profile-item">
            <label htmlFor="name">Name: </label>
            <span className="profile-item-value">Shashank Gupta</span>
          </div>
          <div className="profile-item">
            <label htmlFor="email">Username: </label>
            <span className="profile-item-value">shashank</span>
          </div>
          <div className="profile-item">
            <label htmlFor="email">Email: </label>
            <span className="profile-item-value">shashank@gmail.com</span>
          </div>
          <div className="profile-item">
            <label htmlFor="name">Age: </label>
            <span className="profile-item-value">20</span>
          </div>
          <div className="profile-item">
            <label htmlFor="name">Gender: </label>
            <span className="profile-item-value">Male</span>
          </div>
          <div className="profile-item">
            <label htmlFor="name">Contact: </label>
            <span className="profile-item-value">7700013317</span>
          </div>
          <div className="profile-item">
            <label htmlFor="name">Qualification: </label>
            <span className="profile-item-value">BA</span>
          </div>
          <div className="profile-item">
            <label htmlFor="name">Experience: </label>
            <span className="profile-item-value">8 years</span>
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
              We are<strong> Hathacons </strong>,
              dedicated to providing the best service to our customers.
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
              <button type="submit" className="f-btn">Submit</button>
            </form>
          </div>
        </div>
        <div className="cr-con">Copyright &copy; 2022 | Made by Hathacons</div>
      </footer>
    </div>
  );
}
}
export default ProfileProvider;