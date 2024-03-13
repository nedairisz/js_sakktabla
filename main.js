window.addEventListener("load", function () {
    sakktabla()
    szinezes()
    babu()
});

function sakktabla(){
    const tarolo=document.querySelector("#tabla")
    let table = "<table>";
        for (let i = 0; i < 8; i++) {
            let sorok = "<tr>"
                for (let j = 0; j < 8; j++) {
                    sorok+= `<td>&nbsp;</td>`  
                }
            sorok+="</tr>";  
            table+=sorok
        }
    table +="</table>"
    tarolo.innerHTML=table
}

function szinezes(){
    const paratlanSorok=document.querySelectorAll("tr:nth-child(odd) td:nth-child(even)")
    for (let index = 0; index < paratlanSorok.length; index++) {
        paratlanSorok[index].style.backgroundColor="lightgrey"
    }
    
    const parosSorok=document.querySelectorAll("tr:nth-child(even) td:nth-child(odd)")
    for (let index = 0; index < parosSorok.length; index++) {
        parosSorok[index].style.backgroundColor="lightgrey"
    }
}

function babu(){
    const mezok = document.querySelectorAll("#tabla td");
    for (let i = 0; i < mezok.length; i++) {
        mezok[i].addEventListener("click", function() {
            if (this.querySelector("img")) {
                this.innerHTML = ""; 
            } else {
                this.innerHTML = `<img src="kep/babu.png" alt="kép">`;
            }
        });
    }
   
}
