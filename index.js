// Write your code here!
// Remove the DOM node with id 'main'
const mainNode = document.getElementById('main');
mainNode.parentNode.removeChild(mainNode);

// Create a new <h1> node
const newHeader = document.createElement('h1');

// Set the id of the new <h1> node to 'victory'
newHeader.setAttribute('id', 'victory');

// Set the text content of the new <h1> node
const yourName = 'John Doe'; // Replace 'John Doe' with your name
newHeader.textContent = `${yourName} is the champion`;

// Append the new <h1> node to the <body> element
document.body.appendChild(newHeader);