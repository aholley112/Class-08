// Exercise #1
// Objective: Understand DOM Selection.
// Instructions:
// Use JavaScript to select the element with an ID of "myDiv" and change its background color to "lightblue". Select all the paragraph (<p>) elements on the page and log their inner text.
// Starter code:

document.getElementById("myDiv").style.backgroundColor = "lightblue";

const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(paragraph => {
    console.log(paragraph.innerText);
});




  

