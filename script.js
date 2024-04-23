let currentSlide = 0;
const slider = document.getElementById('slider');
const totalSlides = document.querySelectorAll('.slide').length;
const prevArrow = document.getElementById('prev');
const nextArrow = document.getElementById('next');

// Initial display of arrows based on slide index
function displayArrows() {
    if (currentSlide === 0) {
        prevArrow.style.display = 'none';
        nextArrow.style.display = 'block';
    } else if (currentSlide === totalSlides - 1) {
        prevArrow.style.display = 'block';
        nextArrow.style.display = 'none';
    } else {
        prevArrow.style.display = 'block';
        nextArrow.style.display = 'block';
    }
}

// Event listener for next button
nextArrow.addEventListener('click', function() {
    if (currentSlide < totalSlides - 1) {
        currentSlide += 1;
        slider.style.transform = `translateX(-${currentSlide * 100}vw)`;
    }
    displayArrows();
});

// Event listener for previous button
prevArrow.addEventListener('click', function() {
    if (currentSlide > 0) {
        currentSlide -= 1;
        slider.style.transform = `translateX(-${currentSlide * 100}vw)`;
    }
    displayArrows();
});

// Initialize slider position and arrows on page load
window.onload = function() {
    slider.style.transform = `translateX(-${currentSlide * 100}vw)`;
    displayArrows();
};
// Dana Quotes calculation
function calculateDana() {
    const letterToNumber = {
        'c': 1, 'a': 2, 'r': 3, 'b': 4,
        'o': 5, 'n': 6, 'i': 7, 't': 8,
        'e': 9, 's': 0
    };
  
    let letter1 = document.getElementById('letter1Dana').value.toLowerCase();
    let letter2 = document.getElementById('letter2Dana').value.toLowerCase();
    let num1 = letterToNumber[letter1] || 0;
    let num2 = letterToNumber[letter2] || 0;
    let result = (num1 * 10 + num2) * 2.5;
  
    let formattedResult = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(result);
    document.getElementById('outputDana').textContent = `The calculated amount is: ${formattedResult}`;
}

// Watch Quotes calculation
function calculateWatch() {
    const inputAmount = parseFloat(document.getElementById('quoteInputWatch').value);
    if (isNaN(inputAmount)) {
        document.getElementById('outputWatch').textContent = "Please enter a valid number.";
        return;
    }

    let finalQuote = inputAmount * 2.5;

    // Add an extra $20 for quotes smaller than $30 after multiplying
    if (finalQuote < 30) {
        finalQuote += 20;
    }

    document.getElementById('outputWatch').textContent = `The final quote is: $${finalQuote.toFixed(2)}`;
}

// Attach event listeners for the buttons
document.getElementById('calculateButtonDana').addEventListener('click', calculateDana);
document.getElementById('calculateButtonWatch').addEventListener('click', calculateWatch);

// Initialize the slider position when the page loads
document.addEventListener('DOMContentLoaded', function() {
    slider.style.transform = 'translateX(0vw)'; // Start at the first slide
});
