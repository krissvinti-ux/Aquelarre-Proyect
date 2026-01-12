import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Index from "./pages/Index.jsx";
import CardSelection from "./pages/CardSelection.jsx";

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-dark">
      <Navbar />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/card-selection" element={<CardSelection />} />          
          {/* si aún no tienes CardReading, usa esto: */}
          <Route path="/card-reading" element={<div className="text-white p-4">CardReading pendiente</div>} />
          
        </Routes>
      </main>

      <Footer />
    </div>
  );
}