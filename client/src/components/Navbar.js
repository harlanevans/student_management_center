import React, { useState } from "react";
import {
  NavItem,
  NavCont,
  ItemCont,
  OpenButton,
  LinkCont
} from "../styles/NavStyles";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const toggleSideNav = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <div>
      {toggleNav === true ? (
        <div className="gradientBG">
        {/* <div className="fade-in-left"> */}
            <ItemCont>
              <NavItem>
                <OpenButton
                  className="pulseAnimOn"
                  onClick={toggleSideNav}
                ></OpenButton>
              </NavItem>
              <NavItem
                style={{
                  textAlign: "center",
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "1.5em"
                }}
              >
                Student Manangement Center
              </NavItem>

              <LinkCont>
                <NavItem>
                  <Link to="/" className="borderCenter">
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/cohorts" className="borderCenter">
                    Cohorts Page
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/students" className="borderCenter">
                    Students Page
                  </Link>
                </NavItem>
              </LinkCont>
            </ItemCont>
          {/* </div> */}
        </div>
      ) : (
        <div style={styles.buttonCont}>
          <ItemCont>
            <NavItem>
              <Fade right>
                <OpenButton
                  className="pulseAnimOff"
                  onClick={toggleSideNav}
                ></OpenButton>
              </Fade>
            </NavItem>
          </ItemCont>
        </div>
      )}
    </div>
  );
};

export default Navbar;

const styles = {
  buttonCont: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    width: "20%",
    position: "fixed",
    overflow: "auto"
  }
};
