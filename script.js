const allChars = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&'()*+,-./:;=?@[\\]^_{|}~<>\``;
const generateBtn = document.getElementById("generate-btn")
const output1 = document.getElementById("output-1")
const output2 = document.getElementById("output-2")
const output3 = document.getElementById("output-3")
const output4 = document.getElementById("output-4")
const ccopyTxt1 = document.getElementById("copyTxt1")
const ccopyTxt2 = document.getElementById("copyTxt2")
const ccopyTxt3 = document.getElementById("copyTxt3")
const ccopyTxt4 = document.getElementById("copyTxt4")

// generate password event
generateBtn.addEventListener('click', () => {
    const pass1 = generatePass()
    output1.value = pass1;
    output1.style.backgroundImage = "none";
    const pass2 = generatePass()
    output2.value = pass2;
    output2.style.backgroundImage = "none";
    const pass3 = generatePass()
    output3.value = pass3;
    output3.style.backgroundImage = "none";
    const pass4 = generatePass()
    output4.value = pass4;
    output4.style.backgroundImage = "none";
})

// generate password coppy event
output1.addEventListener('click', () => {
    if (output1.value) {
        navigator.clipboard.writeText(output1.value)
        ccopyTxt1.classList.add("copied")
        const temp = setInterval(() => {
            ccopyTxt1.classList.remove("copied")
            clearInterval(temp)
        }, 600)
    } else {
        alert("First hit the Generate  Password  Button!")
    }
})

output2.addEventListener('click', () => {
    if (output2.value) {
        navigator.clipboard.writeText(output2.value)
        ccopyTxt2.classList.add("copied")
        const temp = setInterval(() => {
            ccopyTxt2.classList.remove("copied")
            clearInterval(temp)
        }, 600)
    } else {
        alert("First hit the Generate  Password  Button!")
    }
})

output3.addEventListener('click', () => {
    if (output3.value) {
        navigator.clipboard.writeText(output3.value)
        ccopyTxt3.classList.add("copied")
        const temp = setInterval(() => {
            ccopyTxt3.classList.remove("copied")
            clearInterval(temp)
        }, 600)
    } else {
        alert("First hit the Generate  Password  Button!")
    }
})

output4.addEventListener('click', () => {
    if (output4.value) {
        navigator.clipboard.writeText(output4.value)
        ccopyTxt4.classList.add("copied")
        const temp = setInterval(() => {
            ccopyTxt4.classList.remove("copied")
            clearInterval(temp)
        }, 600)
    } else {
        alert("First hit the Generate  Password  Button!")
    }
})



function generatePass() {
    let pass = ""
    for (let i = 0; i < 16; i++) {
        const randomPass = Math.floor(Math.random() * 95)
        pass += allChars[randomPass]
    }
    return pass;
}

