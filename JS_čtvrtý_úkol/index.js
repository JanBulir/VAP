let jmeno = document.getElementById("jmeno")
let prijmeni = document.getElementById("prijmeni")
let vek = document.getElementById("vek")

let persons = []

class Person{
    constructor(jmeno,prijmeni,vek){
        this.jmeno = jmeno
        this.prijmeni = prijmeni
        this.vek = vek
    }
    toString() {
        console.log("Jméno: "+ this.jmeno + " Příjmení: "+ this.prijmeni+" Věk: "+this.vek)
    }
}

function PersonsN(){
    let personJmeno = jmeno.value
    let personPrijmeni = prijmeni.value
    let personVek = parseFloat(vek.value)
    let person = new Person(personJmeno,personPrijmeni,personVek)
    
    let row = table.insertRow()
    let cell = row.insertCell()
    cell.innerText = person.toString()
}
