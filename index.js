const body = document.querySelector("body");
const themeToggle = document.getElementById("theme-toggle");
const passwordOne = document.getElementById("password-one");
const passwordTwo = document.getElementById("password-two");
const tooltips = Array.from(document.querySelectorAll(".tooltip"));
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwords = [];
const maxPasswordLength = 15;


function generatePassword() {
    let password = "";
    for (let i = 0; i < maxPasswordLength; i++) {
        char = characters[Math.floor(Math.random() * characters.length)];
        password += char;
    }
    return password;
}

function generatePasswords(numOfPasswords) {
    for (let i = 0; i < numOfPasswords; i++) {
        passwords.push(generatePassword());
    }
}

function renderPasswords() {
    passwords = [];
    generatePasswords(2);
    addToolTips();
    resetToolTips();

    passwordOne.placeholder = passwords[0];
    passwordTwo.placeholder = passwords[1];
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("theme-dark");
})


passwordOne.addEventListener("click", () => {
    if (passwordOne.placeholder) {
        var copyText = passwordOne.placeholder;
        navigator.clipboard.writeText(copyText);

        let tooltip = getClosestToolTip(passwordOne);
        tooltip.firstElementChild.textContent = "Copied!";
        tooltip.firstElementChild.setAttribute("copied", "true");
    }
})

passwordTwo.addEventListener("click", () => {
    if (passwordTwo.placeholder) {
        var copyText = passwordTwo.placeholder;
        navigator.clipboard.writeText(copyText);

        let tooltip = getClosestToolTip(passwordTwo);
        tooltip.firstElementChild.textContent = "Copied!";
        tooltip.firstElementChild.setAttribute("copied", "true");
    }
})



function getClosestToolTip(e) {
    return e.parentElement;
}

function addToolTips() {
    if (passwords.length >= 2 ) {
        tooltips.forEach((e) => {
            e.setAttribute("data-password", "true");
        })
    }
}

function resetToolTips() {
    tooltips.forEach((e) => {
        e.firstElementChild.textContent = "Copy to clipboard";
        e.firstElementChild.removeAttribute("copied");
    })
}
