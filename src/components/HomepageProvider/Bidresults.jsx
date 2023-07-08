import React, { useEffect, useState } from "react";
import pth from "../../assets/profile.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar.jsx";
import { Typography } from "@mui/material";

export default function Bidresults() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = { authorization: `Bearer ${token}` };
    axios
      .get(`http://localhost:3002/api/v1/seeBids/${id}`, { headers })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const navigate = useNavigate();
  const handleClick = () => {
    const token = localStorage.getItem("token");
    const headers = { authorization: `Bearer ${token}` };
    axios
      .patch(`https://gdsc-mbcet-backend.onrender.com/api/v1/acceptBid/${id}`, { headers })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/consumer");
  };

  if (loading) {
    return (
      <>
        <Navbar />
      </>
    );
  } else {
    return (
      <>
        <div>
          <Navbar isConsumer={true} />
        </div>
        <p
          style={{
            display: "flex",
            fontSize: "30px",
            marginBottom: "5px",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "700",
          }}
        >
          BIDS
        </p>
        {data.map((bid) => {
          return (
            <div
              key={bid.feedback}
              style={{
                padding: "10px 20px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "30px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    // height: "270px",
                    borderRadius: "10px",
                    boxShadow: "0 0 5px 0",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flex: "1.5",
                      padding: "12px",
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                        borderRadius: "50px",
                        objectFit: "cover",
                      }}
                      src={pth}
                    ></img>
                  </div>
                  <div
                    style={{
                      flex: "5",
                      padding: "15px",
                    }}
                  >
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "25px",
                      }}
                    >
                      Bid Amount: {bid.amount}
                    </p>
                    <div
                      style={{
                        display: "grid",
                        marginTop: "25px",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "10px",
                        gridRowGap: "15px",
                      }}
                    >
                      <p style={{ fontSize: "18px" }}>Name: {bid.bidder}</p>
                      <p style={{ fontSize: "18px" }}>Date: 12-04-2023</p>
                      <p style={{ fontSize: "18px" }}>
                        Rating: {bid.rating} stars
                      </p>
                      <p style={{ fontSize: "18px" }}>Email: {bid.email}</p>
                      <p style={{ fontSize: "18px" }}>
                        Experience: {bid.experience}
                      </p>
                      <p style={{ fontSize: "18px" }}>Contact: {bid.contact}</p>
                      {/* {bid.feedback.map((comment, index) => (
                        <p key={index}>{comment}</p>
                      ))} */}
                    </div>
                    <div
                      style={{
                        marginTop: "10px",
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{ fontWeight: "700" }}
                      >
                        Reviews
                      </Typography>
                      {data[0].feedback.map((review, index) => (
                        <div key={index}>
                          <Typography variant="body1">
                            {review}
                          </Typography>
                        </div>
                      ))}
                    </div>
                    <Box sx={{ "& button": { m: 1 } }}>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "20px",
                        }}
                      >
                        <Button
                          variant="contained"
                          size="small"
                          sx={{
                            backgroundColor: "#006494",
                            textAlign: "center",
                            padding: "8px 25px",
                          }}
                          onClick={handleClick}
                        >
                          Accept
                        </Button>
                      </div>
                    </Box>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
