// Importamos los styles específicos del Header
import styles from "./Header.module.css";

import { NavLink } from "react-router";

export default function Header() {
    let rutas = [
        {
            nombre: "Inicio",
            enlace: "/Inicio"
        },
        {
            nombre: "IMC",
            enlace: "/CalculadoraIMC"
        },
        {
            nombre: "PPT",
            enlace: "/PPT"
        }
    ];
    return (
        <header className={styles.header}>
            <nav className={styles.header__nav}>
                <ul className={styles.header__list}>
                    {
                        rutas.map((ruta) => (
                            <li key={ruta.enlace} className={styles.header__item}>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? `${styles.link_item} ${styles.active}`
                                            : styles.link_item
                                    }
                                    to={ruta.enlace}>
                                    {ruta.nombre}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
}