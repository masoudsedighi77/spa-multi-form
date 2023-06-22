// import React from "react";
import "./Template.css";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

const Template = () => {
  return (
    <>
      <div className="container">
        <div className="side-left ">
          <div className="step1 side-left-every">
            <div className="circle">1</div>
            <div className="side-left-steps">
              <span className="step-heading">STEP 1</span>
              <span className="step-name">Your info</span>
            </div>
          </div>
          <div className="step2 side-left-every">
            <div className="circle">2</div>
            <div className="side-left-steps">
              <span className="step-heading">STEP 2</span>
              <div className="span step-name">Your info</div>
            </div>
          </div>
          <div className="step3 side-left-every">
            <div className="circle">3</div>
            <div className="side-left-steps">
              <span className="step-heading">STEP 3</span>
              <div className="span step-name">Your info</div>
            </div>
          </div>
          <div className="step4 side-left-every">
            <div className="circle">4</div>
            <div className="side-left-steps">
              <span className="step-heading">STEP 4</span>
              <div className="span step-name">Your info</div>
            </div>
          </div>
        </div>
        <div className="side-right">
          <h1 className="right-header">Personal Info</h1>
          <p className="right-desc">
            Please provide yourself and describe yourself
          </p>
          {/* <form action="#" className="right-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />

            <label htmlFor="email">Email Address</label>
            <input type="text" id="email" />

            <label htmlFor="phone-number">Phone Number</label>
            <input type="text" id="phone-number" />
          </form> */}

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
            <button className="back">Go Back</button>
            <button className="next">Next Step</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template;
