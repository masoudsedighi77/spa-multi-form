import React from "react";
import "./Step2.css";

import Widget from "../../components/widget/Widget";
import { Link } from "react-router-dom";
const Step2 = () => {
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
            <div id="circle2" className="circle">
              2
            </div>
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
          <h1 className="right-header">Select your plan</h1>
          <p className="right-desc">
            Ypu have the option of monthly or yearly biling
          </p>
          <div className="side-right-widget">
            <Widget img="images/icon-arcade.svg" title="Arcade" plan="$59/mo" />
            <Widget
              img="images/icon-advanced.svg"
              title="Advanced"
              plan="$12/mo"
            />
            <Widget img="images/icon-pro.svg" title="Pro" plan="$15/mo" />
          </div>
          <div className="side-right-switch">
            <span className="switch-span" id="month">
              Monthly
            </span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <span className="switch-plan" id="year">
              Yearly
            </span>
          </div>
          <div className="btn">
            <Link className="back" to="/">
              Go back
            </Link>
            <Link className="next" to="/step3">
              Next Step
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step2;
