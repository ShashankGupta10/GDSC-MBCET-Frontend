import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import imageurl from "../../assets/reg.svg";

export default function RegistrationConsumer() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    profilePicture: "",
    username: "",
    password: "",
    phone: "",
    code: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [age, setAge] = useState("");

  const handleChange = (e, fieldName) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
    // Make the POST request to the backend
    axios
      .post("https://gdsc-mbcet-backend.onrender.com/api/v1/auth/consumer/signup", formData)
      .then((response) => {
        // Handle the response from the backend
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error(error);
      });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=ba5c6e720eec6b5c66f3df836a24d9fc`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      const link = data.data.url;
      console.log(link);
      setFormData((prevFormData) => ({
        ...prevFormData,
        profilePicture: link,
      }));
    } catch (error) {
      console.error("Error uploading file to ImgBB:", error);
    }
  };
  return (
    <div
      style={{
        background:
          "linear-gradient(164deg, rgba(7,86,194,1) 15%, rgba(30,134,231,1) 26%, rgba(0,212,255,1) 80%)",
        backgroundColor: "rgb(8,86,194) ",

        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        backgroundSize: "800px",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${imageurl})`,
          top: "150px",
          left: "80px",
          position: "absolute",
          width: "550px",
          height: "550px",
        }}
      ></div>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 2, width: "35ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div
          style={{
            display: "grid",
            backgroundColor: "#f5f5f5",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            width: "900px",
            paddingTop: "75px",
            position: "relative",
            left: "40%",
            top: "20vh",
            borderRadius: "10px",
            boxShadow:
              "rgba(255, 255, 255, 0.35) 0px 50px 100px -20px, rgba(255, 255, 255, 0.5) 0px 30px 60px -30px, rgba(255, 255, 255, 0.55) 0px -2px 6px 0px inset",
            paddingLeft: "70px",
            paddingBottom: "85px",
          }}
        >
          <h2
            style={{
              gridColumn: "2 span",
              textAlign: "center",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            Registration Form
          </h2>

          <TextField
            id="outlined-basic2"
            label="First Name"
            variant="outlined"
            value={formData.firstName}
            onChange={(e) => handleChange(e, "firstName")}
          />

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={formData.email}
            onChange={(e) => handleChange(e, "email")}
          />

          <TextField
            id="outlined-basic3"
            label="Last Name"
            variant="outlined"
            value={formData.lastName}
            onChange={(e) => handleChange(e, "lastName")}
          />
          <TextField
            id="outlined-basic4"
            label="Username"
            variant="outlined"
            value={formData.username}
            onChange={(e) => handleChange(e, "username")}
          />

          <TextField
            id="outlined-number"
            label="Age"
            type="number"
            value={formData.age}
            onChange={(e) => handleChange(e, "age")}
          />

          <FormControl sx={{ m: 2, width: "35ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              onChange={(e) => handleChange(e, "password")}
              value={formData.password}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <FormControl sx={{ m: 2, width: "35ch" }}>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={useState.gender}
              label="Age"
              // onChange={handleChange}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="outlined-number"
            label="phone"
            type="number"
            value={formData.phone}
            onChange={(e) => handleChange(e, "phone")}
          />
          <TextField
            id="outlined-number"
            label="Referral Code"
            type="number"
            value={formData.code}
            onChange={(e) => handleChange(e, "code")}
          />
          <div
            style={{
              gridColumn: "span 2",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{ marginTop: "10px", backgroundColor: "#006494" }}
            >
              Submit
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
}
