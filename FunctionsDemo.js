

let theWInneris = "Jasper is the winner"

let newWinner = theWInneris.replace("Jasper", "Steven and Amethyst")

if(newWinner.includes("Steven and Amethyst")){
    console.log("replaced successfully")
}

console.log(newWinner)

let newWinnerLower = newWinner.toLowerCase()
console.log(newWinnerLower)
let newWinnerSplit = newWinnerLower.split(' ')
console.log(newWinnerSplit)
let newWinnerKebob = newWinnerSplit.join('-')
console.log(newWinnerKebob)


let amethystHealth = 100

function isAmethystAlive(){
if (amethystHealth > 0){
    console.log(`Amethyst is not poofed. She has ${amethystHealth} health`)
} else {
    console.log("Amethyst is died")
}

}

isAmethystAlive()

function surpriseattack(attack){
    amethystHealth -= attack
    isAmethystAlive()
}

surpriseattack(20)


const greeting = function(person1, person2) {
    console.log(`${person1} and ${person2} say hello to each other`)

}

greeting("Garno", "Gyno")

const parting = (person1) => {
    console.log(`${person1} says goodbye `)
}

greeting("person1diamond")
parting("person1diamond")

function rollDice() {
    let possibleRolls = [1, 2, 3, 4, 5, 6]
    let randomNumber = Math.floor(Math.random() * possibleRolls.length)
    return possibleRolls[randomNumber]
}

function diceMultipier(){
    let firstRoll = rollDice()
    let secondRoll = rollDice()
    console.log(firstRoll)
    console.log(secondRoll)
    return firstRoll * secondRoll
    
}

let multipliedNumber = diceMultipier()

console.log(multipliedNumber)