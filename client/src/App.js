import React from "react";
import "./styles/App.css";
import { Switch, Route } from "react-router-dom";

// File Imports
import Landing from "./components/shared/Landing";
import Navbar from "./components/shared/Navbar";
import StudentsAll from "./components/Students/StudentsAll";
import Courses from "./components/Courses/Courses";
import CoursePage from "./components/Courses/CoursePage";

import Schools from "./components/Schools/Schools";
import SchoolPage from "./components/Schools/SchoolPage";

import InterviewsPage from "./components/interviews/Interviews";
import NewInterview from "./components/interviews/NewInterview";
import IntPage from "./components/interviews/IntPage";

import StudentPage from "./components/Students/StudentPage";
import Rubric from "./components/shared/Rubric";
import CHome from "./components/Students/check_ins/CHome";

import MainInt from './components/Students/interviews/MainInt';
import StuInt from './components/Students/interviews/StuInt';

// AUTH
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import NoMatch from "./components/shared/NoMatch";
import FetchUser from "./components/auth/FetchUser";
import ProtectedRoute from './components/auth/ProtectedRoute';

import Account from './components/accounts/Account';

const App = () => {
  return (
    <>
      <div style={styles.flex}>
        <FetchUser>
          <div style={styles.flexOne}>
            <Navbar />
          </div>
          <div style={styles.flexTwo}>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register-staff" component={Register} />
              <ProtectedRoute exact path="/schools" component={Schools} />
              <ProtectedRoute
                exact
                path="/schools/:id"
                component={SchoolPage}
              />
              <ProtectedRoute
                exact
                path="/interviews"
                component={InterviewsPage}
              />
              <ProtectedRoute
                exact
                path="/new_interview"
                component={NewInterview}
              />
              <ProtectedRoute exact path="/interview/:id" component={IntPage} />
              <ProtectedRoute exact path="/courses" component={Courses} />
              <ProtectedRoute
                exact
                path="/courses/:id"
                component={CoursePage}
              />
              <ProtectedRoute exact path="/students" component={StudentsAll} />
              <ProtectedRoute
                exact
                path="/student/:id"
                component={StudentPage}
              />
              <ProtectedRoute exact path="/rubric" component={Rubric} />
              <ProtectedRoute exact path="/check_in/:id" component={CHome} />
              <ProtectedRoute exact path="/account" component={Account} />
              <ProtectedRoute
                exact
                path="/students/:id/student_interviews"
                component={MainInt}
              />
              <ProtectedRoute
                exact
                path="/student/:student_id/student_interview/:id"
                component={StuInt}
              />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </FetchUser>
      </div>
    </>
  );
};

export default App;

const styles = {
  flexOne: {
    flex: "20%"
  },
  flexTwo: {
    flex: "80%"
  },
  flex: {
    display: "flex"
  }
};
