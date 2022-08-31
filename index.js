const readline = require('readline')

const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function questionAsync(text) {
    return new Promise((resolve, reject) => {
        terminal.question(`${text}\n`, resolve)
    })
}

let name = ""
let phone = ""

Promise.resolve()
        .then(() => questionAsync('Qual seu nome? '))
        .then(responseName => {
            name = responseName
        })
        .then(() => questionAsync('Qual seu telefone? '))
        .then(responsePhone => {
            phone = responsePhone
        })
        .then(() => {
            console.log(
                `
                Nome: ${name}, 
                Telefone: ${phone}
                `
            )
        })
        .finally(() => terminal.close())