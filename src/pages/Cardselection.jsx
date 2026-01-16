import { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../images/background.png";
import logocard from "../images/logocard.png";

export default function CardSelection() {

    const navigate = useNavigate();
    const API_URL = "https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/";

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const labels = ["Present", "Past", "Future"];
    const [selected, setSelected] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [apiCards, setApiCards] = useState([]);
    const [revealed, setRevealed] = useState([false, false, false]);

    function selectCard(id) {
        if (selected.includes(id)) {
            const newSelected = selected.filter((x) => x !== id);
            setSelected(newSelected);
            return;
        }

        if (selected.length === 3) return;

        setSelected([...selected, id]);
    }

    function pick3Random(list) {
        const copy = [...list];
        copy.sort(() => Math.random() - 0.5);
        return copy.slice(0, 3);
    }
    async function readMyFortune() {
        if (selected.length !== 3) return;

        setShowResults(true);
        setLoading(true);
        setError("");

        setRevealed([false, false, false]);

        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error("No se pudo cargar la API");
            }
            const data = await response.json();
            if (!Array.isArray(data)) {
                throw new Error("La API no devolvió una lista");
            }
            const list = [];
            for (let i = 0; i < data.length; i++) {
                const c = data[i];

                if (!c) continue;
                if (Number(c.cardNumber) === 52) continue;
                if (!c.clowCard) continue;
                if (typeof c.clowCard !== "string") continue;
                if (c.clowCard.trim() === "") continue;

                list.push({
                    id: c.id,
                    cardNumber: c.cardNumber,
                    spanishName: c.spanishName,
                    clowCard: c.clowCard,
                });
            }

            if (list.length < 3) {
                throw new Error("No hay suficientes cartas para escoger 3.");
            }
            const random3 = pick3Random(list);
            setApiCards(random3);

            localStorage.setItem(
                "Cardsnumber",
                JSON.stringify(random3.map(c => c.cardNumber))
            );

            setTimeout(() => {
                setRevealed([true, true, true]);
            }, 80);

        } catch (e) {
            setApiCards([]);
            setError(e.message || "Error desconocido");
        }
        setLoading(false);
    }
    function interpretar() {
        navigate("/card-reading");
    }
    return (
        <section
            className="min-h-screen bg-black flex justify-center items-center px-4 py-10"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="p-6 rounded-xl w-full max-w-5xl">
                <h1 className="text-2xl mb-4 text-center bg-black font-serif text-[#c9a24d]">
                    Choose three cards
                </h1>

                <div className="relative w-full max-w-6xl h-80 md:h-96 mx-auto mb-8">
                    {cards.map((id, idx) => {
                        const pos = selected.indexOf(id);

                        const maxAngle = 28;
                        const radius = 240;
                        const topBase = 10;
                        const spread = 2.45;

                        const t = cards.length === 1 ? 0 : (idx / (cards.length - 1)) * 2 - 1;
                        const angle = t * maxAngle;
                        const rad = (angle * Math.PI) / 180;

                        const x = Math.sin(rad) * radius * spread;
                        const y = (1 - Math.cos(rad)) * radius * 0.9;

                        const zIndex = 1000 - Math.abs(Math.round(angle));

                        return (
                            <div
                                key={id}
                                onClick={() => selectCard(id)}
                                className={`absolute w-32 h-48 md:w-44 md:h-64 rounded-xl cursor-pointer ${pos !== -1 ? "ring-2 ring-amber-400" : ""} `}
                                style={{
                                    left: "50%",
                                    top: topBase,
                                    zIndex,
                                    backgroundImage: `url(${logocard})`,
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    transform: `translateX(-50%) translateX(${x}px) translateY(${y}px) rotate(${angle}deg)`,
                                    transformOrigin: "50% 90%",
                                }}
                            >
                                {pos !== -1 && (
                                    <span className="absolute-top-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-full">
                                        {labels[pos]}
                                    </span>
                                )}
                            </div>
                        );
                    })}
                </div>
                <button
                    onClick={readMyFortune}
                    disabled={selected.length !== 3 || loading}
                    className="w-full bg-black font-serif text-white py-2 rounded-lg disabled:cursor-not-allowed"
                >
                    {loading ? "Loading..." : "Flip the cards 🃏"}
                </button>

                {showResults && (
                    <div className="mt-8 bg-black p-6 rounded-xl">
                        <h2 className="text-center font-serif text-[#c9a24d] text-lg md:text-xl mb-6">
                            Your cards
                        </h2>

                        {error !== "" && (
                            <p className="text-red-300 text-center mb-4">{error}</p>
                        )}

                        {error === "" && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
                                {apiCards.map((c, i) => (
                                    <div key={i} className="flex flex-col items-center">
                                        <div className="flip-card w-48 h-80">
                                            <div className={`flip-inner ${revealed[i] ? "flipped" : ""}`}>
                                                <div className="flip-face">
                                                    <img
                                                        src={logocard}
                                                        alt="Reverso"
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                <div className="flip-face flip-front">
                                                    <img
                                                        src={c.clowCard}
                                                        alt={c.spanishName}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {!loading && error === "" && apiCards.length === 3 && (
                            <button
                                onClick={interpretar}
                                className="w-full mt-8 bg-white text-black font-serif py-2 rounded-lg"
                            >
                                Interpret
                            </button>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
