let currentSlide = 0;
const slider = document.getElementById('slider');
const totalSlides = document.querySelectorAll('.slide').length;
const prevArrow = document.getElementById('prev');
const nextArrow = document.getElementById('next');

// Function to update the slider position
function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 100}vw)`;
  prevArrow.style.display = currentSlide === 0 ? 'none' : 'block';
  nextArrow.style.display = currentSlide === totalSlides - 1 ? 'none' : 'block';
}

// Initialize the slider position when the page loads
window.onload = function() {
  updateSlider();
};

// Event listeners for the arrows
prevArrow.addEventListener('click', function() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  }
});

nextArrow.addEventListener('click', function() {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateSlider();
  }
});

// Dana Quotes calculation function
function calculateDana() {
  const letterToNumber = {
    'c': 1, 'a': 2, 'r': 3, 'b': 4, 'o': 5,
    'n': 6, 'i': 7, 't': 8, 'e': 9, 's': 0
  };

  let letter1 = document.getElementById('letter1Dana').value.toLowerCase();
  let letter2 = document.getElementById('letter2Dana').value.toLowerCase();
  let num1 = letterToNumber[letter1] || 0;
  let num2 = letterToNumber[letter2] || 0;
  let result = (num1 * 10 + num2) * 2.5;

  document.getElementById('outputDana').textContent = `The calculated amount is: $${result.toFixed(2)}`;
}

// Watch Quotes calculation function
function calculateWatch() {
  let quoteAmount = parseFloat(document.getElementById('quoteInputWatch').value);
  let finalQuote = quoteAmount * 1.5;

  // Add an extra $20 for quotes smaller than $30 after multiplying
  if (finalQuote < 30) {
    finalQuote += 20;
  }

  document.getElementById('outputWatch').textContent = `The final quote is: $${finalQuote.toFixed(2)}`;
}

// Attach event listeners for calculation buttons
document.getElementById('calculateButtonDana').addEventListener('click', calculateDana);
document.getElementById('calculateButtonWatch').addEventListener('click', calculateWatch);

// Call updateSlider function to set the initial position of the slider
updateSlider();
