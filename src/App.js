import React, { useState } from "react";
import "./App.css";

function App() {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(birthdate);

    if (isNaN(birthDate.getTime())) {
      alert("Please enter a valid date.");
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
        <input
          type="date"
          id="birthdate"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <button onClick={calculateAge}>Calcular Idade</button>
      </div>
      {
        <div className="result">
          <p>
            Sua idade é: <strong>{age.years}</strong> anos,{" "}
            <strong>{age.months}</strong> meses e <strong>{age.days}</strong>{" "}
            dias.
          </p>
        </div>
      }
    </div>
  );
}

export default App;
