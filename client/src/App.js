import React from "react";
import "./styles/App.css";
import { Switch, Route } from "react-router-dom";

// File Imports
import Landing from "./components/shared/Landing";
import Navbar from "./components/shared/Navbar";
import StudentsAll from './components/Students/StudentsAll';
import Courses from './components/Courses/Courses';
import CoursePage from './components/Courses/CoursePage';

import Schools from './components/Schools/Schools';
import SchoolPage from './components/Schools/SchoolPage';

import InterviewsPage from './components/interviews/Interviews';
import NewInterview from './components/interviews/NewInterview';
import IntPage from './components/interviews/IntPage';

import StudentPage from './components/Students/StudentPage';
import Rubric from './components/shared/Rubric';
import CHome from './components/Students/check_ins/CHome';

// AUTH
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NoMatch from './components/shared/NoMatch';

const App = () => {
  return (
    <>
      <div style={styles.flex}>
        <div style={styles.flexOne}>
          <Navbar />
        </div>
        <div style={styles.flexTwo}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/schools" component={Schools} />
            <Route exact path="/schools/:id" component={SchoolPage} />
            <Route exact path="/interviews" component={InterviewsPage} />
            <Route exact path="/new_interview" component={NewInterview} />
            <Route exact path="/interview/:id" component={IntPage} />
            <Route exact path="/courses" component={Courses} />
            <Route exact path="/courses/:id" component={CoursePage} />
            <Route exact path="/students" component={StudentsAll} />
            <Route exact path="/student/:id" component={StudentPage} />
            <Route exact path="/rubric" component={Rubric} />
            <Route exact path="/check_in/:id" component={CHome} />
            <Route component={NoMatch} />
          </Switch>
        </div>
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
