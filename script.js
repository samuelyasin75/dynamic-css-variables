document.getElementById('senha').addEventListener('input', function(caractere) {
   document.getElementById('senha').value = document.getElementById('senha').value.replace(`${caractere.data}`, `*`)
})

document.getElementById('login').addEventListener('click', validarDados)

function validarDados() {
    var id = document.getElementById('id')
    var senha = document.getElementById('senha')
    if (!id.value || !senha.value) {
        alert('Por favor, preencha todos os dados para efetuar seu login.')
        console.log(document.styleSheets)
        // aviso do fundo do input
        if (!id.value) {
            document.styleSheets[0].cssRules[1].style.setProperty('--corFundoInputId', '#F0E486')
        }
        if (!senha.value) {
            document.styleSheets[0].cssRules[1].style.setProperty('--corFundoInputSenha', '#F0E486')
        }
    } else if (!id.value != 'usertest') { 

    }
}