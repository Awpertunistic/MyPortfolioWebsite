import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ParticleCanvas from "./ParticleCanvas";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <ParticleCanvas />
  </React.StrictMode>
);
