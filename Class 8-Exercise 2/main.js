// //Instructions:

// Create a new HTML file named dom.html and include a button with the class btn and btn_inline.

// Add an onclick event to this button that will call a JavaScript function named changeBackground().

// Within the same HTML file, create a <script> section. Inside this section, define the changeBackground() function. When executed, this function should change the background color of the document.

// Test your code by opening dom.html in a browser and clicking the button. Did the background color change? If not, debug your code.

const btn = document.querySelector('.btn');

btn.addEventListener('click', changeBGColor);

