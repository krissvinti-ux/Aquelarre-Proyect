import Registrer from "./Registrer.jsx"; 

export default function Index() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold text-white">Home</h1>
      <p className="text-slate-300 mt-2">Bienvenida a Aquelarre (React + Vite + Tailwind).</p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white">Acción rápida</h2>
          <p className="text-slate-300 mt-2">
            Aquí irá una intro o CTA (selección de cartas, etc.)
          </p>
        </div>
        <Registrer /> 
      </div>
    </section>
  );
}