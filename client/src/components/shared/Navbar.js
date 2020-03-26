import React, { useState, useEffect } from "react";
import {
  NavItem,
  ItemCont,
  OpenButton,
  LinkCont
} from "../../styles/NavStyles";
import Logo from "../../assets/DPL_white_logo.png";
import { Fade } from "react-reveal";

import { AuthConsumer } from "../../providers/AuthProvider";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

const Navbar = props => {
  const [toggleNav, setToggleNav] = useState(false);
  // const [courses, setCourses] = useState([]);
  const [schools, setSchools] = useState([]);
  const [currentUser, setCurrentUser] = useState();

  const toggleSideNav = () => {
    setToggleNav(!toggleNav);
  };

  useEffect(() => {
    setCurrentUser(props.auth.user);
    axios.get("/api/schools").then(res => {
      setSchools(res.data);
    });
    // axios.get("/api/courses").then(res => {
    //   setCourses(res.data);
    // });
  }, [props.auth.user, currentUser]);

  // const ascCourses = () => {
  //   courses.sort(function(a, b) {
  //     var first = a.title.toUpperCase();
  //     var last = b.title.toUpperCase();
  //     return first < last ? -1 : first > last ? 1 : 0;
  //   });
  // };

  const ascSchools = () => {
    schools.sort(function(a, b) {
      var first = a.name.toUpperCase();
      var last = b.name.toUpperCase();
      return first < last ? -1 : first > last ? 1 : 0;
    });
  };

  const mapSchools = () => {
    if (currentUser) {
      ascSchools();
      return schools.map(school => {
        return (
          <div key={school.id}>
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
    } else {
      return null;
    }
  };

  const authenticationItems = () => {
    const { handleLogout } = props.auth;

    if (currentUser) {
      return (
        <NavItem onClick={() => handleLogout(props.history)}>
          <div
            style={{ cursor: "pointer" }}
            className="borderCenterWhite navItem"
          >
            Logout
          </div>
        </NavItem>
      );
    } else {
      return (
        <NavItem>
          <Link to="/login" className="borderCenterWhite navItem">
            Login
          </Link>
        </NavItem>
      );
    }
  };

  // const mapCourses = () => {
  //   ascCourses();
  //   return courses.map(course => {
  //     return (
  //       <div>
  //         <NavItem>
  //           <Link
  //             to={{ pathname: `/courses/${course.id}` }}
  //             className="borderCenterWhite navItem"
  //           >
  //             {course.title}
  //           </Link>
  //         </NavItem>
  //       </div>
  //     );
  //   });
  // };

  const getName = () => {
    if (!currentUser) return null;
    return `Welcome ${currentUser.name}`;
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
                fontSize: "1.25em",
                padding: ".5em 0.25em"
              }}
            >
              <Link to="/" className="borderCenterWhiteHome navItem">
                Student Manangement Center
              </Link>
            </NavItem>
            {currentUser ? (
              <>
                <LinkCont>
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
                  {/* Do I map through courses in the navbar?  */}
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
                    <Link
                      to="/interviews"
                      className="borderCenterWhite navItem"
                    >
                      Interviews
                    </Link>
                  </NavItem>
                </LinkCont>
              </>
            ) : (
              <></>
            )}
          </ItemCont>
          <NavItem style={{ padding: "0" }}>
            <Link to="/account" className="borderCenterWhite navItem">
              {getName()}
            </Link>
          </NavItem>

          <div>
            {authenticationItems()}

            <div style={styles.logoCont}>
              <img src={Logo} style={styles.logo} alt="dpl logo" />
            </div>
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

export const ConnectedNavbar = props => {
  return (
    <AuthConsumer>{auth => <Navbar {...props} auth={auth} />}</AuthConsumer>
  );
};

export default withRouter(ConnectedNavbar);

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
