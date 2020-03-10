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
import Logo from "../../assets/DPL_white_logo.png";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [courses, setCourses] = useState([]);
  const [schools, setSchools] = useState([]);

  const toggleSideNav = () => {
    setToggleNav(!toggleNav);
  };

  useEffect(() => {
    axios.get("/api/schools").then(res => {
      setSchools(res.data);
    });
    axios.get("/api/courses").then(res => {
      setCourses(res.data);
    });
  }, []);

  const ascCourses = () => {
    courses.sort(function(a, b) {
      var first = a.title.toUpperCase();
      var last = b.title.toUpperCase();
      return first < last ? -1 : first > last ? 1 : 0;
    });
  };
  const ascSchools = () => {
    schools.sort(function(a, b) {
      var first = a.name.toUpperCase();
      var last = b.name.toUpperCase();
      return first < last ? -1 : first > last ? 1 : 0;
    });
  };

  const mapSchools = () => {
    ascSchools();
    return schools.map(school => {
      return (
        <div>
          <NavItem>
            <Link
              to={{ pathname: `/schools/${school.id}` }}
              className="borderCenterWhite navItem"
            >
              {school.name}
            </Link>
          </NavItem>
        </div>
      );
    });
  };

  const mapCourses = () => {
    ascCourses();
    return courses.map(course => {
      return (
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
      );
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
              {/* <NavItem>
                <Link to="/schools" className="borderCenterWhite navItem">
                  - Schools -
                </Link>
              </NavItem> */}
              <div>{mapSchools()}</div>
              <NavItem>
                <Link to="/courses" className="borderCenterWhite navItem">
                  All Courses
                </Link>
              </NavItem>
              {/* <div>{mapCourses()}</div> */}
              <NavItem>
                <Link to="/students" className="borderCenterWhite navItem">
                  Students
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/rubric" className="borderCenterWhite navItem">
                  Rubric
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/interviews" className="borderCenterWhite navItem">
                  Interviews
                </Link>
              </NavItem>
            </LinkCont>
          </ItemCont>
          {/* </div> */}
          <div style={styles.logoCont}>
            <img src={Logo} style={styles.logo} />
          </div>
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
  },
  logo: {
    width: "50%",
    zIndex: "200"
  },
  logoCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  }
};
