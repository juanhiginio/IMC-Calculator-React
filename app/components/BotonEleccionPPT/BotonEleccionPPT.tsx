export default function BotonEleccionPPT({
  texto,
  seleccionado,
  onClick,
}: {
  texto: string;
  seleccionado: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`boton-eleccion-ppt ${
        seleccionado ? "boton-eleccion-ppt--seleccionado" : ""
      }`}
      onClick={onClick}
    >
      {texto}
    </button>
  );
}