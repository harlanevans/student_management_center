import React from "react";
import "./styles/App.css";
import { Switch, Route } from "react-router-dom";

// File Imports
import Landing from "./components/shared/Landing";
import Navbar from "./components/shared/Navbar";
import StudentsAll from './components/Students/StudentsAll';
import Courses from './components/Courses/Courses';
import CoursePage from './components/Courses/CoursePage';

import StudentPage from './components/Students/StudentPage';
import Rubric from './components/shared/Rubric';
import CHome from './components/Students/check_ins/CHome';

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
            <Route exact path="/courses" component={Courses} />
            <Route exact path="/courses/:id" component={CoursePage} />
            <Route exact path="/students" component={StudentsAll} />
            <Route exact path='/student/:id' component={StudentPage} />
            <Route exact path ='/rubric' component={Rubric} />
            <Route exact path='/check_in/:id' component={CHome} />
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
