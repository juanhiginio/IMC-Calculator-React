export default function FormCalculadoraIMC() {
  return (
    <form className="form-calculadora-imc">
      <h2 className="form-calculadora-imc__title">Calculadora de IMC</h2>
      <div className="form-calculadora-imc__field">
        <label htmlFor="peso" className="form-calculadora-imc__label">
          Peso (kg):
        </label>
        <input
          type="number"
          id="peso"
          name="peso"
          className="form-calculadora-imc__input"
          required
        />
      </div>
      <div className="form-calculadora-imc__field">
        <label htmlFor="altura" className="form-calculadora-imc__label">
          Altura (cm):
        </label>
        <input
          type="number"
          id="altura"
          name="altura"
          className="form-calculadora-imc__input"
          required
        />
      </div>
      <button type="submit" className="form-calculadora-imc__button">
        Calcular IMC
      </button>
    </form>
  );
}