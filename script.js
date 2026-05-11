

const quotes = [
  { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
  { text: "Fix the cause, not the symptom.", author: "Steve Maguire" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle Onassis" },
  { text: "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.", author: "Plato" },
  { text: "Success is not final; failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Keep your face towards the sunshine and shadows will fall behind you.", author: "Walt Whitman" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "The way to right wrongs is to turn the light of truth upon them.", author: "Ida B. Wells" },
  { text: "Success is falling nine times and getting up ten.", author: "Jon Bon Jovi" },
  { text: "Imagination is more important than knowledge.", author: "Albert Einstein" },
  { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.", author: "Nikola Tesla" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
  { text: "To love beauty is to see light.", author: "Victor Hugo" },
  { text: "When you are loaded you will be needed.", author: "Akerele Emmanuel" },
  {text: "Trust the process", author: "Akerele Emmanuel"}
];

// 2. The Function
function generateQuote() {
  // Use Math.random to pick a random index from the array
  const randomIndex = Math.floor(Math.random() * quotes.length);
  
  // 3. Variables to hold the selected object
  const selectedQuote = quotes[randomIndex];

  // 4. Update the HTML page with the object properties
  document.getElementById("quoteText").innerText = `"${selectedQuote.text}"`;
  document.getElementById("quoteAuthor").innerText = `— ${selectedQuote.author}`;
}

