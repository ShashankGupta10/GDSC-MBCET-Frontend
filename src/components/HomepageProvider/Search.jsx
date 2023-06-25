import React from "react";
import Navbar from "../Navbar/Navbar";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button";

export default function Search() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px 10px 10px 10px",
          width: "auto",
          gap: "50px",
        }}
        
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "5px",
            gap: "30px",
          }}
          onClick={() => {
            var button = document.querySelector(".bidinfo");
            button.style.display = "flex";
          }}
        >
          <div style={{ display: "flex", gap: "100px" }}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "100px" }}
            >
              <Avatar
                sx={{
                  border: "1px solid black",
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  alignContent: "center",
                  justifyContent: "center",
                }}
                aria-label="recipe"
                alt="Blank"
                src="../../assets/profile.png"
              />
            </div>
            <div style={{ gap: "20px" }}>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                  fontFamily: "Poppins",
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
                  fontFamily: "Poppins",
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
                  fontFamily: "Poppins",
                }}
              >
                {"Contact:9653358140"}
              </Typography>
            </div>
            <p>
              <h5>Job Description:</h5>Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsam id consequuntur doloremque aliquam?
              Cumque, nemo sed? Rem sit voluptates maxime dolor quibusdam non
              enim fuga est nobis ipsa. Totam, excepturi!Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Modi nemo nam et voluptates
              delectus quam ad, possimus ut eum explicabo adipisci in.
              Temporibus quae asperiores eaque cumque aliquid ratione? Delectus.
            </p>
          </div>
          <div className="bidinfo" style={{display:'none',gap: '50px'}}>
            <input required placeholder ="Price" style={{borderRadius:'10px',padding:'10px'}}></input>
            <Button
              sx={{
                width: "150px",
                background: "white",
                border: "2px solid #3a7af0",
                color: "#1B98E0",
                display: "flex",
                justifyContent: "center",
                marginRight: "auto",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#3a7af0",
                  color: "lightgrey",
                },
              }}
              variant="contained"
            >
              BID
            </Button>
          </div>
        </div>
      </Box>
      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px 10px 10px 10px",
          width: "auto",
          gap: "50px",
        }}

      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "5px",
            gap: "30px",
          }}
          onClick={() => {
            var button = document.querySelector(".bidinfo1");
            button.style.display = "flex";
          }}
        >
          <div style={{ display: "flex", gap: "100px" }}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "100px" }}
            >
              <Avatar
                sx={{
                  border: "1px solid black",
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  alignContent: "center",
                  justifyContent: "center",
                }}
                aria-label="recipe"
                alt="Blank"
                src="../../assets/profile.png"
              />
            </div>
            <div style={{ gap: "20px" }}>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                  fontFamily: "Poppins",
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
                  fontFamily: "Poppins",
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
                  fontFamily: "Poppins",
                }}
              >
                {"Contact:9653358140"}
              </Typography>
            </div>
            <p>
              <h5>Job Description:</h5>Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsam id consequuntur doloremque aliquam?
              Cumque, nemo sed? Rem sit voluptates maxime dolor quibusdam non
              enim fuga est nobis ipsa. Totam, excepturi!Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Modi nemo nam et voluptates
              delectus quam ad, possimus ut eum explicabo adipisci in.
              Temporibus quae asperiores eaque cumque aliquid ratione? Delectus.
            </p>
          </div>
          <div className="bidinfo1" style={{display:'none',gap: '50px'}}>
            <input required placeholder ="Price" style={{borderRadius:'10px',padding:'10px'}}></input>
            <Button
              sx={{
                width: "150px",
                background: "white",
                border: "2px solid #3a7af0",
                color: "#1B98E0",
                display: "flex",
                justifyContent: "center",
                marginRight: "auto",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#3a7af0",
                  color: "lightgrey",
                },
              }}
              variant="contained"
            >
              BID
            </Button>
          </div>
          </div>
      </Box>
    </>
  );
}
