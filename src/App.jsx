// App.jsx
import React, { useState } from "react";
import "./Styles/App.css";
import AgeInput from "./Components/AgeInput";
import AgeDisplay from "./Components/AgeDisplay";
import { calculateAge } from "./Components/AgeCalculator";

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState({ years: -1, months: 0, days: 0 });
  const min_year = 1900;

  const handleCalculate = () => {
    const result = calculateAge(day, month, year);
    if (result.error) {
      alert(result.error);
      return;
    }
    setAge(result);
  };

  return (
    <div className="App">
      <h1>Calculador de Idade</h1>
      <AgeInput
        day={day}
        month={month}
        year={year}
        min_year={min_year}
        onDayChange={(e) => setDay(e.target.value)}
        onMonthChange={(e) => setMonth(e.target.value)}
        onYearChange={(e) => setYear(e.target.value)}
        onCalculate={handleCalculate}
      />
      <AgeDisplay age={age} />
    </div>
  );
}

export default App;