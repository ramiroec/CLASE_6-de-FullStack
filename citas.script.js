// script.js

const quotes = [
  "El único modo de hacer un gran trabajo es amar lo que haces. - Steve Jobs",
  "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. - Albert Schweitzer",
  "No cuentes los días, haz que los días cuenten. - Muhammad Ali",
  "La vida es 10% lo que te ocurre y 90% cómo reaccionas a ello. - Charles R. Swindoll",
  "El futuro pertenece a aquellos que creen en la belleza de sus sueños. - Eleanor Roosevelt",
  "No dejes que el miedo a perder sea mayor que la emoción de ganar. - Robert Kiyosaki",
  "El único lugar donde el éxito viene antes que el trabajo es en el diccionario. - Vidal Sassoon",
  "La mejor manera de predecir el futuro es inventarlo. - Alan Kay",  
  "No importa lo lento que vayas, siempre y cuando no te detengas. - Confucio",
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día. - Robert Collier"
];

const negativeQuotes = [
  "El fracaso es el condimento que da sabor al éxito. - Truman Capote",
  "El único lugar donde el éxito viene antes que el trabajo es en el diccionario. - Vidal Sassoon",
  "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. - Albert Schweitzer",
  "No cuentes los días, haz que los días cuenten. - Muhammad Ali",
  "La vida es 10% lo que te ocurre y 90% cómo reaccionas a ello. - Charles R. Swindoll",
  "El futuro pertenece a aquellos que creen en la belleza de sus sueños. - Eleanor Roosevelt",
  "No dejes que el miedo a perder sea mayor que la emoción de ganar. - Robert Kiyosaki",
  "La mejor manera de predecir el futuro es inventarlo. - Alan Kay"
];  

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  document.getElementById('quote').innerText = randomQuote;
}

function generateQuoteNegativa() {
  const randomIndex = Math.floor(Math.random() * negativeQuotes.length);
  const randomQuote = negativeQuotes[randomIndex];
  document.getElementById('quoteNegativa').innerText = randomQuote;
}

