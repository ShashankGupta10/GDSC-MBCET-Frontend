import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import customerIcon from "../../assets/customericon.png";
import starIcon from "../../assets/staricon.png";
import experienceIcon from "../../assets/experienceicon.png";
import pointsIcon from "../../assets/pointsicon.png";
import { Diversity1Outlined, Lan } from "@mui/icons-material";

const data = {
  No_of_customers: 10,
  starsreceived: 45,
  Experience: "8 years",
  Points: 100,
};

export default function Stats() {
  const [gotdata, setGotdata] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    const headers = { authorization: `Bearer ${token}` };
    console.log(headers);
    axios
      .get("http://localhost:3002/api/v1/dashboard/provider", {
        headers,
      })
      .then((response) => {
        console.log(response.data);
        setLoading(false);
        setGotdata(response.data);
      })
      .catch((err) => {
        console.log(err);
        // Handle the error here (e.g., display an error message)
      });
  }, []);

  if (loading) {
    return <></>;
  } else {
    return (
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <React.Fragment>
            <CardContent>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div
                  style={{
                    display: "flex",
                    marginTop: "50px",
                    flexDirection: "column",
                    alignItems: "center",
                    fontSize: "20px",
                    fontFamily: "Poppins",
                    justifyContent: "center",
                    gap: "20px",
                    flex: 1.5,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#FFBDF7",
                      borderRadius: "50%",
                      width: "100px",
                      height: "100px",
                      padding: "10px",
                    }}
                  >
                    <img
                      src={customerIcon}
                      alt="Star"
                      style={{ width: "60px" }}
                    />
                  </div>
                  <p style={{ fontSize: "30px", fontWeight: "700" }}>
                    {data.No_of_customers}
                  </p>
                  <p style={{ fontWeight: "550" }}>
                    Number of Customers Attended
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    marginTop: "50px",
                    flexDirection: "column",
                    alignItems: "center",
                    fontSize: "20px",
                    fontFamily: "Poppins",
                    justifyContent: "center",
                    gap: "20px",
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#FFE4A7",
                      borderRadius: "50%",
                      width: "100px",
                      height: "100px",
                      padding: "10px",
                    }}
                  >
                    <img src={starIcon} alt="Star" style={{ width: "60px" }} />
                  </div>
                  <p
                    style={{
                      fontSize: "30px",
                      textAlign: "center",
                      fontWeight: "700",
                    }}
                  >
                    {data.starsreceived}
                  </p>
                  <p style={{ fontWeight: "550" }}>Stars Received</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    marginTop: "50px",
                    flexDirection: "column",
                    alignItems: "center",
                    fontSize: "20px",
                    fontFamily: "Poppins",
                    justifyContent: "center",
                    gap: "20px",
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#DAFFFB",
                      borderRadius: "50%",
                      width: "100px",
                      height: "100px",
                      padding: "10px",
                    }}
                  >
                    <img
                      src={experienceIcon}
                      alt="Star"
                      style={{ width: "60px" }}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: "30px",
                      textAlign: "center",
                      fontWeight: "700",
                    }}
                  >
                    {data.Experience}
                  </p>
                  <p style={{ fontWeight: "550" }}>Experience</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    marginTop: "50px",
                    flexDirection: "column",
                    alignItems: "center",
                    fontSize: "20px",
                    fontFamily: "Poppins",
                    justifyContent: "center",
                    gap: "20px",
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#FFD0D0",
                      borderRadius: "50%",
                      width: "100px",
                      height: "100px",
                      padding: "10px",
                    }}
                  >
                    <img
                      src={pointsIcon}
                      alt="Star"
                      style={{ width: "60px" }}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: "30px",
                      textAlign: "center",
                      fontWeight: "700",
                    }}
                  >
                    {data.Points}
                  </p>
                  <p style={{ fontWeight: "550" }}>Points</p>
                </div>
              </div>
            </CardContent>
          </React.Fragment>
        </Card>
        <h2 style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>PENDING BIDS</h2>
        {gotdata.openTickets.map((ticket) => {
          return (
            <>
              {" "}
              
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "30px 0 30px 0",
                }}
              >
                <Card variant="outlined">
                  <CardContent>
                    <Box
                      sx={{
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        padding: "16px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "10px 10px 10px 10px",
                        gap: "50px",
                      }}
                    >
                      <div
                        style={{
                          width: "50vw",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          padding: "5px",
                          gap: "10px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "20px",
                              width: "auto",
                            }}
                          >
                            <img
                              style={{
                                display: "flex",
                                height: "",
                                width: "30%",
                                objectFit: "contain",
                              }}
                              src="src\assets\profile.png"
                              alt="img"
                            ></img>
                          </div>
                          <div style={{ gap: "20px" }}>
                            <div
                              style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "10px",
                              }}
                            >
                              <Typography
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  padding: "10px",
                                  border: "1px solid #ccc",
                                }}
                              >
                                {"Shashank Gupta"}
                              </Typography>
                              <Typography
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  padding: "10px",
                                  border: "1px solid #ccc",
                                }}
                              >
                                {ticket.workerType}
                              </Typography>
                            </div>
                            <div
                              style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "10px",
                              }}
                            >
                              <Typography
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  padding: "10px",
                                  border: "1px solid #ccc",
                                }}
                              >
                                {ticket.date}
                              </Typography>
                              <Typography
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  padding: "10px",
                                  border: "1px solid #ccc",
                                }}
                              >
                                {"Amount Bid: 400/-"}
                              </Typography>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "50px",
                              }}
                            >
                              <p style={{ marginTop: "30px" }}>
                                Address : {ticket.address}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </>
          );
        })}
      </Box>
    );
  }
}
