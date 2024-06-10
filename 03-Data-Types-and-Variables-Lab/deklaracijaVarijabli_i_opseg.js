let globalVariable = `I am global`;

function myFunction(){
    console.log(globalVariable)

}

//myFunction()
//console.log(`stampa globalne posle poziva ${globalVariable}`)


function myFunctionLocal() {
    let localVariable = `I am local`
    console.log(localVariable);
}

myFunctionLocal()
//console.log(localVariable); // ne moze ovako da radi

function novaFunkcija() {

    if (true) {
        var varVarijabla = `I am var`;
        let letVarijabla = `I am let`;
        
    }
    console.log(varVarijabla)
    console.log(letVarijabla)
}
//novaFunkcija()

//let validVariable = `valid`
//let _validVariable = `valid`
//let invalidVariable@ = `invalid`
//let break = `invalid` // greska