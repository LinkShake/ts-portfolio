import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./routes/LandingPage";
import { SkillsPage } from "./routes/SkillsPage";
import { ProjectsPage } from "./routes/ProjectsPage";
import { PageNotFound } from "./routes/PageNotFound";
import { FontFamily } from "./contexts/FontFamily";
import { BackgroundColor } from "./contexts/BackgroundColor";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <FontFamily.Provider value="SF Mono">
      <BackgroundColor.Provider value="#1a1a1a">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<App />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </BackgroundColor.Provider>
    </FontFamily.Provider>
  </React.StrictMode>
);

reportWebVitals();
