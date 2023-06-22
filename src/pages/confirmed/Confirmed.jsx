import React from "react";
import "./Confirmed.css";
import { Link } from "react-router-dom";
const Confirmed = () => {
  return (
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
        <div className="confirm-container">
          <img src="images/icon-thank-you.svg" className="confirm-logo" />
          <span className="confirm-span">Thank you!</span>
          <p className="confirm-p">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Confirmed;
