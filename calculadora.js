
let nomeDoHeroi = ('DHP')
let rank = ''
let soulStone = true
function subtracao (wins=0, loss=0) {
    return wins - loss
}
let resultado = subtracao(0, 0)
//console.log(resultado)

switch (true) {
    case resultado <=10:
    rank='Ferro'
    break

    case resultado >=11 && resultado <=20:
    rank='Bronze'
    break

    case resultado >=21 && resultado <=50:
    rank='Prata'
    break

    case resultado >=51 && resultado <=80:
    rank='Ouro'
    break

    case resultado >= 81 && resultado <=90:
    rank='Diamante'
    break

    case resultado >= 91 && resultado <=100:
    rank='Lendário'
    break

    case resultado >= 101:
    rank='Imortal'
    break
    default:
}

console.log(`Olá ${nomeDoHeroi}, seu saldo de vitórias é ${resultado} e seu nivel é ${rank}`)

if (rank == 'Ferro') {
    console.log('Consiga mais vitórias para liberar novos modos.')
} else if (rank == 'Prata') {
    console.log('Você liberou o modo PvP em grupo')
} else if (rank == 'Diamante') {
    console.log('O modo masmorra está liberado!')
} else if (rank == 'Imortal') {
    console.log('Parabens por estar entre os melhores!')
    console.log('A partir deste nivel, em posse da SoulStone 💎 você pode viajar entre os mundos')
    console.log('')
    

 if (soulStone === true) {
    console.log('Pedra localizada?: 👍')
    console.log('')
    console.log('Você tem uma SoulStone 💎, vá desbravar os mundos e espalhe seu legado!')
 } else if (soulStone !== true) {
    console.log('Pedra localizada?: 👎')
    console.log('')
    console.log('Você ainda não tem uma SoulStone, vá ao vale perdido em busca da sua e cuidado com os perigos! ')
 }
}

