import React, { useState, useEffect } from 'react';
import { jsPDF } from "jspdf";

export default function ReadingHistory() {
  const [lecturas, setLecturas] = useState([]);
  const [seleccionada, setSeleccionada] = useState(null);

  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem("historialTarot") || "[]");
    setLecturas(datos);
  }, []);

  const borrarLectura = (id) => {
    const nuevoHistorial = lecturas.filter(l => l.id !== id);
    setLecturas(nuevoHistorial);
    localStorage.setItem("historialTarot", JSON.stringify(nuevoHistorial));
  };

  const descargarPDF = (lectura) => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("AQUELARRE - TU LECTURA", 20, 20);
    doc.setFontSize(12);
    doc.text(`Consultante: ${lectura.nombre}`, 20, 40);
    doc.text(`Fecha: ${lectura.fecha}`, 20, 50);
    const splitText = doc.splitTextToSize(lectura.tirada, 170);
    doc.text(splitText, 20, 70);
    doc.save(`Lectura_${lectura.nombre}.pdf`);
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-10 min-h-screen bg-black">
      <header className="mb-10">
        <h1 className="text-4xl font-serif text-[#c9a24d] uppercase tracking-tighter">
          Reading History
        </h1>
        <div className="h-1 w-20 bg-[#c9a24d] mt-2"></div>
      </header>

      {lecturas.length === 0 ? (
        <div className="text-center py-20 border border-zinc-800 rounded-lg">
          <p className="text-zinc-500">No records are available yet.</p>
        </div>
      ) : (
        <div className="overflow-x-auto border border-zinc-800 rounded-lg bg-zinc-950">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-zinc-800 text-[#c9a24d] text-xs uppercase tracking-widest">
                <th className="p-5">No. Card reading</th>
                <th className="p-5">Name</th>
                <th className="p-5">Date</th>
                <th className="p-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-900 text-zinc-300">
              {lecturas.map((item) => (
                <tr key={item.id} className="hover:bg-zinc-900/40 transition-colors">
                  <td className="p-5">#{item.numeroTirada}</td>
                  <td className="p-5 font-semibold">{item.nombre}</td>
                  <td className="p-5 text-zinc-500">{item.fecha}</td>
                  <td className="p-5 text-right space-x-6">
                    <button 
                      onClick={() => setSeleccionada(item)}
                      className="text-[#c9a24d] hover:text-white font-bold text-xs underline decoration-1 underline-offset-4"
                    >
                      VISUALIZAR
                    </button>
                    <button 
                      onClick={() => borrarLectura(item.id)}
                      className="text-red-900 hover:text-red-500 font-bold text-xs"
                    >
                      BORRAR
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {seleccionada && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center p-4 z-50">
          <div className="bg-zinc-900 border border-[#c9a24d]/40 p-10 max-w-2xl w-full rounded-none shadow-2xl">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-[#c9a24d] text-3xl font-serif italic">Lectura de {seleccionada.nombre}</h2>
              <button onClick={() => setSeleccionada(null)} className="text-zinc-500 hover:text-white">✕</button>
            </div>
            
            <p className="text-zinc-500 text-sm mb-6">Realizada el {seleccionada.fecha}</p>
            
            <div className="text-zinc-200 text-lg leading-relaxed mb-10 bg-black/30 p-4 border-l-2 border-[#c9a24d]">
              "{seleccionada.tirada}"
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => descargarPDF(seleccionada)}
                className="py-3 bg-[#c9a24d] text-black font-bold uppercase text-xs tracking-widest hover:bg-[#e2c36a]"
              >
                Descargar PDF
              </button>
              <button 
                onClick={() => setSeleccionada(null)}
                className="py-3 border border-zinc-700 text-zinc-400 font-bold uppercase text-xs tracking-widest hover:bg-zinc-800"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}