// how to get the  input from html
const input = document.getElementById("input");


function reverseString(str) {
    // this takes the string splits it to its individual letters , 
    // reverses the string then joins as a new word
    //  eg hello => h,e,l,l,o
    return str.split("").reverse().join("")
}

// how to get value of the input 
function check() {
    const value = input.value;
    const reverse = reverseString(value)
    // alert (value)
    // if input is empty
    if (value === "") {
        alert(" ⚠ please type a word first ")
    }
    // if value is inserted 
    // if value = palindrome
    if (value === reverse) {
        updateOutput("✅ T'is a palindrome")
    }
    // if value is not palindrome
    else {
        updateOutput("❌not a palindrome!")
    }

    input.value = ""
}

function updateOutput(text) {
    const outputdiv = document.querySelector(".palindrome_output")
    outputdiv.innerText = text


    if (value == reverse) {
        updateOutput("palindrome")
    } else {
        updateOutput("not a palindrome")
    }
}
// attaching event listener to button
button.addEventListener("click", check, updateOutput)




