import { useState } from "react";
import ResultadoCalculoIMC from "../ResultadoCalculoIMC/ResultadoCalculoIMC";
import style from "./FormCalculadoraIMC.module.css";

export default function FormCalculadoraIMC() {

  const [nombre, setNombre] = useState<string>("");
  const [pesoLibras, setPesoLibras] = useState<number | "">("");
  const [alturaMetros, setAlturaMetros] = useState<number | "">("");

  const [formularioEnviado, setFormularioEnviado] = useState<boolean>(false);

  function manejarEnvioFormulario(event: React.FormEvent) {
    event.preventDefault();
    if ((nombre && pesoLibras && alturaMetros) && (pesoLibras > 0 && alturaMetros > 0)) {
      setFormularioEnviado(true);
    }
  }

  function manejadorInputPeso(event: React.ChangeEvent<HTMLInputElement>) {
    const valor = event.target.value;
    const peso = parseFloat(valor);
    if (!isNaN(peso) && peso >= 0) {
      setPesoLibras(peso);
    } else if (valor === "") {
      setPesoLibras("");
      setFormularioEnviado(false);
    }
  }

  function manejadorInputAltura(event: React.ChangeEvent<HTMLInputElement>) {
    const valor = event.target.value;
    const altura = parseFloat(valor);
    if (!isNaN(altura) && altura >= 0) {
      setAlturaMetros(altura);
    } else if (valor === "") {
      setAlturaMetros("");
      setFormularioEnviado(false);
    }
  }

  return (
    <div className={style["form-calculadora-imc__container"]}>
      <div>
        <form className={style["form-calculadora-imc"]} onSubmit={manejarEnvioFormulario}>
          <h2 className={style["form-calculadora-imc__title"]}>Calculadora de IMC</h2>
          <div className={style["form-calculadora-imc__field"]}>
            <label htmlFor="nombre" className={style["form-calculadora-imc__label"]}>
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className={style["form-calculadora-imc__input"]}
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div className={style["form-calculadora-imc__field"]}>
            <label htmlFor="altura" className={style["form-calculadora-imc__label"]}>
              Altura (metros):
            </label>
            <input
              type="number"
              id="altura"
              name="altura"
              className={style["form-calculadora-imc__input"]}
              value={alturaMetros}
              onChange={manejadorInputAltura}
              required
            />
          </div>

          <div className={style["form-calculadora-imc__field"]}>
            <label htmlFor="peso" className={style["form-calculadora-imc__label"]}>
              Peso (libras):
            </label>
            <input
              type="number"
              id="peso"
              name="peso"
              className={style["form-calculadora-imc__input"]}
              value={pesoLibras}
              onChange={manejadorInputPeso}
              required
            />
          </div>

          <button type="submit" className={style["form-calculadora-imc__button"]}>
            Calcular IMC
          </button>
        </form>
      </div>

      <div className={style["form-calculadora-imc__resultado"]}>
        {
          formularioEnviado ? <ResultadoCalculoIMC peso={pesoLibras as number} altura={alturaMetros as number} nombre={nombre} /> :
            <div>
              <h3 className={style["form-calculadora-imc__title"]}>Resultado del cálculo de IMC</h3>
              <p className={style["form-calculadora-imc__descripcion"]}>Por favor, completa el formulario y envíalo para ver el resultado del cálculo de IMC.</p>
            </div>
        }
      </div>
    </div>
  );
}