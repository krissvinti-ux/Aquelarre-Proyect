import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Registrer from "./pages/Registrer.jsx"; 
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black flex flex-col">
        {}
        <Navbar />

        {}
        <main className="flex-1 p-10 text-white flex justify-center items-center">
          <Registrer />
        </main>

        {}
        <Footer />
      </div>
    </BrowserRouter>
  );
}