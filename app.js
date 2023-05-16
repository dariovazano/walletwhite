// Saludo inicial


// const categories = ["Vivienda", "Alimentación", "Transporte"]

// const bills = [
//     { id: 1, categorie: "Vivienda", fecha: "22/04/2023", coment: "vivienda", bill: 1750 },
//     { id: 2, categorie: "Vivienda", fecha: "22/04/2023", coment: "vivienda", bill: 75 },
//     { id: 3, categorie: "Vivienda", fecha: "22/04/2023", coment: "vivienda", bill: 7 },
//     { id: 4, categorie: "Alimentación", fecha: "22/04/2023", coment: "Alimentación", bill: 850 },
//     { id: 5, categorie: "Alimentación", fecha: "22/04/2023", coment: "Alimentación", bill: 75 },
//     { id: 6, categorie: "Alimentación", fecha: "22/04/2023", coment: "Alimentación", bill: 7 },
//     { id: 7, categorie: "Transporte", fecha: "22/04/2023", coment: "Transporte", bill: 950 },
//     { id: 8, categorie: "Transporte", fecha: "22/04/2023", coment: "Transporte", bill: 75 },
//     { id: 9, categorie: "Transporte", fecha: "22/04/2023", coment: "Transporte", bill: 7 }
// ]


const categories = []
const bills = []




// localStorage.setItem("data", JSON.stringify(local))

//compruebo si hay algo en el local storage.

let data = localStorage.getItem("data")
let local = JSON.parse(data)
console.log(local)
if (local == null) {
    console.log("aqui")
    local = {
        "categories": categories,
        "bills": bills,
    }

}

//


//creo la funcion de Pintar
function pintar() {

    //Total
    let total = local.bills.reduce((accum, gasto) => {
        return accum + gasto.bill;
    }, 0);
    const valor = document.querySelector("#total").textContent = `$ ${total}`


    //Porcentajes
    local.categories.forEach(categorie => {
        //calculo el porcentaje
        let resultados = local.bills.filter((producto) => producto.categorie === categorie)
        let porcentaje = resultados.reduce((accum, gasto1) => {
            return accum + gasto1.bill / total;
        }, 0);
        let redondeo = Math.round(porcentaje * 100)

        //lo pinto en el HTML
        var lista = document.createElement("div");

        lista.innerHTML =
            `<li class="list-group-item">${categorie}<div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="${redondeo}%" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar" style="width: ${redondeo}%">${redondeo}%</div>
        </div></li>`
        document.querySelector("#percent").appendChild(lista)

    });


    //tarjetas

    local.categories.forEach(categorie => {
        //cuento cuantos gastos hay en esa categoria
        let n = local.bills.filter((producto) => producto.categorie === categorie).length

        //Creo la tarjeta
        let tarjeta = document.createElement("div")
        tarjeta.setAttribute("id", "eliminar")
        tarjeta.className = "col-12 col-xl-3 col-md-6"
        tarjeta.innerHTML =
            `
                <div class="card  text-bg-secondary mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${categorie}
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${n}
                            <span class="visually-hidden">unread messages</span>
                        </h5>
                        <div class="overflow-auto h-200">
                            <ul id="${categorie}" class="list-group list-group-flush">
                            </ul>
                        </div>
                        <button id="${categorie}" name="add" type="button" class="btn btn-success">Añadir gasto</button>
                        
                    </div>
                </div>
            `
        document.querySelector("#categories").appendChild(tarjeta)


        //creo el listado en cada tarjeta
        let resultados = local.bills.filter((producto) => producto.categorie === categorie)
        for (let resultado of resultados) {
            let cardList = document.createElement("div")

            cardList.className = "list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            cardList.innerHTML =
                `
            ${resultado.fecha} - ${resultado.coment} <span class="badge bg-primary rounded-pill">$${resultado.bill}</span> <button name="remove" type="button" class="btn btn-danger btn-sm" id="${resultado.id}">-</button>
            `
            document.querySelector(`#${categorie}`).appendChild(cardList)
        }

    });
}

//creo la funcion de reseteo
const reset = () => {
    //borro los porcentajes
    local.categories.forEach(categorie => {
        const padre = document.querySelector("#percent");
        const hijo = padre.lastChild;
        padre.removeChild(hijo)
        //borro las tarjetas
        const padre1 = document.querySelector("#categories");
        const hijo1 = padre1.lastChild;
        padre1.removeChild(hijo1)
    })
}


pintar()



//Eventos

//Agregar categoría
const agregarCat = document.querySelector("#agregarCategoria")
agregarCat.addEventListener("click", (e) => {
    reset()
    console.log(e.target.name)
    local.categories.push(prompt("La nueva categoria es:"))
    pintar()

    localStorage.setItem("data", JSON.stringify(local))
});

//agregar Gasto
const agregargasto = document.querySelector("#categories")
agregargasto.addEventListener("click", (e) => {
    if (e.target.name == "add") {

        reset()

        const nuevoGasto = {}
        nuevoGasto.id = local.bills.length + 1

        nuevoGasto.categorie = e.target.id//id es la categoria en este caso
        nuevoGasto.fecha = prompt("fecha")
        nuevoGasto.coment = prompt("comentario")
        nuevoGasto.bill = Number(prompt("gasto"))

        // nuevoGasto.fecha="dddd"
        // nuevoGasto.coment="dfdfsdf"
        // nuevoGasto.bill=333


        local.bills.push(nuevoGasto)

        pintar()
        localStorage.setItem("data", JSON.stringify(local))
    }
    if (e.target.name == "remove") {
        reset()
        console.log("   hola")
        let i = 0
        local.bills.forEach(bill => {

            if (bill.id == e.target.id) {
                console.log(`si ${i}`)
                local.bills.splice(i, 1)
            }
            else {
                i = i + 1
            }
        })


        pintar()
        localStorage.setItem("data", JSON.stringify(local))
    }


})

//eliminar gasto





