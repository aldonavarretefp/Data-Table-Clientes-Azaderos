import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {AzaderosApp} from './AzaderosApp';

// BrowserRouter is a React component that renders a <Router> with some
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <AzaderosApp />,
  document.getElementById("root")
);

