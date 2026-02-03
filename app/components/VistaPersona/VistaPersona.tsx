import style from "./VistaPersona.module.css";

export function VistaPersona( { persona } : { persona: any } ) {
  return (
    <div className={style.vista_persona}>
        <section className={style.vista_persona__foto__contenedor}>
            <img src={`/public/images/${persona.linkImagen}`} alt={persona.nombre}></img>
        </section>
        <section className={style.vista_persona__nombre__contenedor}>
            <h3 className={style.vista_persona__nombre}>{persona.nombre}</h3>
        </section>
        <section className={style.vista_persona__info__contenedor}>
            <ul>
                <li className={style.vista_persona__link_github}>
                    <a href={persona.linkGitHub} target="_blank" rel="noopener noreferrer">
                        GitHub: {persona.linkGitHub}
                    </a>
                </li>
                <li className={style.vista_persona__contacto__telefono}>    
                    Teléfono: {persona.telefono}
                </li>
                <li className={style.vista_persona__contacto__correo}>
                    Correo: {persona.correo}
                </li>
                <li className={style.vista_persona__descripcion__contenedor}>
                    Descripción: {persona.descripcionPropia}
                </li>
            </ul>
        </section>
    </div>
  );
}