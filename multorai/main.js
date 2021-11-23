function cellaKattintas(e) {
    e.target.classList.toggle("kiemelt")
}

function general() {
    document.getElementById("tablazat").innerHTML = "";

    let sorok = document.getElementById("sorok").value;
    let oszlopok = document.getElementById("oszlopok").value;
    if (sorok < 1 || oszlopok <1) {
        alert("Sorok és oszlopok pozitívnak kell lennie!");
        return;
    }
    let table = document.createElement("table");
    for (let i = 0; i < sorok; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < oszlopok; j++) {
            let td = document.createElement("td");
            td.addEventListener("click", cellaKattintas);
            td.innerHTML = (i + 1) * (j + 1);
            tr.appendChild(td);
        }      
        table.appendChild(tr);
    }
    document.getElementById("tablazat").appendChild(table);
}

function init() {
    document.getElementById("generalasGomb").addEventListener("click", general);
    document.getElementById("sorok").addEventListener("input", general)
    document.getElementById("oszlopok").addEventListener("input", general)
}

document.addEventListener("DOMContentLoaded", init);