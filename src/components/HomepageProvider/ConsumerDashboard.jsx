import React from "react";
import pth from "../../assets/profile.png";
import one from "../../assets/customericon.png";
import two from "../../assets/pointsicon.png";
import three from "../../assets/staricon.png";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function ConsumerDashboard(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleclick = (bid) => {
    navigate(`/bids/${bid._id}`);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    axios
      .get(
        "https://gdsc-mbcet-backend.onrender.com/api/v1/dashboard/consumer",
        { headers }
      )
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
  }
  return (
    <>
      <div>
        <Navbar isConsumer={true} />
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "380px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "30px",
            flex: "1",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            fontSize: "25px",
            fontWeight: "700",
          }}
        >
          <img src={one} style={{ width: "75px" }}></img>
          <p>{data.pastJobs.length}</p>
          <p>Past Jobs</p>
        </div>
        <div
          style={{
            display: "flex",
            flex: "1",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            fontSize: "25px",
            fontWeight: "700",
            gap: "30px",
          }}
        >
          <img src={two} style={{ width: "75px" }}></img>
          <p>{data.activeBids.length}</p>
          <p>Active Tickets</p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "30px",
            flex: "1",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            fontSize: "25px",
            fontWeight: "700",
          }}
        >
          <img src={three} style={{ width: "75px" }}></img>
          <p>{data.points}</p>
          <p>Points</p>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          padding: "5px 10px",
        }}
      >
        <p
          style={{
            fontWeight: "700",
            fontSize: "40px",
          }}
        >
          Active Tickets
        </p>
        <div
          style={{
            width: "100%",
            padding: "5px 5px",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "30px",
            }}
          >
            {data.activeBids.map((bid) => {
              return (
                <div
                  onClick={() => handleclick(bid)}
                  style={{
                    display: "flex",
                    height: "200px",
                    borderRadius: "10px",
                    boxShadow: "0 0 5px 0",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flex: "1",
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                        borderRadius: "50%",
                      }}
                      src={pth}
                    ></img>
                  </div>
                  <div
                    style={{
                      flex: "2",
                      padding: "15px",
                    }}
                  >
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "30px",
                        fontWeight: "700",
                      }}
                    >
                      {bid.workerType}
                    </p>
                    <div
                      style={{
                        marginTop: "25px",
                        textAlign: "center",
                      }}
                    >
                      <p style={{ fontSize: "18px", marginBottom: "8px" }}>
                        {"Shashank Gupta"}
                      </p>
                      <p style={{ fontSize: "18px", marginBottom: "8px" }}>
                        {bid.date.slice(0, 10)}
                      </p>
                      <p style={{ fontSize: "18px", marginBottom: "8px" }}>
                        No of bids: {bid.bids.length}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "30px",
          width: "100%",
          padding: "5px 10px",
        }}
      >
        <p
          style={{
            fontWeight: "700",
            fontSize: "40px",
          }}
        >
          Previous Job
        </p>
        <div
          style={{
            width: "100%",
            padding: "5px 5px",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "30px",
            }}
          >
            {data.pastJobs.map((work) => {
              return (
                <>
                  <div
                    onClick={handleOpen}
                    style={{
                      display: "flex",
                      height: "200px",
                      borderRadius: "10px",
                      boxShadow: "0 0 5px 0",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flex: "1",
                      }}
                    >
                      <img
                        style={{
                          width: "100%",
                          borderRadius: "50%",
                        }}
                        src={pth}
                      ></img>
                    </div>
                    <div
                      style={{
                        flex: "2",
                        padding: "15px",
                      }}
                    >
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "30px",
                          fontWeight: "700",
                        }}
                      >
                        {work.workerType}
                      </p>
                      <div
                        style={{
                          marginTop: "25px",
                          textAlign: "center",
                        }}
                      >
                        <p style={{ fontSize: "18px", marginBottom: "8px" }}>
                          {work.name}
                        </p>
                        <p style={{ fontSize: "18px", marginBottom: "8px" }}>
                          {work.date.slice(0, 10)}
                        </p>
                        <p style={{ fontSize: "18px", marginBottom: "8px" }}>
                          {work.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        border: "2px solid #000",
                        boxShadow: 24,
                        p: 4,
                      }}
                    >
                      <textarea
                        placeholder="Enter review..."
                        style={{
                          width: "100%",
                          height: "160px",
                          border: "none",
                          resize: "none",
                          backgroundColor: "rgba(0, 0, 0, 0.06)",
                        }}
                      />
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Button
                          variant="contained"
                          sx={{ textAlign: "center" }}
                        >
                          Submit
                        </Button>
                      </div>
                    </Box>
                  </Modal>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
