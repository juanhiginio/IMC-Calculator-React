import { useState } from "react";
import BotonEleccionPPT from "../../components/BotonEleccionPPT/BotonEleccionPPT";
import ResultadoPPT from "../../components/ResultadoPPT/ResultadoPPT";
import "./PPT.css";

type OpcionPPT = {
  id: "piedra" | "papel" | "tijera";
  nombre: string;
  imagen: string;
};

const opciones: OpcionPPT[] = [
  { id: "piedra", nombre: "Piedra", imagen: "/images/piedra.png" },
  { id: "papel", nombre: "Papel", imagen: "/images/papel.png" },
  { id: "tijera", nombre: "Tijera", imagen: "/images/tijeras.png" },
];


type Resultado = "ganaste" | "perdiste" | "empate";

function jugadaMaquina(): OpcionPPT["id"] {
  const indice = Math.floor(Math.random() * opciones.length);
  return opciones[indice].id;
}

function compararJugadas(
  usuario: OpcionPPT["id"],
  maquina: OpcionPPT["id"]
): Resultado {
  if (usuario === maquina) return "empate";

  if (
    (usuario === "piedra" && maquina === "tijera") ||
    (usuario === "papel" && maquina === "piedra") ||
    (usuario === "tijera" && maquina === "papel")
  ) {
    return "ganaste";
  }

  return "perdiste";
}

export default function PPT() {
  const [jugadaUsuario, setJugadaUsuario] =
    useState<OpcionPPT["id"] | null>(null);
  const [jugadaCPU, setJugadaCPU] =
    useState<OpcionPPT["id"] | null>(null);
  const [resultado, setResultado] = useState<Resultado | null>(null);

  const [victorias, setVictorias] = useState(0);
  const [derrotas, setDerrotas] = useState(0);

  const handleElegir = (id: OpcionPPT["id"]) => {
    const cpu = jugadaMaquina();
    const res = compararJugadas(id, cpu);

    setJugadaUsuario(id);
    setJugadaCPU(cpu);
    setResultado(res);

    if (res === "ganaste") setVictorias((v) => v + 1);
    if (res === "perdiste") setDerrotas((d) => d + 1);
  };

  return (
    <section className="ppt-container">
      <div className="ppt-opciones">
        {opciones.map((opcion) => (
          <BotonEleccionPPT
            key={opcion.id}
            id={opcion.id}
            nombre={opcion.nombre}
            imagen={opcion.imagen}
            onElegir={handleElegir}
          />
        ))}
      </div>

      {resultado && jugadaUsuario && jugadaCPU && (
        <ResultadoPPT
          usuario={jugadaUsuario}
          maquina={jugadaCPU}
          resultado={resultado}
        />
      )}

      <div className="ppt-contadores">
        <p>Victorias: <strong>{victorias}</strong></p>
        <p>Derrotas: <strong>{derrotas}</strong></p>
      </div>

    </section>
  );
}
