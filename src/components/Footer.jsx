import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-black py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">

        <div className="-mb-1">
          <img
            src="/brujas.png"
            alt="Brujas"
            className="h-14 w-auto object-contain opacity-60"
          />
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-serif tracking-wide text-[#c9a24d] text-sm md:text-base">
            Discover the many facets of being and how the tarot can help you
          </p>

          <p className="text-zinc-400 text-xs md:text-sm">
            Get a free tarot reading
          </p>

          <div className="text-xs md:text-sm">
            <Link
              to="/privacy"
              className="text-[#c9a24d] transition hover:text-[#e2c36a]"
            >
              Privacy Policy
            </Link>

            <span className="mx-2 text-[#c9a24d]/70">|</span>

            <Link
              to="/cookies"
              className="text-[#c9a24d] transition hover:text-[#e2c36a]"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}