let rollButton =  document.querySelector('#roll-button')
let showAllRolls = document.querySelector('#show-all-rolls')
let dieRolls = []
let diceTotal = document.querySelector('#dice-total')
let allRolls = document.querySelector('#all-rolls')
let diceValue = document.querySelector('#number-of-dice')
let sumTotal = 0

rollButton.addEventListener("click", function(){
    let newValue = diceValue.value
    let index = 0
    while (index<newValue){ 
    let randomvalue = Math.floor(Math.random()*6) + 1
    dieRolls.push(randomvalue)
    sumTotal += randomvalue
    index += 1
    }
    
    diceTotal.innerHTML = "Total: " + sumTotal 

})

showAllRolls.addEventListener('click', function () {

    let index = 0
    while (index<dieRolls.length){
    let roll = document.createElement('li')
    roll.innerHTML = dieRolls[index]
    allRolls.appendChild(roll)
    index += 1
    }

})

