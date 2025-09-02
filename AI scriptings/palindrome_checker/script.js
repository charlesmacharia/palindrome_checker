// grab elements
const input = document.getElementById("input");
const outputDiv = document.getElementById("palindrome_output"); 
const button = document.getElementById("checkBtn");

function reverseString(str) {
  return str.split("").reverse().join("");
}

// main check function
function check() {
  const value = input.value.trim(); // remove spaces

  // if input is empty
  if (value === "") {
    updateOutput("⚠️ Please type a word first.");
    return;
  }

  const reverse = reverseString(value);

  if (value === reverse) {
    updateOutput("✅ Palindrome: " + value);
  } else {
    updateOutput("❌ Not a palindrome: " + value);
  }

  input.value = ""; // clear input after checking
}

// update output div
function updateOutput(text) {
  outputDiv.innerText = text;
}

// attach event listener
button.addEventListener("click", check);
