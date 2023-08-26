const runButton = document.getElementById('runButton');
const codeInput = document.getElementById('codeInput');
const outputDiv = document.getElementById('output');

function executeLooping(code) {
    let result = "";
    const originalLog = console.log;

    // Captura a saída de console.log temporariamente
    console.log = (output) => result += output + "\n";

    try {
        // Executa o código inserido
        new Function(code)();
    } catch (error) {
        result = `Error: ${error.message}`; // Captura a mensagem de erro
    } finally {
        console.log = originalLog; // Restaura o console.log original
    }

    return result;
}

runButton.addEventListener('click', () => {
    const code = codeInput.value; // Obtém o valor da área de texto de código
    const result = executeLooping(code); // Executa o código e captura o resultado
    outputDiv.innerText = `Result: \n ${result}`; // Atualiza o conteúdo do elemento de saída (outputDiv)
});
