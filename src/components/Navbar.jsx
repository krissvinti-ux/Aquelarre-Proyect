import { Link, NavLink } from "react-router-dom";
import moonLogo from "../images/logo.jpg";

export default function Navbar({ variant }) {
  return (
    <header className="w-full bg-black border-b border-[#c9a24d]/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">

        <Link to="/" className="relative flex items-center group">
          <span className="font-serif tracking-[0.25em] text-[#c9a24d] text-2xl md:text-4xl z-10 relative pr-4">
            AQUELARRE
          </span>

          <img
            src={moonLogo}
            alt="Aquelarre logo"
            className="
              absolute right-[-65px] top-[60%] -translate-y-1/2 h-20 w-20 md:h-48 md:w-48 object-cover rounded-full opacity-90  mix-blend-screen z-0 transition-transform group-hover:scale-110
            "
          />
        </Link>

        <div className="flex items-center gap-8">
          {variant === "history" ? (
            <>
              <button
                className="font-serif text-lg md:text-xl text-[#c9a24d] hover:text-[#e2c36a] transition"
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                Logout
              </button>
              <Link
                to="/"
                className="text-[#c9a24d] text-3xl hover:scale-125 transition-transform leading-none"
                title="Volver"
              >
                ➜
              </Link>
            </>
          ) : (

            <>
              <NavLink
                to="/signin"
                className={({ isActive }) =>
                  `font-serif text-lg md:text-xl text-[#c9a24d] transition hover:text-[#e2c36a] ${isActive ? "opacity-100 border-b border-[#c9a24d]" : "opacity-80"
                  }`
                }
              >
                Sign In
              </NavLink>

              <NavLink
                to="/register"
                className="font-serif text-lg md:text-xl rounded-full bg-[#c9a24d] px-10 py-3 text-black font-bold shadow-[0_0_15px_rgba(201,162,77,0.3)] transition hover:bg-[#e2c36a]"
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}