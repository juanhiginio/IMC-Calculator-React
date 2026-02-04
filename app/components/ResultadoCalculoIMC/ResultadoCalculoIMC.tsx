import style from "./ResultadoCalculoIMC.module.css";

export default function ResultadoCalculoIMC({ peso, altura, nombre }: { peso: number, altura: number, nombre: string }) {

  // Conversión de libras a kilogramos
  const pesoKg = peso * 0.453592;

  // Cálculo del IMC
  const imc = pesoKg / (altura * altura);

  let categoria = "";
  let descripcion = "";

  if (imc < 18.5) {
    categoria = "Bajo peso";
    descripcion = "Tu peso está por debajo del rango saludable. Es recomendable consultar con un profesional de la salud.";
  } else if (imc >= 18.5 && imc < 25) {
    categoria = "Peso normal";
    descripcion = "Tu peso se encuentra dentro del rango saludable. ¡Buen trabajo!";
  } else if (imc >= 25 && imc < 30) {
    categoria = "Sobrepeso";
    descripcion = "Tu peso está por encima del rango recomendado. Considera mejorar hábitos alimenticios y actividad física.";
  } else {
    categoria = "Obesidad";
    descripcion = "Tu IMC indica obesidad. Es importante acudir a un profesional de la salud para una evaluación.";
  }

  return (
    <div className={style["resultado-calculo-imc"]}>
      <h3 className={style["resultado-calculo-imc__title"]}>
        Resultado del cálculo de IMC
      </h3>

      <p className={style["resultado-calculo-imc__nombre"]}>
        <strong>Nombre:</strong> {nombre}
      </p>

      <p className={style["resultado-calculo-imc__imc"]}>
        <strong>IMC:</strong> {imc.toFixed(2)}
      </p>

      <p className={style["resultado-calculo-imc__categoria"]}>
        <strong>Categoría:</strong> {categoria}
      </p>

      <p className={style["resultado-calculo-imc__descripcion"]}>
        {descripcion}
      </p>
    </div>
  );
}