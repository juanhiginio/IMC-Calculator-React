import PreguntasRespuestas from "~/components/PreguntasRespuestas/PreguntasRespuestas";
import "./Inicio.css";

export default function Inicio() {
  return (
    <section className="inicio">
      <h1>
        Cargando preguntas y respuestas desde objetos reutilizando componentes
      </h1>

      <PreguntasRespuestas />
    </section>
  );
}
