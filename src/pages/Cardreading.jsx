import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cardReading.css";


export default function CardReading() {
  const navigate = useNavigate();

  const [cards, setCards] = useState({

    past: null,
    present: null,
    future: null,
  });
  const [usuario, setUsuario] = useState('');

  const [cardIds, setCardIds] = useState([]);

  const translationMap = {
    "Simboliza el intelecto, la sabiduría, la meteorología muestra información valiosa.": "symbolizes intellect and wisdom; meteorology reveals valuable information.",
    "Simboliza la libertad, la evasión.": "symbolizes freedom and escape.",
    "Indica el sigilo.": "indicates stealth.",
    "Simboliza los sentimientos, la expansión, la habilidad de la adivinación.": "symbolizes feelings, expansion, and the ability of divination.",
    "Simboliza la cancelación de planes o procesos debido a agentes externos.": "symbolizes the cancellation of plans or processes due to external agents.",
    "Simboliza el dominio y la integración del medio, de la naturaleza.": "symbolizes mastery and integration with the environment and nature.",
    "Representa la evasión de los problemas.": "represents the avoidance of problems.",
    "Simboliza la esperanza, las ganas, la alegría.": "symbolizes hope, motivation, and joy.",
    "Simboliza un secreto, el pensar antes de hablar, la represión de la libertad de expresión.": "symbolizes a secret, thinking before speaking, and repression of freedom of expression.",
    "Simboliza la parálisis, la energía.": "symbolizes paralysis and energy.",
    "Representa el ataque, la agresión.": "represents attack and aggression.",
    " Representa la salud, el comienzo de un amor, o el florecimiento de algo.": "represents health, the beginning of love, or the blossoming of something.",
    "Simboliza la protección, tanto personal como de algo que nosotros consideremos muy valioso.": "symbolizes protection, both personal and of something we consider valuable.",
    " Simboliza el paso del tiempo, su escasez.": "symbolizes the passage of time and its scarcity.",
    " Esta carta simboliza la superación de obstáculos.": "this card symbolizes overcoming obstacles.",
    "Representa la confusión, lo difuso.": "represents confusion and vagueness.",
    "Simboliza el caos, los problemas.": "symbolizes chaos and problems.",
    " Simboliza la capacidad de tener una visión general sobre algo, o de evadirse de un problema.": "symbolizes the ability to have an overall view of something or to escape from a problem.",
    "Representa la desaparición, el olvido.": "represents disappearance and oblivion.",
    "Esta carta simboliza la iluminación.": "symbolizes enlightenment.",
    "Simboliza un cambio, un movimiento.": "symbolizes change and movement.",
    "Simboliza la destreza y la lucha.": "symbolizes skill and struggle.",
    "Simboliza la continuidad, la perseverancia, una prisión.": "symbolizes continuity, perseverance, and a prison.",
    "Simboliza la paralización, el despiste, el descanso.": "symbolizes paralysis, distraction, and rest.",
    " Simboliza la paz, la tranquilidad y la alegría.": "symbolizes peace, calm, and joy.",
    "Simboliza el retroceso, el decrecimiento, el fracaso.": "symbolizes regression, decline, and failure.",
    " Simboliza el reflejo, la protección.": "symbolizes reflection and protection.",
    " Simboliza la desorientación, una prisión.": "symbolizes disorientation and a prison.",
    "Simboliza la repetición de algo pasado, el mirar hacia atrás.": "symbolizes repetition of the past and looking back.",
    "Representa la agresión.": "represents aggression.",
    "Simboliza la dulzura, la infancia, la protección de nuestros padres.": "symbolizes sweetness, childhood, and parental protection.",
    "Simboliza la velocidad, los reflejos, la capacidad de actuar rápidamente": "symbolizes speed, reflexes, and the ability to act quickly.",
    "Esta carta simboliza el crecimiento, el avance, el éxito.": "this card symbolizes growth, progress, and success.",
    "Simboliza la creación, la imaginación, el desafío.": "symbolizes creation, imagination, and challenge.",
    "Simboliza cambio, apariencia, adaptación.": "symbolizes change, appearance, and adaptation.",
    "Simboliza la dificultad al avanzar, un bloqueo, o la parada de algo.": "symbolizes difficulty moving forward, a blockage, or a halt.",
    "Simboliza la creatividad, la creación, la fuerza de voluntad y el amor.": "symbolizes creativity, creation, willpower, and love.",
    " Esta carta simboliza la precisión, la certeza, un objetivo.": "symbolizes precision, certainty, and a goal.",
    " Simboliza la multitud, la unión, el camuflaje.": "symbolizes the crowd, unity, and camouflage.",
    " Simboliza la adaptación, la comunicación, la expansión.": "symbolizes adaptation, communication, and expansion.",
    "Simboliza la verdad, la justicia, el balance del bien y el mal, el equilibrio.": "symbolizes truth, justice, balance between good and evil, and equilibrium.",
    "Simboliza el camino, el cambio.": "symbolizes the path and change.",
    "Simboliza el bloqueo, la inmovilidad y el fin de los problemas.": "symbolizes blockage, immobility, and the end of problems.",
    "Simboliza la autoridad, la convicción.": "symbolizes authority and conviction.",
    " Simboliza la soledad, la ignorancia, el misterio.": "symbolizes loneliness, ignorance, and mystery.",
    "Esta carta simboliza incertidumbre.": "symbolizes uncertainty.",
    " Simboliza el futuro, la adivinación, los sueños premonitorios.": "symbolizes the future, divination, and prophetic dreams.",
    "Simboliza la seguridad y la tranquilidad.": "symbolizes safety and tranquility.",
    "Simboliza lo oculto, lo que aún está por descubrir, la ventaja.": "symbolizes the hidden, what is yet to be discovered, and advantage.",
    "Simboliza la claridad, la revelación, un futuro brillante.": "symbolizes clarity, revelation, and a bright future.",
    " Simbolizan la dualidad, la compañía, la multiplicación.": "symbolize duality, companionship, and multiplication.",
    "Simboliza la solidez, la sujeción y la vida.": "symbolizes solidity, restraint, and life.",
    " Representa el amor y la amistad.": "represents love and friendship.",
    "Simboliza el espacio vacío, la nada, lo negativo.": "symbolizes empty space, nothingness, and negativity.",
    "Simboliza la esperanza de un amor.": "symbolizes the hope of love."
  };

  const translateMeaningToEnglish = (meaning) => {
    return translationMap[meaning] || meaning;
  };

  useEffect(() => {
    const storedNumbers = localStorage.getItem("Cardsnumber");
    if (storedNumbers) {
      setCardIds(JSON.parse(storedNumbers));
  }
}, []);

  useEffect(() => {
  const nombreGuardado = localStorage.getItem("nombreUsuario");
  if (nombreGuardado) {
    setUsuario(nombreGuardado);
  }
}, []);

  useEffect(() => {
    if (cardIds.length !== 3) return; 

    const fetchCards = async () => {
      try {
        const responses = await Promise.all(
          cardIds.map((id) =>
            fetch(`https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/${id}`)
              .then((res) => res.json())
          )
        );

        const mappedCards = {
          past: {
            image: responses[0].clowCard,
            name: responses[0].englishName,
            meaning: translateMeaningToEnglish(responses[0].meaning),
          },
          present: {
            image: responses[1].clowCard,
            name: responses[1].englishName,
            meaning: translateMeaningToEnglish(responses[1].meaning),
          },
          future: {
            image: responses[2].clowCard,
            name: responses[2].englishName,
            meaning: translateMeaningToEnglish(responses[2].meaning),
          },
        };

        setCards(mappedCards);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, [cardIds]); 

  const savereading = () => {
    if (!cards.past || !cards.present || !cards.future) {
      alert("No cards to save yet!");
      return;
    }

    const historial = JSON.parse(localStorage.getItem("historialTarot") || "[]");

    const nuevaLectura = {
      id: Date.now(), // id único
      numeroTirada: historial.length + 1,
      nombre: usuario || "Invitado",
      fecha: new Date().toLocaleString(),
      tirada: `PAST: ${cards.past.name} - ${cards.past.meaning}\n 
      PRESENT: ${cards.present.name} - ${cards.present.meaning}\n 
      FUTURE: ${cards.future.name} - ${cards.future.meaning}`,
    };

    historial.push(nuevaLectura);
    localStorage.setItem("historialTarot", JSON.stringify(historial));
    navigate("/historial");
  };


  return (
    <div className="card-reading-container">
      <h1 className="intro-message">
        {usuario ? `${usuario}, the cards are ready to reflect your path` : "The cards are ready to reflect your path"}
      </h1>


      <div className="cards-grid">
        {cards.past && cards.present && cards.future && (
          <>
            <div className="clow-card past">
              <h3>PAST</h3>
              <div className="card-image">
                <img src={cards.past.image} alt={cards.past.name} />
              </div>
              <h4 className="card-name">{cards.past.name}</h4>
              <p className="message">
                {`Your past with ${cards.past.name} ${cards.past.meaning}`}
              </p>
            </div>

            <div className="clow-card present">
              <h3>PRESENT</h3>
              <div className="card-image">
                <img src={cards.present.image} alt={cards.present.name} />
              </div>
              <h4 className="card-name">{cards.present.name}</h4>
              <p className="message">
                {`The present with ${cards.present.name} ${cards.present.meaning}`}
              </p>
            </div>

            <div className="clow-card future">
              <h3>FUTURE</h3>
              <div className="card-image">
                <img src={cards.future.image} alt={cards.future.name} />
              </div>
              <h4 className="card-name">{cards.future.name}</h4>
              <p className="message">
                {`Your future with ${cards.future.name} ${cards.future.meaning}`}
              </p>
            </div>
          </>
          
        )}
      </div>
      <div className="buttons-container">
          <button className="gold-button" onClick={() => navigate("/card-selection")}> New Reading</button>
          <button className="gold-button" onClick={savereading}>Save Reading</button>
          <button className="gold-button" onClick={() => navigate("/historial")}> See reading history</button>
      </div>

    </div>
  );
}

