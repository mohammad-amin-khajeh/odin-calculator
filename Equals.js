function calculate(equatationText) {
  if (equatationText.endsWith("+" || "÷" || "×" || "-")) return equatationText;

  const equatation = equatationText.replaceAll("×", "*").replaceAll("÷", "/");
  return Math.round(eval(equatation) * 1000) / 1000;
}

export default calculate;
