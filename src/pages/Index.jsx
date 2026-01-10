import background from "../images/background.png";
import logocard from "../images/logocard.png";

export default function Index() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 py-10"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full flex justify-center">
        <div className="w-fit bg-black/50 rounded-2xl px-6 py-5 ">
          <div className="mt-6 flex items-center justify-center gap-6">
            <div className="rotate-[-8deg]">
              <div
                className="w-28 h-44 rounded-xl shadow-xl bg-center bg-no-repeat bg-cover animate-bounce border border-[#c9a24d]/30"
                style={{ backgroundImage: `url(${logocard})` }}
              />

            </div>

            <div className="rotate-[0deg]">
              <div
                className="w-28 h-44 rounded-xl shadow-xl bg-center bg-no-repeat bg-cover animate-bounce border border-[#c9a24d]/30"
                 style={{ backgroundImage: `url(${logocard})` }}
              />
            </div>

            <div className="rotate-[8deg]">
              <div
                className="w-28 h-44 rounded-xl shadow-xl bg-center bg-no-repeat bg-cover animate-bounce border border-[#c9a24d]/30"
                style={{ backgroundImage: `url(${logocard})` }}
              />
    
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
