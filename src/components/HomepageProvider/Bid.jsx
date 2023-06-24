import React from 'react'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Bid = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div onClick={() => {
                var button = document.querySelector('.bidinfo');
                button.style.display = 'flex';
            }}
                style={{ justifyContent: 'center', height: 'auto', margin: '50px 50px 50px 50px', display: 'flex', gap: '50px', border: '1px solid black' }}>

                <div style={{ display: 'flex', gap: '20px', width: '100px', alignItems: 'center' }}>
                    <Avatar
                        sx={{ bgcolor: 'red[500]', objectFit: 'cover' }}
                        aria-label="recipe"
                        src={'src\\assets\\pointsicon.png'} // Replace with the actual image source
                    />
                </div>
                <div style={{ flexDirection: 'column' }}>
                    <Typography
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        {"abc"}
                    </Typography>
                    <Typography
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        {"Rating:"}
                    </Typography>
                    <Typography
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        {"Date:"}
                    </Typography>
                </div>
            </div>
            <div onClick={() => alert('Clicked!')}
                style={{ justifyContent: 'center', height: 'auto', margin: '50px 50px 50px 50px', display: 'flex', gap: '50px', border: '1px solid black' }}>

                <div style={{ display: 'flex', gap: '20px', width: '100px', alignItems: 'center' }}>
                    <Avatar
                        sx={{ bgcolor: 'red[500]', objectFit: 'cover' }}
                        aria-label="recipe"
                        src={'src\\assets\\pointsicon.png'}
                    />
                </div>
                <div style={{ flexDirection: 'column' }}>
                    <Typography
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        {"abc"}
                    </Typography>
                    <Typography
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        {"Rating:"}
                    </Typography>
                    <Typography
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        {"Date:"}
                    </Typography>
                </div>
            </div>
            <div className="bidinfo" style={{ display: 'none', alignItems: 'center', }}>
                <label style={{
                    marginBottom: '100px',
                    width: '200px',
                    display: 'flex',
                    justifyContent: 'center',
                    marginLeft: 'auto',
                }} className="price_label" >Price for Bid:</label>
                <Box
                    component="form"
                    sx={{
                        '&.MuiTextField-root': { m: 1, width: '25ch' },
                        marginBottom: '100px',
                        width: '200px',
                        borderRadius: '10px',
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '20px',
                    }}
                    noValidate
                    autoComplete="off">
                    <div>
                        <TextField
                            required
                            borderRadius = "10px"
                            id="outlined-required"
                            defaultValue="100" />
                    </div></Box>

                <Button
                    className="bidButton"
                    sx={{
                        marginBottom: '100px',
                        width: '150px',
                        background: 'white',
                        border: '2px solid #1B98E0',
                        color: '#1B98E0',
                        display: 'flex',
                        justifyContent: 'center',
                        marginLeft: '50px',
                        marginRight: 'auto',
                        borderRadius: '10px',
                        "&:hover": {
                            backgroundColor: '#006494',
                            color: 'lightgrey',
                        }
                    }}
                    variant="contained">BID
                </Button>
            </div>

            <div>
                <Footer />
            </div>
        </>
    )
}

export default Bid
