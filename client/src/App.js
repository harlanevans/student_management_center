import React from "react";
import "./styles/App.css";
import { Switch, Route } from "react-router-dom";

// File Imports
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

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
