import React, { useState } from "react";
import axios from "axios";
import profile from "../../assets/profile.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state/appStates"


export default function Login_Provider() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

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
      .post("https://gdsc-mbcet-backend.onrender.com/api/v1/auth/provider/login", formData)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          const token = response.data.token;
          localStorage.setItem("token", token);
            dispatch(setLogin(response.data));
            navigate("/home/provider"); 
          }
        
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error(error);
      });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{
      textAlign: 'center',
      justifyContent: 'center',
      display: 'flex',
      paddingTop: '90px',
      paddingBottom: '90px',
      backgroundColor: '#e1e3eb'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        height: '550px',
        width: '35%',
        boxShadow: '11px 12px 13px 12px rgb(207, 207, 207)',
        paddingTop: '30px',
        borderRadius: '60px',
        backgroundColor: 'white'
      }} >
        <div>
          <div style={{
            paddingTop: '20px',
            justifyContent: 'center',
            display: 'flex'
          }}>
            <div style={{
              backgroundColor: 'rgb(223, 221, 221)',
              borderRadius: '150px',
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              height: '115px',
              width: '115px'
            }}>
              <img src={profile} alt="profile" style={{

                backgroundColor: 'rgb(223, 221, 221)',
                borderRadius: '150px',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
                height: '115px',
                width: '115px',
              }} />
            </div>
          </div>
          <div>
            <h1 style={{ marginBottom: '20px' }}>Login Page</h1>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 2, width: '40ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="Username" variant="outlined" />
            </Box>
            <div className="second-input">
              <FormControl sx={{ m: 0, width: '40ch', marginBottom: '25px' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </div>
            <div>
              <button onClick={()=> navigate("/provider")} style={{

                width: '300px',
                height: '50px',
                borderRadius: '60px',
                backgroundColor: '#006494',
                color: 'white',
                fontSize: '25px',
                border: 'none',
              }}>Login</button>
            </div>
            <p style={{
              marginTop: '8px',
              fontSize: "15px",
              fontWeight: "400"
            }}>
              <a href="#">Forgot password ?</a> Or <a href="#">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}