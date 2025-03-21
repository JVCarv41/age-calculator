import React, { useState } from "react";
import "./App.css";

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });
  const min_year = 1900;
  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(`${year}-${month}-${day}`);

    if (isNaN(birthDate.getTime())) {
      alert("Por favor, insira uma data válida.");
      return;
    }
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <div className="App">
      <h1>Calculador de Idade</h1>
      <div className="calculator">
        <label htmlFor="birthdate">Insira sua data de Nascimento:</label>
        <div className="date-inputs">
          <input
            type="number"
            placeholder="Dia"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            min="1"
            max="31"
          />
          <input
            type="number"
            placeholder="Mês"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            min="1"
            max="12"
          />
          <input
            type="number"
            placeholder="Ano"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            min={min_year}
            max={new Date().getFullYear()}
          />
        </div>
        <button onClick={calculateAge}>Calcular Idade</button>
      </div>
      {age.years >= 0 && (
        <div className="result">
          <p>Sua idade é:</p>
          <div className="age">
            <p>
              {" "}
              <strong>{age.years}</strong> anos,{" "}
            </p>
            <p>
              {" "}
              <strong>{age.months}</strong> meses e{" "}
            </p>
            <p>
              {" "}
              <strong>{age.days}</strong> dias.{" "}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
