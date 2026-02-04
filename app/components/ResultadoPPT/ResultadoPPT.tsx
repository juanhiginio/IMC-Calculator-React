import "./ResultadoPPT.css";

type Props = {
  usuario: string;
  maquina: string;
  resultado: "ganaste" | "perdiste" | "empate";
};

const imagenResultado = {
  ganaste: "/images/victoria.png",
  perdiste: "/images/derrota.png",
  empate: "/images/empate.png",
};

export default function ResultadoPPT({ usuario, maquina, resultado }: Props) {
  return (
    <div className="resultado-ppt">
      <img
        src={imagenResultado[resultado]}
        alt={resultado}
        className="resultado-img"
      />

      <h3>
        {resultado === "ganaste" && "¡Ganaste!"}
        {resultado === "perdiste" && "Perdiste"}
        {resultado === "empate" && "Empate"}
      </h3>

      <p>
        Tú: <strong>{usuario}</strong> | Máquina:{" "}
        <strong>{maquina}</strong>
      </p>
    </div>
  );
}
