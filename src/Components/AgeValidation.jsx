// AgeValidation.js
export const validateDate = (day, month, year, min_year, max_year) => {
    // Check if all fields are filled
    if (!day || !month || !year) {
      return { isValid: false, error: "Por favor, preencha todos os campos." };
    }
  
    // Convert to numbers
    const numericDay = Number(day);
    const numericMonth = Number(month);
    const numericYear = Number(year);
  
    // Basic range validation
    if (numericDay < 1 || numericDay > 31) {
      return { isValid: false, error: "Dia inválido. Insira um valor entre 1 e 31." };
    }
  
    if (numericMonth < 1 || numericMonth > 12) {
      return { isValid: false, error: "Mês inválido. Insira um valor entre 1 e 12." };
    }
  
    if (numericYear < min_year || numericYear > max_year) {
      return { 
        isValid: false, 
        error: `Ano inválido. Insira um valor entre ${min_year} e ${max_year}.` 
      };
    }
  
    // Date object validation
    const birthDate = new Date(`${numericYear}-${numericMonth}-${numericDay}`);
    if (isNaN(birthDate.getTime())) {
      return { isValid: false, error: "Data inválida. Por favor, insira uma data válida." };
    }
  
    // Check if date is in the future
    const today = new Date();
    if (birthDate > today) {
      return { isValid: false, error: "Data futura. Por favor, insira uma data no passado." };
    }
  
    return { isValid: true };
  };