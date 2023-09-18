// Create a new HTML file named multiple_buttons.html. In this file, include at least three buttons with the class btn_onclick. Each button can have unique text like "Button 1", "Button 2", and so on.
// In the same HTML file, create a <script> section.
// Inside the script element, use the querySelectorAll method to select all buttons with the class btn_onclick.
// Use the forEach method to loop over each button in the node list.
// For each button, add an onclick event that will change the document's background color when the button is clicked.
// Instead of setting a static color like #a7f3d0, make the color dynamic.
// For an added challenge, assign a different color to each button so that when clicked, they change the background color to a unique hue.
// Test your code by opening multiple_but

const btns = document.querySelectorAll('.btn');

btns.forEach((button) => button.addEventListener('click', changeBGColor));



