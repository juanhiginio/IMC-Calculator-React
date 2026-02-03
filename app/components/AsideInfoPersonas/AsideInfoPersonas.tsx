import { useState } from "react";
import { VistaPersona } from "../VistaPersona/VistaPersona";
import style from "./AsideInfoPersonas.module.css";

export default function AsideInfoPersonas() {

  // Lista Personas
  let personas = [
    {
      nombre: "Juan Pérez",
      linkImagen: "juanPerez.jpeg",
      linkGitHub: "https://github.com/juanperez",
      telefono: "+34 600 123 456",
      correo: "juanperez1@hotmail.com",
      descripcionPropia:
        "Apasionado por el desarrollo web y móvil, siempre buscando aprender nuevas tecnologías y mejorar mis habilidades.",
    },
    {
      nombre: "María Gómez",
      linkImagen: "mariaGomez.jpg",
      linkGitHub: "https://github.com/mariagomez",
      telefono: "+34 600 987 654",
      correo: "mariagomez1@hotmail.com",
      descripcionPropia:
        "Ingeniera de software con experiencia en desarrollo web y móvil, apasionada por la innovación tecnológica.",
    }
  ];

  // -------------------------------------------------------

  const [personaSeleccionada, setPersonaSeleccionada] = useState(personas[0]);

  function manejarSeleccionPersona(persona: any) {
    setPersonaSeleccionada(persona);
  }

  return (
    <aside className={style.aside_info_personas}>
      <div className={style.aside_info_personas__elegir__persona}>
        {personas.map((persona) => (
          <button className={style.aside_info_personas__elegir__persona__boton} key={persona.nombre} onClick={() => manejarSeleccionPersona(persona)}>
            {persona.nombre}
          </button>
        ))}
      </div>
        <VistaPersona persona={personaSeleccionada}></VistaPersona>
    </aside>
  );
}