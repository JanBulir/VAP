
/*
function vytvoritTabulku() {

    let radek = document.getElementById(pocet-radku)
        radek.onclick = vytvoritTabulku.bind(pocetRadku) 

    let sloupec = document.getElementById(pocet-sloupcu)
        sloupec.onclick = vytvoritTabulku.bind(pocetSloupcu) 

    var tabulka
    let y = 1
    var row = tabulka.insertRow(i);
    document.createElement("tabulka")

    for (var i = 0; i < pocetRadku; i++)
    for (var x = 0; x < pocetSloupcu; x++) {
        row.insertCell(x); cell.textContext = y++}

     document.body.appendChild(tabulka)
    }

*/
    function vytvoritTabulku(pocetRadku,pocetSloupcu) {
        tabulka = document.createElement("table");
        document.body.appendChild(tabulka);

        for (let y = 0; y < pocetRadku; y++) {
            let tr = document.createElement("tr");
            tabulka.appendChild(tr);
    
            for (let x = 0; x < pocetSloupcu; x++) {
                tr.appendChild(vytvorBunku());
            }
        }
    }
