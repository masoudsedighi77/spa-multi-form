import React from "react";
import "./Step3.css";
import { Link } from "react-router-dom";
import Services from "../../components/services/Services";
const Step3 = () => {
  return (
    <div>
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
            <div id="circle3" className="circle">
              3
            </div>
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
          <h1 className="right-header">Pick add-ons</h1>
          <p className="right-desc">
            Add-ons help enhance your gaming experience.
          </p>

          <div className="side-right-services">
            <Services
              title="Online service"
              desc="Access to multiplayer games"
              price="1/mo"
            />
            <Services
              title="Larger storage"
              desc="Extra 1TB of cloud save"
              price="2/mo"
            />
            <Services
              title="Customizable Profile"
              desc="Custom theme on your profile"
              price="2/mo"
            />
          </div>

          <div className="btn">
            <Link className="back" to="/step2">
              Go back
            </Link>
            <Link className="next" to="/step4">
              Next Step
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
