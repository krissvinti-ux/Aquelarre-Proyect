import { Outlet, useLocation } from "react-router"; 
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

const Layout = () => {
    const location = useLocation();
    const historyRoutes = ["/historial", "/card-selection", "/card-reading"];
    const navbarVariant = historyRoutes.includes(location.pathname) ? "history" : "default";

    return (
        <div className="min-h-screen bg-black flex flex-col font-sans">

            <nav>
                <Navbar variant={navbarVariant} />
            </nav>

            <main className="flex-1 flex flex-col">
                <Outlet /> 
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    ) 
}

export default Layout;
