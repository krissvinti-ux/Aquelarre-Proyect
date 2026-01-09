import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'

const Layout = () => {
    return (
        <>
        <div className="min-h-screen bg-black flex flex-col">
            <nav><Navbar/></nav>
            <main className="flex-1 p-10 text-white"><Outlet/></main>
            <footer><Footer/></footer>
        </div>
        </>
    ) 
}

export default Layout;
