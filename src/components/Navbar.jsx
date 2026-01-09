import { Link, NavLink } from "react-router-dom";
import moonLogo from "../images/logo.jpg"; 

export default function Navbar() {
  return (
    <header className="w-full bg-black">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
      
        <Link to="/" className="flex items-center gap-4">
          <span className="font-serif tracking-[0.22em] text-[#c9a24d] text-2xl md:text-3xl">
            AQUELARRE
          </span>

          <img
            src={moonLogo}
            alt="Aquelarre logo"
            className="h-10 w-12 md:h-10 md:w-10 rounded-full object-cover ring-2 ring-[#c9a24d]/50"
          />
        </Link>

        
        <div className="flex items-center gap-8">
          <NavLink
            to="/signin"
            className={({ isActive }) =>
              `font-serif text-lg md:text-xl text-[#c9a24d] transition hover:text-[#e2c36a] ${
                isActive ? "opacity-100" : "opacity-90"
              }`
            }
          >
            Sign In
          </NavLink>

          <NavLink
            to="/register"
            className="font-serif text-lg md:text-xl rounded-full bg-[#c9a24d] px-10 py-3 text-black/90 transition hover:bg-[#e2c36a]"
          >
            Register
          </NavLink>
        </div>
      </nav>
    </header>
  );
}