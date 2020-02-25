import React, { useState, useEffect } from "react";
import {
  NavItem,
  NavCont,
  ItemCont,
  OpenButton,
  LinkCont
} from "../../styles/NavStyles";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [courses, setCourses] = useState([]);

  const toggleSideNav = () => {
    setToggleNav(!toggleNav);
  };

  useEffect(() => {
    axios.get("/api/courses").then(res => {
      setCourses(res.data);
    });
  }, []);

  
  const ascCourses = () => {
    courses.sort(function(a, b) {
      var first = a.title.toUpperCase();
      var last = b.title.toUpperCase();
      return ( first < last) ? -1 : (first > last) ? 1 : 0;
    })
  } 

  const mapCourses = () => {
    ascCourses()
    return courses.map(course => {
      return(

        <div>
        <NavItem>
          <Link
            to={{ pathname: `/courses/${course.id}` }}
            className="borderCenterWhite navItem"
            >
            {course.title}
          </Link>
        </NavItem>
      </div>
            )
    });
  };

  return (
    <div>
      {toggleNav === false ? (
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
                <Link to="/" className="borderCenterWhite navItem">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/courses" className="borderCenterWhite navItem">
                  All Courses
                </Link>
              </NavItem>
              <div>{mapCourses()}</div>
              <NavItem>
                <Link to="/students" className="borderCenterWhite navItem">
                  Students
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
