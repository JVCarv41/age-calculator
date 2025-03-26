// AgeCalculator.js
export const calculateAge = (day, month, year) => {
    const today = new Date();
    const birthDate = new Date(`${year}-${month}-${day}`);
  
    if (isNaN(birthDate.getTime())) {
      return { error: "Por favor, insira uma data válida." };
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
  
    return { years, months, days };
  };