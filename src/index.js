import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <head>
      <title>Vertical Scroll</title>
      <link
        href="https://api.fontshare.com/v2/css?f[]=chillax@600,500,300,700,400,200&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://api.fontshare.com/v2/css?f[]=anton@400&display=swap"
        rel="stylesheet"
      ></link>
    </head>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
