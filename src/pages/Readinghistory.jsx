import React, { useState, useEffect } from 'react';
import { jsPDF } from "jspdf";
import { Link, useNavigate } from "react-router-dom";

export default function ReadingHistory() {
  const [lecturas, setLecturas] = useState([]);
  const [seleccionada, setSeleccionada] = useState(null);
  const [usuarioActivo, setUsuarioActivo] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const nombreLogueado = localStorage.getItem("nombreUsuario") || "";
    setUsuarioActivo(nombreLogueado);
    const datos = JSON.parse(localStorage.getItem("historialTarot") || "[]");
    const filtrados = datos.filter(l => l.nombre.toLowerCase() === nombreLogueado.toLowerCase());
    setLecturas(filtrados.sort((a, b) => b.id - a.id));
  }, []);

  const borrarLectura = (id) => {
    const todos = JSON.parse(localStorage.getItem("historialTarot") || "[]");
    const actualizados = todos.filter(l => l.id !== id);
    localStorage.setItem("historialTarot", JSON.stringify(actualizados));
    setLecturas(lecturas.filter(l => l.id !== id));
  };

  const descargarPDF = (l) => {
    const doc = new jsPDF();
    doc.text(`Lectura de ${l.nombre}`, 20, 20);
    doc.text(`Fecha: ${l.fecha}`, 20, 30);
    doc.text(doc.splitTextToSize(l.tirada, 170), 20, 50);
    doc.save(`Lectura_${l.nombre}.pdf`);
  };

  const logout = () => {
    localStorage.removeItem("nombreUsuario");
    navigate("/register");
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-10 min-h-screen bg-black text-white">
      <header className="mb-10 flex justify-between items-end">
        <div><h1 className="text-4xl font-serif text-[#c9a24d] uppercase">{usuarioActivo}'s History</h1></div>
        <div className="space-x-4">
          <Link to="/card-selection" className="border border-[#c9a24d] px-4 py-2 text-[#c9a24d]">New Reading</Link>
          <button onClick={logout} className="border border-zinc-800 px-4 py-2 text-zinc-500">Logout</button>
        </div>
      </header>
      {lecturas.length === 0 ? <p>No records found for {usuarioActivo}.</p> : (
        <table className="w-full text-left bg-zinc-950 border border-zinc-800">
          <thead><tr className="text-[#c9a24d] text-xs uppercase border-b border-zinc-800"><th className="p-5">No.</th><th className="p-5">Name</th><th className="p-5">Date</th><th className="p-5 text-right">Actions</th></tr></thead>
          <tbody>
            {lecturas.map((item) => (
              <tr key={item.id} className="border-b border-zinc-900">
                <td className="p-5">#{String(item.numeroTirada).padStart(3, '0')}</td>
                <td className="p-5 italic">{item.nombre}</td>
                <td className="p-5 text-zinc-500">{item.fecha}</td>
                <td className="p-5 text-right space-x-4">
                  <button onClick={() => setSeleccionada(item)} className="text-[#c9a24d] underline">VIEW</button>
                  <button onClick={() => borrarLectura(item.id)} className="text-red-900">DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {seleccionada && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-[#c9a24d]/40 p-10 max-w-2xl w-full">
            <h2 className="text-[#c9a24d] text-3xl italic mb-4">Reading: {seleccionada.nombre}</h2>
            <p className="text-zinc-200 mb-8 italic">"{seleccionada.tirada}"</p>
            <div className="flex gap-4">
              <button onClick={() => descargarPDF(seleccionada)} className="bg-[#c9a24d] text-black px-6 py-2 font-bold">PDF</button>
              <button onClick={() => setSeleccionada(null)} className="border border-zinc-700 px-6 py-2">CLOSE</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}