let nome = prompt("Digite seu nombre")
let sobrenome = prompt("Digite seu sobrenome")
let idade = Number(prompt("Digite sua idade"))
let nacionalidade = prompt("Digite sua nacionalidade")

let dados = {
    nome : nome, 
    sobrenome:sobrenome,
    idade:idade, 
    nacionalidade:nacionalidade
}

console.log(`Olá, Meu nome é ${nome} ${sobrenome}, tenho ${idade} anos de idade e sou de nacionalidad ${nacionalidade}`)

console.table(dados)
