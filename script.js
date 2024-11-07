console.log("Hello, world !")

const button = document.querySelector(".test");
const container = document.querySelector(".container");
const userInputLength = document.querySelector("#userInput");

const noNumInput = document.querySelector("#noNum")
const noSpecInput = document.querySelector("#noSpec");



const generatePassword = (userInputLength) => {
    let result = "";
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const nombre = "0123456789"
    const specChar = "&é'(-è_çà)=/*-+.!:;,ù*$";

    const allChar = alphabet + alphabet.toUpperCase() + nombre + specChar;
    const noNumbers = alphabet + alphabet.toUpperCase() + specChar;
    const noSpec = alphabet + alphabet.toUpperCase() + nombre;
    const noNumNoSpec = alphabet + alphabet.toUpperCase();

    if(noNumInput.checked && noSpecInput.checked){
        for (let i = 0; i < userInputLength; i++){
        const noNumNoSpecRandom = Math.floor(Math.random() * noNumNoSpec.length);
        result += noNumNoSpec[noNumNoSpecRandom];
        }
        return result;
    } else if(noNumInput.checked){
        for (let i = 0; i < userInputLength; i++){
        const noNumbersRandom = Math.floor(Math.random() * noNumbers.length);
        result += noNumbers[noNumbersRandom];
        }
        return result;
    } else if(noSpecInput.checked){
        for (let i = 0; i < userInputLength; i++){
        const noSpecRandom = Math.floor(Math.random() * noSpec.length);
        result += noSpec[noSpecRandom];
        }
        return result;
    }  else{
    for (let i = 0; i < userInputLength; i++){
        const allCharRandom = Math.floor(Math.random() * allChar.length);
        result += allChar[allCharRandom];
    }
    return result;
}
};

button.addEventListener("click", () => {
 if(container.innerHTML !== ""){
 container.removeChild(container.lastElementChild);
 }
 
 displayPassword();

})

function displayPassword(){
    const result = document.createElement("p");
    result.innerText = `${generatePassword(userInputLength.value)}`;
    result.className = "result";
    container.appendChild(result);
  }

