import React from "react";
import { Link } from "react-router-dom";
import "./Step4.css";
const Step4 = () => {
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
            <div id="circle4" className="circle">
              4
            </div>
            <div className="side-left-steps">
              <span className="step-heading">STEP 4</span>
              <div className="span step-name">SUMMARY</div>
            </div>
          </div>
        </div>
        <div className="side-right">
          <h1 className="right-header">Finishing up</h1>
          <p className="right-desc">
            Double-check everything looks OK before confirming.
          </p>

          <div className="btn">
            <Link className="back" to="/step3">
              Go back
            </Link>
            <Link className="next" to="/confirmed">
              Confirm
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step4;
