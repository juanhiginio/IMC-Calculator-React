import style from "./IMC.module.css";
import FormCalculadoraIMC from "~/components/FormCalculadoraIMC/FormCalculadoraIMC";

export default function IMC () {
  return (
    <div className={style["imc-page"]}>
      <h1>Calculadora de IMC</h1>
      <p>
        El Índice de Masa Corporal (IMC) es una medida que se utiliza para evaluar si una persona tiene un peso saludable en relación con su altura. Se calcula dividiendo el peso de una persona en kilogramos por el cuadrado de su altura en metros (IMC = peso (kg) / altura (m)²). El IMC se utiliza comúnmente para clasificar a las personas en categorías como bajo peso, peso normal, sobrepeso y obesidad, lo que puede ayudar a identificar riesgos potenciales para la salud relacionados con el peso corporal.
      </p>
      <FormCalculadoraIMC></FormCalculadoraIMC>
    </div>
  );
}