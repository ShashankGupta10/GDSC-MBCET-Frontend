import React, { useState } from "react";
import pth from "../../assets/profile.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Bidresults() {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);
  function handleClick() {
    setShowButton(showButton ? false : true);
  }
  return (
    <>
      <div
        style={{
          padding: "10px 20px",
        }}
      >
        <p
          style={{
            display: "flex",
            fontSize: "30px",
            marginBottom: "5px",
            alignItems:'center',
            justifyContent: 'center',

          }}>BIDS</p>
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              height: showButton ? "270px" : "230px",
              borderRadius: "10px",
              boxShadow: "0 0 5px 0",
            }}
            onClick={handleClick}
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
                  height: "100px",
                  borderRadius: "50px",
                }}
                src={pth}
              ></img>
            </div>
            <div
              style={{
                flex: "5",
                padding: "15px",
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                }}
              >
                biddingCost
              </p>
              <div
                style={{
                  display: "grid",
                  marginTop: "25px",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px",
                }}
              >
                <p style={{ fontSize: "18px" }}>Name:</p>
                <p style={{ fontSize: "18px" }}>Date:</p>
                <p style={{ fontSize: "18px" }}>Rating:</p>
                <p style={{ fontSize: "18px" }}>Email:</p>
                <p style={{ fontSize: "18px" }}>Experience:</p>
                <p style={{ fontSize: "18px" }}>Phone:</p>
              </div>
              {showButton && (
                <Box sx={{ "& button": { m: 1 }, }}>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",marginTop:'20px'
                    }}
                  >
                    <Button
                      variant="contained"
                      size="small"
                      sx={{ backgroundColor: "#006494", textAlign: "center" }}
                      onClick={()=>navigate('/consumer')}
                    >
                      Accept
                    </Button>
                  </div>
                </Box>
              )}
            </div>
          </div>








          

          <div
            style={{
              display: "flex",
              height: showButton ? "270px" : "230px",
              borderRadius: "10px",
              boxShadow: "0 0 5px 0",
            }}
            onClick={handleClick}
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
                  height: "100px",
                  borderRadius: "50px",
                }}
                src={pth}
              ></img>
            </div>
            <div
              style={{
                flex: "5",
                padding: "15px",
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                }}
              >
                biddingCost
              </p>
              <div
                style={{
                  display: "grid",
                  marginTop: "25px",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px",
                }}
              >
                <p style={{ fontSize: "18px" }}>Name:</p>
                <p style={{ fontSize: "18px" }}>Date:</p>
                <p style={{ fontSize: "18px" }}>Rating:</p>
                <p style={{ fontSize: "18px" }}>Email:</p>
                <p style={{ fontSize: "18px" }}>Experience:</p>
                <p style={{ fontSize: "18px" }}>Phone:</p>
              </div>
              {showButton && (
                <Box sx={{ "& button": { m: 1 } }}>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",marginTop:'20px'
                    }}
                  >
                    <Button
                      variant="contained"
                      size="small"
                      sx={{ backgroundColor: "#006494", textAlign: "center" }}
                    >
                      Accept
                    </Button>
                  </div>
                </Box>
              )}
            </div>
          </div><div
            style={{
              display: "flex",
              height: showButton ? "270px" : "230px",
              borderRadius: "10px",
              boxShadow: "0 0 5px 0",
            }}
            onClick={handleClick}
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
                  height: "100px",
                  borderRadius: "50px",
                }}
                src={pth}
              ></img>
            </div>
            <div
              style={{
                flex: "5",
                padding: "15px",
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                }}
              >
                biddingCost
              </p>
              <div
                style={{
                  display: "grid",
                  marginTop: "25px",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px",
                }}
              >
                <p style={{ fontSize: "18px" }}>Name:</p>
                <p style={{ fontSize: "18px" }}>Date:</p>
                <p style={{ fontSize: "18px" }}>Rating:</p>
                <p style={{ fontSize: "18px" }}>Email:</p>
                <p style={{ fontSize: "18px" }}>Experience:</p>
                <p style={{ fontSize: "18px" }}>Phone:</p>
              </div>
              {showButton && (
                <Box sx={{ "& button": { m: 1 } }}>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",marginTop:'20px'
                    }}
                  >
                    <Button
                      variant="contained"
                      size="small"
                      sx={{ backgroundColor: "#006494", textAlign: "center" }}
                    >
                      Accept
                    </Button>
                  </div>
                </Box>
              )}
            </div>
          </div><div
            style={{
              display: "flex",
              height: showButton ? "270px" : "230px",
              borderRadius: "10px",
              boxShadow: "0 0 5px 0",
            }}
            onClick={handleClick}
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
                  height: "100px",
                  borderRadius: "50px",
                }}
                src={pth}
              ></img>
            </div>
            <div
              style={{
                flex: "5",
                padding: "15px",
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                }}
              >
                biddingCost
              </p>
              <div
                style={{
                  display: "grid",
                  marginTop: "25px",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px",
                }}
              >
                <p style={{ fontSize: "18px" }}>Name:</p>
                <p style={{ fontSize: "18px" }}>Date:</p>
                <p style={{ fontSize: "18px" }}>Rating:</p>
                <p style={{ fontSize: "18px" }}>Email:</p>
                <p style={{ fontSize: "18px" }}>Experience:</p>
                <p style={{ fontSize: "18px" }}>Phone:</p>
              </div>
              {showButton && (
                <Box sx={{ "& button": { m: 1 } }}>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",marginTop:'20px'
                    }}
                  >
                    <Button
                      variant="contained"
                      size="small"
                      sx={{ backgroundColor: "#006494", textAlign: "center" }}
                    >
                      Accept
                    </Button>
                  </div>
                </Box>
              )}
            </div>
          </div>

            </div>
      </div>
    </>
  );
}