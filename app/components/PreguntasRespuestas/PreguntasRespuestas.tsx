import { useState } from "react";
import styles from "./PreguntasRespuestas.module.css";

type Pregunta = {
  pregunta: string;
  respuesta: string;
};

const data: Pregunta[] = [
  {
    pregunta: "¿Qué es React?",
    respuesta:
      "Es una librería de JavaScript para construir interfaces de usuario basadas en componentes."
  },
  {
    pregunta: "¿Qué es la arquitectura de componentes?",
    respuesta:
      "Es una forma de dividir la UI en piezas reutilizables y aisladas."
  },
  {
    pregunta: "¿Qué es JSX?",
    respuesta:
      "Es una extensión de JavaScript que permite escribir HTML dentro de JavaScript."
  },
  {
    pregunta: "¿Qué son los hooks?",
    respuesta:
      "Son funciones que permiten usar estado y otras características de React sin clases."
  },
  {
    pregunta: "¿Que es VITE?",
    respuesta:
      "Vite es una herramienta de construcción rápida para proyectos web modernos que aprovecha las capacidades nativas del navegador y ofrece una experiencia de desarrollo optimizada."
  },
  {
    pregunta: "¿Que es el state?",
    respuesta:
      "El state es una forma de almacenar información que puede cambiar durante la ejecución de una aplicación React."
  },
  {
    pregunta: "¿Que son los props?",
    respuesta:
      "Props (propiedades) son datos que se pasan de un componente padre a un componente hijo."
  }
];

export default function PreguntasRespuestas() {
  const [activa, setActiva] = useState<number | null>(null);

  const togglePregunta = (index: number) => {
    setActiva(activa === index ? null : index);
  };

  return (
    <section className={styles.contenedor}>
      {data.map((item, index) => (
        <div key={index} className={styles.item}>
          <button
            className={`${styles.pregunta} ${
              activa === index ? styles.activa : ""
            }`}
            onClick={() => togglePregunta(index)}
          >
            {item.pregunta}
            <span>{activa === index ? "−" : "+"}</span>
          </button>

          {activa === index && (
            <div className={styles.respuesta}>
              {item.respuesta}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
