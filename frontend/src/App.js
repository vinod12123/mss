import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AIConsultingPage from "./pages/AIConsultingPage";
import ContactPage from "./pages/ContactPage";
import SolutionsPage from "./pages/SolutionsPage";
import IndustriesPage from "./pages/IndustriesPage";
import InsightsPage from "./pages/InsightsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ai-consulting" element={<AIConsultingPage />} />
          <Route path="/ai-consulting/*" element={<AIConsultingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/*" element={<SolutionsPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/*" element={<IndustriesPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/*" element={<InsightsPage />} />
          <Route path="/leadership" element={<AboutPage />} />
          <Route path="/newsroom" element={<InsightsPage />} />
          <Route path="/careers" element={<ContactPage />} />
          <Route path="/success-stories" element={<InsightsPage />} />
          <Route path="/success-stories/*" element={<InsightsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
