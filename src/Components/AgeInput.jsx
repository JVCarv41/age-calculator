import React from "react";

const AgeInput = ({ day, month, year, min_year, onDayChange, onMonthChange, onYearChange, onCalculate }) => {
  return (
    <div className="calculator">
      <label htmlFor="birthdate">Insira sua data de nascimento:</label>
      <div className="date-inputs">
        <input
          type="number"
          placeholder="Dia"
          value={day}
          onChange={onDayChange}
          min="1"
          max="31"
        />
        <input
          type="number"
          placeholder="Mês"
          value={month}
          onChange={onMonthChange}
          min="1"
          max="12"
        />
        <input
          type="number"
          placeholder="Ano"
          value={year}
          onChange={onYearChange}
          min={min_year}
          max={new Date().getFullYear()}
        />
      </div>
      <button onClick={onCalculate}>Calcular Idade</button>
    </div>
  );
};

export default AgeInput;