import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoverPage from "./components/coverpage";
import ModulePage from "./components/module"; // Placeholder for the module
import Example from "./components/example";
import Simulator from "./components/simulator";
import Quiz from "./components/quiz"
import Conclusion from "./components/conclusion"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/module" element={<ModulePage />} />
        <Route path="/example" element={<Example />} />
        <Route path="/simulator" element={<Simulator />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/conclusion" element={<Conclusion />} />

      </Routes>
    </Router>
  );
}

export default App;
