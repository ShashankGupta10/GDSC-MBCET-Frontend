import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


export default function RegistrationProvider() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    IDProof: "",
    qualification: "",
    experience: "",
    profilePicture: "",
    username: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [age, setAge] = useState('')

  const handleChange = (event) => {
    setAge(event.target.value)
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
    <div style={{
      // backgroundImage: `url(${imageurl})`,
      backgroundPosition: 'left',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '800px',
      backgroundColor: 'lightblue',
      width: '100vw',
      height: '100vh'
    }}>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 2, width: '35ch' },

        }}
        noValidate
        autoComplete="off"
      >
        <div style={{
          display: "grid",
          backgroundColor: 'white',
          gridTemplateColumns: '1fr 1fr',
          alignItems: "center",
          width: "800px",
          position: 'relative',
          left: "40%",
          top: '10vh',
          borderRadius: '10px',
          boxShadow: '0 0 2px 0px black',
          padding: '20px'
        }}>
          <h2 style={{ gridColumn: "2 span", textAlign: 'center' }}>Registration Form</h2>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            id="outlined-basic2"
            label="First Name"
            variant="outlined"
          />
          <TextField
            id="outlined-basic3"
            label="Last Name"
            variant="outlined"
          />
          <TextField
            id="outlined-basic4"
            label="Username"
            variant="outlined"
          />

          <FormControl sx={{ m: 2, width: '35ch' }} variant="outlined">
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

          <TextField
            id="outlined-number"
            label="Age"
            type="number"
          />
          <TextField
            id="outlined-basic5"
            label="Qualification"
            variant="outlined"
          />
          <FormControl sx={{ m: 2, width: "35ch" }}>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="outlined-number2"
            label="Number"
            type="number"
          />
          <TextField
            id="outlined-number3"
            label="Experience in years"
            type="number"
          />
          <div style={{
            gridColumn: 'span 2',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
          }}>
            <Button
              variant="contained"
              component="label"
              value={formData.profilePicture}
              onChange={handleFileUpload}
              sx={{
                textAlign: 'center',
                justifySelf: 'center',
                backgroundColor: "#006494"
              }}
            >
              Upload Profile Picture
              <input type="file" hidden />
            </Button>
            <Button variant="contained" sx={{ marginTop: '10px', backgroundColor: '#006494' }}>Submit</Button>
          </div>
        </div>
      </Box>
    </div>
  );
}
