import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button";
import axios from "axios";

export default function Search() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [job, setJob] = useState("");
  const [amount, setAmount] = useState(null);

  const handleMakeBid = (job) => {
    const token = localStorage.getItem("token");
    const headers = { authorization: `Bearer ${token}` };
    console.log(amount)
    axios
      .patch(
        `http://localhost:3002/api/v1/bidTicket/${job._id}/${job.user._id}`,
        {
          amount: amount,
        },
        { headers }
      )
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setJob(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    axios
      .get(`http://localhost:3002/api/v1/searchJobs/?job=${job}`, { headers })
      .then((resp) => {
        console.log(resp.data);
        setData(resp.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [job]);

  if (loading) {
    return <></>;
  } else {
    return (
      <>
        <Navbar />
        <input type="text" name="" id="" value={job} onChange={handleChange} />
        {data.jobs.map((job) => {
          return (
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
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "100px",
                    }}
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
                      src={job.problemImage}
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
                      Name: {job.user.firstName + " " + job.user.lastName}
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
                      Work: {job.workerType}
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
                      Contact: {job.user.phone}
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
                      Date: {job.date.slice(0, 10)}
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
                      Address: {job.address}
                    </Typography>
                  </div>
                  <p>
                    <h5>Job Description:</h5>
                    {job.description}
                  </p>
                </div>
                <div
                  className="bidinfo"
                  style={{ display: "none", gap: "50px" }}
                >
                  <input
                    required
                    placeholder="Price"
                    style={{ borderRadius: "10px", padding: "10px" }}
                    value={amount}
                    onChange={handleAmount}
                  ></input>
                  <Button
                    onClick={() => handleMakeBid(job)}
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
          );
        })}
      </>
    );
  }
}
