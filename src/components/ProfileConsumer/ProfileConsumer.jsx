import React from "react";
import axios from "axios";
import "./profileConsumer.css";
import Navbar from "../Navbar/Navbar";
import { useState, useEffect } from "react";

function ProfileProvider() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = { authorization: `Bearer ${token}` };
    axios
      .get("https://gdsc-mbcet-backend.onrender.com/api/v1/consumer/", { headers })
      .then((resp) => {
        console.log(resp.data);
        setData(resp.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (loading) {
    return <></>;
  } else {
  return (
    <>  
    <div><Navbar/></div>
      <div className="hero-container">
        <div className="profile-info" style={{marginTop:'100px'}}>
         <img src={data.profilePicture} alt="" style={{width: "200px"}} />
          <h3>{data.firstName + " " + data.lastName}</h3>
          <p>Service Consumer</p>
        </div>

        <div className="profile-details">
          <div className="profile-item">
            <label htmlFor="name">Name: </label>
            <span className="profile-item-value">{data.firstName + " " + data.lastName}</span>
          </div>
          <div className="profile-item">
            <label htmlFor="email">Username: </label>
            <span className="profile-item-value">{data.username}</span>
          </div>
          <div className="profile-item">
            <label htmlFor="email">Email: </label>
            <span className="profile-item-value">{data.email}</span>
          </div>
          <div className="profile-item">
            <label htmlFor="name">Age: </label>
            <span className="profile-item-value">{data.age}</span>
          </div>
          <div className="profile-item">
            <label htmlFor="name">Contact: </label>
            <span className="profile-item-value">{data.phone}</span>
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
    </>
  );
}
}

export default ProfileProvider;