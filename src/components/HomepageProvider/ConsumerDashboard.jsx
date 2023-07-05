import React from "react";
import pth from "../../assets/profile.png";
import one from "../../assets/customericon.png";
import two from "../../assets/pointsicon.png";
import three from "../../assets/staricon.png";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

export default function ConsumerDashboard(props) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    workerType: "",
    date: "",
    description: "",
    address: "",
  });

  const handleFormChange = (e, field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: e.target.value,
    }));
  };

  const handleSubmitForm = () => {
    const token = localStorage.getItem("token");
    const headers = { authorization: `Bearer ${token}` };
    axios
      .post("http://localhost:3002/api/v1/raiseTicket/", formData, { headers })
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
          <p style={{fontWeight: "700"}}>{data.pastJobs.length}</p>
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
          <p style={{fontWeight: "700"}}>{data.activeBids.length}</p>
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
          <p style={{fontWeight: "700"}}>{data.points}</p>
          <p>Points</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <hr style={{ width: "40%" }} />
        <Button
          onClick={handleOpen}
          sx={{
            backgroundColor: "#006d94",
            margin: "10px",
            "&:hover": {
              backgroundColor: "#007694",
            },
          }}
          variant="contained"
          size="large"
          endIcon={<SendIcon />}
        >
          Raise a Ticket
        </Button>

        <hr style={{ width: "40%" }} />
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
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
              display: "flex",
              justifyContent: "center",
            }}
          >
            <FormControl variant="filled" sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="demo-simple-select-filled-label">
                Job Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={formData.workerType}
                onChange={(e) => handleFormChange(e, "workerType")}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"AC service and repair professional"}>
                  AC service and repair professional
                </MenuItem>
                <MenuItem value={"Academic tutor"}>Academic tutor</MenuItem>
                <MenuItem value={"Architect"}>Architect</MenuItem>
                <MenuItem value={"Art and craft teacher"}>
                  Art and craft teacher
                </MenuItem>
                <MenuItem value={"Ayurvedic practitioner"}>
                  Ayurvedic practitioner
                </MenuItem>

                <MenuItem value={"Beautician"}>Beautician</MenuItem>
                <MenuItem value={"Carpenter"}>Carpenter</MenuItem>
                <MenuItem value={"Caterer"}>Caterer</MenuItem>
                <MenuItem value={"Contractor"}>Contractor</MenuItem>
                <MenuItem value={"Dance instructor"}>Dance instructor</MenuItem>
                <MenuItem value={"Decorator"}>Decorator</MenuItem>
                <MenuItem value={"Dentist"}>Dentist</MenuItem>
                <MenuItem value={"Doctor"}>Doctor</MenuItem>
                <MenuItem value={"DJ and music artist"}>
                  DJ and music artist
                </MenuItem>

                <MenuItem value={"Electrician"}>Electrician</MenuItem>
                <MenuItem value={"Event planner"}>Event planner</MenuItem>

                <MenuItem value={"Fitness trainer"}>Fitness trainer</MenuItem>
                <MenuItem value={"Furniture carpenter"}>
                  Furniture carpenter
                </MenuItem>

                <MenuItem value={"Geyser/water heater repair technician"}>
                  Geyser/water heater repair technician
                </MenuItem>

                <MenuItem value={"Hair stylist"}>Hair stylist</MenuItem>
                <MenuItem value={"Home cleaning professional"}>
                  Home cleaning professional
                </MenuItem>
                <MenuItem value={"Home painter"}>Home painter</MenuItem>
                <MenuItem value={"Homeopathy practitioner"}>
                  Homeopathy practitioner
                </MenuItem>

                <MenuItem value={"Interior designer"}>
                  Interior designer
                </MenuItem>

                <MenuItem value={"Language tutor"}>Language tutor</MenuItem>
                <MenuItem value={"Laptop and computer repair technician"}>
                  Laptop and computer repair technician
                </MenuItem>
                <MenuItem value={"Lawyer"}>Lawyer</MenuItem>

                <MenuItem value={"Makeup artist"}>Makeup artist</MenuItem>
                <MenuItem value={"Marriage and family therapist"}>
                  Marriage and family therapist
                </MenuItem>
                <MenuItem value={"Martial arts trainer"}>
                  Martial arts trainer
                </MenuItem>
                <MenuItem value={"Mehendi artist"}>Mehendi artist</MenuItem>
                <MenuItem value={"Microwave repair technician"}>
                  Microwave repair technician
                </MenuItem>
                <MenuItem value={"Mobile phone repair technician"}>
                  Mobile phone repair technician
                </MenuItem>
                <MenuItem value={"Music teacher"}>Music teacher</MenuItem>

                <MenuItem value={"Nutritionist"}>Nutritionist</MenuItem>

                <MenuItem value={"Pediatrician"}>Pediatrician</MenuItem>
                <MenuItem value={"Pest control expert"}>
                  Pest control expert
                </MenuItem>
                <MenuItem value={"Personal trainer"}>Personal trainer</MenuItem>
                <MenuItem value={"Physiotherapist"}>Physiotherapist</MenuItem>
                <MenuItem value={"Plumber"}>Plumber</MenuItem>

                <MenuItem value={"Refrigerator repair technician"}>
                  Refrigerator repair technician
                </MenuItem>
                <MenuItem value={"RO/Water purifier repair technician"}>
                  RO/Water purifier repair technician
                </MenuItem>

                <MenuItem value={"Spa therapist"}>Spa therapist</MenuItem>

                <MenuItem value={"Television repair technician"}>
                  Television repair technician
                </MenuItem>
                <MenuItem value={"Wedding photographer"}>
                  Wedding photographer
                </MenuItem>
                <MenuItem value={"Washing machine repair technician"}>
                  Washing machine repair technician
                </MenuItem>
                <MenuItem value={"Yoga instructor"}>Yoga instructor</MenuItem>
                <MenuItem value={"Zumba instructor"}>Zumba instructor</MenuItem>
              </Select>

              <input
                type="date"
                value={formData.date}
                onChange={(e) => handleFormChange(e, "date")}
                style={{
                  width: "220px",
                  height: "56px",
                  marginTop: "10px",
                  border: "none",
                  backgroundColor: "rgba(0, 0, 0, 0.06)",
                  color: "rgba(0, 0, 0, 0.5)",
                  fontSize: "18px",
                  borderRadius: "4px",
                }}
              />

              <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) => handleFormChange(e, "description")}
                style={{
                  resize: "none",
                  marginTop: "10px",
                  backgroundColor: "rgba(0, 0, 0, 0.06)",
                  border: "none",
                  height: "56px",
                  padding: "3px 4px",
                  fontSize: "16px",
                }}
              />

              <TextField
                value={formData.address}
                onChange={(e) => handleFormChange(e, "address")}
                id="filled-basic"
                label="Address"
                variant="filled"
                sx={{
                  margin: "10px 0",
                }}
              />

              <Button
                variant="contained"
                sx={{ height: "56px" }}
                onClick={handleSubmitForm}
              >
                Submit
              </Button>
            </FormControl>
          </Box>
        </Modal>
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
                <div
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
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
