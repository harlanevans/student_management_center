import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import CourseProvider from "./components/context/CourseProvider";
import { AuthProvider } from "./providers/AuthProvider";
import { initMiddleware } from "devise-axios";
import { StudentProvider } from "./providers/StudentProvider";

initMiddleware();

ReactDOM.render(
  <AuthProvider>
    <StudentProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StudentProvider>
  </AuthProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
