import React from "react";
import "./RightSideMenu.scss";
import nurseWoman from "../../assets/images/nurse-woman.png";
import { Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const RightSideMenu = () => {
  return (
    <div className="right-side-menu">
      <img className="img-nurse" src={nurseWoman} alt="" />
      <div className="contact-engagement">
        <p className="got-question">Got a question ?</p>
        <Button variant="contained" endIcon={<ArrowForwardIosIcon />}>
              Contact Us
            </Button>
        <p className="got-question">Do you have a project idea ?</p>

        <div className="">
          <div className="icon-container">
            <Button variant="contained" endIcon={<EmailIcon />}>
              Contact the business
            </Button>
            {/* <div className="icon-text">
              <EmailIcon />
              <p className="got-question">Contact the business</p>
            </div> */}
            {/* <p className="got-question">Engagement Manager</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideMenu;
