function caesarCipher(str, shift) {
    return str.split('')
              .map(char => {
                  if (char.match(/[a-z]/i)) {
                      const code = char.charCodeAt();
                      const base = char === char.toUpperCase() ? 65 : 97;
                      return String.fromCharCode(((code - base + shift) % 26) + base);
                  }
                  return char;
              })
              .join('');
}

function encriptarTexto() {
    const inputText = document.getElementById('cuadroText').value;
    const encryptedText = caesarCipher(inputText, 3); // Usamos un desplazamiento de 3 para el cifrado César
    document.getElementById('cuadroResultado').value = encryptedText;
}

function desencriptarTexto() {
    const inputText = document.getElementById('cuadroText').value;
    const decryptedText = caesarCipher(inputText, -3); // Deshacemos el desplazamiento para desencriptar
    document.getElementById('cuadroResultado').value = decryptedText;
}

function copiarTexto() {
    const resultado = document.getElementById('cuadroResultado');
    resultado.select();
    resultado.setSelectionRange(0, 99999); // Para dispositivos móviles

    navigator.clipboard.writeText(resultado.value)
        if(resultado = ''){
            alert('Error no se encuentra ningun texto en el resultado');
        }
        else{
            alert('Texto copiado en el portapapeles')
        }
}