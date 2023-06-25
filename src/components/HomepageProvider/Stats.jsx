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

const data = {
  No_of_customers: 10,
  starsreceived: 750,
  Experience: 8,
  Points: 10,
};
// const [gotdata, setGotdata] = useState(null)
//   const [loading, setLoading] = useState(true)
//     useEffect(() => {
//       const token = localStorage.getItem("token");
//       console.log(token);
//       const headers = { authorization: `Bearer ${token}` };
//       console.log(headers);
//       axios
//         .get("https://gdsc-mbcet-backend.onrender.com/api/v1/dashboard/provider", {
//           headers,
//         })
//         .then((response) => {
//           console.log(response.data)
//           setLoading(false)
//           setGotdata(response.data)
//         })
//         .catch((err) => {
//           console.log(err);
//           // Handle the error here (e.g., display an error message)
//         });
//     }, []);

//     if(loading){
//       return <></>
//     }
const card = (
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
          <p style={{ fontSize: "30px" }}>{data.No_of_customers}</p>
          <p style={{}}>Number of Customers Attended</p>
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
            <img
              src={starIcon}
              alt="Star"
              style={{ width: "60px" }}
            />
          </div>
          <p style={{ fontSize: "30px", textAlign: "center" }}>
            {data.starsreceived}
          </p>
          <p>Stars Received</p>
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
          <p style={{ fontSize: "30px", textAlign: "center" }}>
            {data.Experience}
          </p>
          <p>Experience</p>
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
          <p style={{ fontSize: "30px", textAlign: "center" }}>{data.Points}</p>
          <p>Points</p>
        </div>
      </div>
    </CardContent>
  </React.Fragment>
);

const pastjobs = (
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
        width: "1920px",
        gap: "50px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "5px",
          gap: "10px",
        }}
      >
        <h2>PENDING BIDS</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <Avatar
              sx={{
                bgcolor: "red[500]",
                objectFit: "cover",
                alignContent: "center",
                justifyContent: "center",
              }}
              aria-label="recipe"
              alt=""
              src="../../"
            />
          </div>
          <div style={{ gap: "20px" }}>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              {"Name: Pranav Patil"}
            </Typography>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              {"Work: Plumbing"}
            </Typography>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              {"Status: Pending"}
            </Typography>
          </div>
        </div>
      </div>
    </Box>
  </CardContent>
);

export default function Stats() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
      <Box sx={{ display: "flex" }}>
        <Card variant="outlined">{pastjobs}</Card>
      </Box>
    </Box>
  );
}
