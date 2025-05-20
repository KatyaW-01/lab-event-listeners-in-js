// Handle Button Clicks
const body = document.querySelector("body")
// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Implement the function to change background color
  body.style.backgroundColor = "blue"
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  // Implement the function to reset background color
  body.style.backgroundColor = "white"
}

// Capture Keyboard Input
const keyPress = document.querySelector("#keyPressDisplay")
// Function to display the key pressed by the user
function displayKeyPress(event) {
  // Implement the function to display key pressed
  keyPress.textContent = event.key
}

// Process Text Input
const userInput = document.querySelector("#textInputDisplay")
// Function to display user input in real-time
function displayUserInput(event) {
  // Implement the function to display user input
  userInput.textContent = event.target.value
}

// Attach Event Listeners

// Attach event listener to change background color when the button is clicked
document
  .getElementById('changeColorButton')
  .addEventListener('click', changeBackgroundColor)

// Attach event listener to reset background color when the body is double-clicked
document
  .getElementById('resetColorButton')
  .addEventListener('dblclick', resetBackgroundColor)

// Attach event listener to display key pressed when a key is pressed down
document.addEventListener('keydown', displayKeyPress)

// Attach event listener to display user input in real-time as they type
document.getElementById('textInput').addEventListener('input', displayUserInput)

module.exports = {
  displayKeyPress,
  displayUserInput
}
