const textCripto = document.getElementById("p-text");
const buttonDescripto = document.getElementById("button-descripto");
const copyButton = document.getElementById("button_copy");
const textArea = document.querySelector('textarea');

document.addEventListener("keypress", (e) => {
    if(e.key==="Enter") {
        criptografarTexto();
        ocultarTexto();
    }
});

function criptografarTexto () {

    let textValue = textArea.value;
    let textArray = textValue.split("");

    if (textValue != "") {
        showCopyButton();
        buttonDescripto.removeAttribute("disabled");
        ocultarTexto();
    }
    
    for (i=0; i < textArray.length; i++) {
        if (textArray[i] === 'a') {
            textArray.splice(i,1,"ai");
        } else if (textArray[i] === 'e') {
            textArray.splice(i,1,"enter");
        } else if (textArray[i] === 'i') {
            textArray.splice(i,1,"imes");
        } else if (textArray[i] === 'o') {
            textArray.splice(i,1,"ober");
        } else if (textArray[i] === 'u') {
            textArray.splice(i,1,"ufat");
        }
    }

    textCripto.innerHTML = (textArray.join(""));
    
};

function descriptografarTexto () {
    ocultarTexto();
    let textValue = document.querySelector('textarea').value;
    let novoTeste = textValue.replace(/ai/g, "a");
    novoTeste = novoTeste.replace(/enter/g, "e");
    novoTeste = novoTeste.replace(/imes/g, "i");
    novoTeste = novoTeste.replace(/ober/g, "o");
    novoTeste = novoTeste.replace(/ufat/g, "u");

    textCripto.innerHTML = novoTeste;

};

function showCopyButton () {
    copyButton.removeAttribute("hidden");
};

function ocultarTexto() {
    document.getElementById('msg-default').setAttribute("hidden", true);
};


copyButton.addEventListener('click', clipboardCopy);

async function clipboardCopy () {
    document.querySelector('textarea').value = "";
    document.querySelector('textarea').focus();
    let text = textCripto.innerText;
    await navigator.clipboard.writeText(text);
    document.getElementById('p-text').innerHTML = "";
    document.getElementById("msg-default").removeAttribute("hidden");
    copyButton.setAttribute("hidden", true);
};

