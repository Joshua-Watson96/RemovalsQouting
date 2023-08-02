import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Headermain } from '../heading/heading';
import "./landingPage.css"

export const LandingPage = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const handleShowDisclaimer = () => {
    setShowDisclaimer(true);
  };

  const handleHideDisclaimer = () => {
    setShowDisclaimer(false);
  };

  return (
    <header className="header">
      <Headermain />
      <body className="landingBody">
        <div>
          <h1> DISCLAIMER:</h1>
          {!showDisclaimer ? (
            <p>
              Please use this quote as a rough estimate/guide only. <br />
              There are a lot of different variables that could <br />
              make the job quicker, or slower. If you would like <br />
              to continue, please click 'Start free quote'.
            </p>
          ) : null}
          <Link to='questionOne'>
            <button type="submit" className="startBtn">
              Start Free Quote
            </button>
          </Link>
          <Link to="/">
            <button type="submit" className="loginBtn">
              Log out here
            </button>
          </Link>
          {showDisclaimer ? (
            <>
              <p>
              Our rate is $195+GST per hour (2.5 hr minimum) for two experienced movers and a 50 cubic metre truck, large enough to accommodate a standard 4 bedroom home (rate increases to $230 p/h +GST on Saturdays). <br/>
               This rate includes all necessary insurances, tolls and our damage free guarantee, should anything be damaged during your move it will be repaired or replaced*.<br/>
               Time starts from the moment we arrive at your pick up address until we put the last item down at your drop off address with a 45 minute depot return added at the end of the job.<br/>
               <br/>
               *Exclusions apply to boxes you've packed yourself, pot plants, refrigerators that are not wrapped in protective foam, particle/chip board furniture and internals of electrical appliances. <br/>
               Please notify us of any damage with 48 hours of your move.

              </p>
              <button
                type="submit"
                className="hideButton"
                onClick={handleHideDisclaimer}
              >
                Hide Charging Info
              </button>
            </>
          ) : (
            <button
              type="submit"
              className="showButton"
              onClick={handleShowDisclaimer}
            >
              View the way we charge
            </button>
          )}
        </div>
      </body>
    </header>
  );
};


