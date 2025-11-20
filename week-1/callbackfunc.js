function myCallback () {
    return 'Dit is de callback-functie'
}


function mainLogic(myCallback) {
    console.log(myCallback())
}

mainLogic(myCallback)