export function notANumber (value)  {
  return isNaN(value) || value.trim() == "" || value.includes('e')
}

export function calculateIMC (weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

