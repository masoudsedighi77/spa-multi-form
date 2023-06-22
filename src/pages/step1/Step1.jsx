import React from "react";
import "./Step1.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

const Step1 = () => {
  return (
    <>
      <div className="container">
        <div className="side-left ">
          <div className="step1 side-left-every">
            <div id="circle1" className="circle">
              1
            </div>
            <div className="side-left-steps">
              <span className="step-heading">STEP 1</span>
              <span className="step-name">Your info</span>
            </div>
          </div>
          <div className="step2 side-left-every">
            <div className="circle">2</div>
            <div className="side-left-steps">
              <span className="step-heading">STEP 2</span>
              <div className="span step-name">SELECT PLAN</div>
            </div>
          </div>
          <div className="step3 side-left-every">
            <div className="circle">3</div>
            <div className="side-left-steps">
              <span className="step-heading">STEP 3</span>
              <div className="span step-name">ADD-ONS</div>
            </div>
          </div>
          <div className="step4 side-left-every">
            <div className="circle">4</div>
            <div className="side-left-steps">
              <span className="step-heading">STEP 4</span>
              <div className="span step-name">SUMMARY</div>
            </div>
          </div>
        </div>
        <div className="side-right">
          <h1 className="right-header">Personal Info</h1>
          <p className="right-desc">
            Please provide your name ,email address ,and phone number.
          </p>

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "50ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
            />
          </Box>
          <div className="btn">
            <Link className="next" to="/step2">
              Next Step
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step1;
