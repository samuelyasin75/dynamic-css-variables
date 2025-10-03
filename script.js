function loginPage() {
    valorSenha = ''
    cont = ''
}

document.getElementById('senha').addEventListener('input', configSenha)

document.getElementById('login').addEventListener('click', validarDados)

document.querySelector('#cancelarLogin').addEventListener('click', cancelarLogin)

function configSenha(caractere) {
    console.log('this is caractere: ' + caractere.data)
    // Fazendo adapatação para o evento Delete e Crtl + v
    if (String(caractere.data).length > 1) {
        console.log(document.querySelector('#senha').value.length)
        if (caractere.data == null) {
            console.log('NUUULLLLL')
            var diferenca = valorSenha.length - document.querySelector('#senha').value.length
            for (let contCaractere = 0; contCaractere < diferenca; contCaractere++) {
                valorSenha = valorSenha.replace(`${valorSenha[valorSenha.length - 1]}`, '')
            }
        } else {
            console.log('OUTRAAAAAAAAAA')
            document.querySelector('#senha').value = ''
            for (let contCaractere = 0; contCaractere < String(caractere.data).length ; contCaractere++) {
                valorSenha += String(caractere.data)[contCaractere]
                document.querySelector('#senha').value += '*'
                console.log(String(caractere.data)[contCaractere])
                console.log(contCaractere)
            }
        }

    } else {
        //armazenando senha
        document.getElementById('senha').value = document.getElementById('senha').value.replace(`${caractere.data}`, `*`)
        valorSenha += caractere.data
    }
    console.log('this is valorSenha: ' + valorSenha)
}

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
    } else if (id.value != 'userteste') { 
        alert('Usuário não encontrado tente outro nome. [userteste]')
        document.styleSheets[0].cssRules[1].style.setProperty('--corFundoInputId', 'red')
    } else if (valorSenha != 'mypassword') {
        alert('Senha invalida, por favor verifique a senha. [mypassword]')
        document.styleSheets[0].cssRules[1].style.setProperty('--corFundoInputSenha', 'red')
        valorSenha = ''
    } else {
        efetuarLogin()
    }
}

function efetuarLogin() {
    var indexPage = document.createElement('a')
    indexPage.setAttribute('href', 'https://syav-s2mu8ls-projects.vercel.app')
    console.log(indexPage)
    alert('Bem vindo! ' + id.value)
    indexPage.click()
}

function cancelarLogin() {
    document.styleSheets[0].cssRules[1].style.setProperty('--corFundoInputId', 'white')
    document.styleSheets[0].cssRules[1].style.setProperty('--corFundoInputSenha', 'white')
    document.querySelector('#id').value = ''
    document.querySelector('#senha').value = ''
    valorSenha = ''
}