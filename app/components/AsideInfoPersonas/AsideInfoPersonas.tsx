import { VistaPersona } from "../VistaPersona/VistaPersona";
import style from "./AsideInfoPersonas.module.css";

export default function AsideInfoPersonas() {
  let personas = [
    {
      nombre: "Juan Pérez",
      linkImagen: "https://example.com/juanperez.jpg",
      linkGitHub: "https://github.com/juanperez",
      telefono: "+34 600 123 456",
      correo: "juanperez1@hotmail.com",
      descripcionPropia:
        "Apasionado por el desarrollo web y móvil, siempre buscando aprender nuevas tecnologías y mejorar mis habilidades.",
    },
    {
      nombre: "María Gómez",
      linkImagen: "https://example.com/mariagomez.jpg",
      linkGitHub: "https://github.com/mariagomez",
      telefono: "+34 600 987 654",
      correo: "mariagomez1@hotmail.com",
      descripcionPropia:
        "Ingeniera de software con experiencia en desarrollo web y móvil, apasionada por la innovación tecnológica.",
    }
  ];
  return (
    <aside className={style.aside_info_personas}>
      {personas.map((persona) => (
        <VistaPersona key={persona.nombre} persona={persona}></VistaPersona>
      ))}
    </aside>
  );
}