import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black flex flex-col">
        <Navbar />
        <main className="flex-1 p-10 text-white">HERE ANIMATION</main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}