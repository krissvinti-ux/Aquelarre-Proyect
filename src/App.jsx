import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Index from "./pages/Index.jsx"; // ajusta si tu ruta es distinta

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Index />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
