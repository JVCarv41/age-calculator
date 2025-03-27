// App.jsx
import React, { useState } from "react";
import "./Styles/App.css";
import AgeInput from "./Components/AgeInput";
import AgeDisplay from "./Components/AgeDisplay";
import { validateDate } from "./Components/AgeValidation";
import { calculateAge } from "./Components/AgeCalculator";

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState({ years: -1, months: 0, days: 0 });
  const min_year = 1900;
  const max_year = new Date().getFullYear();

  const handleCalculate = () => {
    // First validate the date
    const validation = validateDate(day, month, year, min_year, max_year);
    
    if (!validation.isValid) {
      alert(validation.error);
      return;
    }

    // If validation passes, calculate age
    const ageResult = calculateAge(day, month, year);
    setAge(ageResult);
  };

  return (
    <div className="App">
      <h1>Calculador de Idade</h1>
      <AgeInput
        day={day}
        month={month}
        year={year}
        min_year={min_year}
        max_year={max_year}
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