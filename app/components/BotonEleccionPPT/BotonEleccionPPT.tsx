import styles from "./BotonEleccionPPT.module.css";

type Props = {
  id: "piedra" | "papel" | "tijera";
  nombre: string;
  imagen: string;
  onElegir: (id: "piedra" | "papel" | "tijera") => void;
};

export default function BotonEleccionPPT({
  id,
  nombre,
  imagen,
  onElegir,
}: Props) {
  return (
    <button
      className={styles.botonPPT}
      onClick={() => onElegir(id)}
    >
      <img
        src={imagen}
        alt={nombre}
        className={styles.imagen}
      />
      <span className={styles.nombre}>{nombre}</span>
    </button>
  );
}
