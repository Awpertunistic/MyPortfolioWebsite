import React, { useState, useEffect } from "react";
import "./App.scss";
import Axios from "axios";
import Typewriter from "./Typewriter";
import ParticlesBackground from "./particle-background";
import ProjectsSection from "./ProjectSection";


function App() {
  return (
    <div className="App">
      <div className="Header">
        <ParticlesBackground />
        <nav>
          <a href="#top" class="logo">
            N/H
          </a>
          <div>
            <a href="#projects">Projects</a>
            <a href="#form">Form</a>
          </div>
        </nav>
        <div className="Header-text">
          <Typewriter />
        </div>
      </div>
      <ProjectsSection />
      <section id="form">
        <form>
          <h2>Contact Me</h2>
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
          ></input>

          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Your email"
            required
          ></input>

          <label for="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            rows="6"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default App;
