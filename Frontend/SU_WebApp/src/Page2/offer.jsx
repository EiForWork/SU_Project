// import React from "react";
import './off.css';
import Navbar from "../Navbar/Narbar";
import Footer from "../Footer/Footer";
import React from 'react';

function Offer() {

 


  return (
    <>
      <Navbar />

      <form className="form">
        <div className="first_Row">
          <div className="inputform">
            <span>First Name *</span><br />
            <input type="text" />
          </div>

          <div className="inputform">
            <span>Last Name *</span><br />
            <input type="text" />
          </div>
        </div>

        <div className="first_Row">
          <div className="inputform">
            <span>Email *</span><br />
            <input type="text" />
          </div>

          <div className="inputform">
            <span>Tel *</span><br />
            <input type="text" />
          </div>
        </div>

        <div className="details">
          <span>รายละเอียด *</span><br />
          <textarea rows="5" cols="50"></textarea>
        </div>

        {/* Uncomment the following lines to add a submit button */}
        <input type="submit" value="Submit" className="Button" />
      </form>

      <Footer />
    </>
  );
}

export default Offer;
