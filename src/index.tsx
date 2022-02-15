import React from "react";
import ReactDOM from "react-dom";
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import App from "./Components/App";

import "bootstrap/dist/css/bootstrap.min.css";

Amplify.configure(awsExports);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
