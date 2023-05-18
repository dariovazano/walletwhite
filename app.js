// Saludo inicial



// const categoriesreset = ["Vivienda", "Alimentación", "Transporte"]

// const billsreset = [
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






//compruebo si hay algo en el local storage.

let data = localStorage.getItem("data")
let local = JSON.parse(data)
console.log(local)
if (local == null) {
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



//funcion pintar formulario

//creo las opciones en el formulario

function pintarform(cat) {
    // Pinto el formulario de las categorias 
    local.categories.forEach(categorie => {
        let options = document.createElement("option")
        if (cat == categorie) {
            options.setAttribute("selected", "")
        }
        options.innerHTML = `${categorie}`
        document.querySelector("#select").appendChild(options)
    })
    // pinto el formulario de las fechas 

    let hoy = new Date()
    let day = hoy.getDate()
    let month = hoy.getMonth() + 1

    // Le doy el formato al mes como lo requiere el imput yyyy-mm-dd 
    let monthb = ""
    if (month < 10) { monthb = `0${month}` }

    let year = hoy.getFullYear()


    let fecha = document.createElement("div")
    fecha.innerHTML = ` <label for="fechas" class="form-label">Fechas del gasto</label>
    <input type="date" id="inputfecha" name="trip-start" value="${year}-${monthb}-${day}" min="1990-01-01" max="2050-12-31">
    `
    document.querySelector("#formufechas").appendChild(fecha)

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
        //borro todo lo del formulario
        const padre2 = document.querySelector("#select");
        const hijo2 = padre2.lastChild;
        padre2.removeChild(hijo2)
    })
    // borro el formulario de la fecha 
    const padre3 = document.querySelector("#formufechas");
    const hijo3 = padre3.lastChild;
    padre3.removeChild(hijo3)
}


pintar()
pintarform()





//Eventos

//Agregar categoría
const formulario1 = document.querySelector("#agregarCategoria")
const nuevacat = document.querySelector("#categorianueva")
formulario1.addEventListener("submit", (e) => {
    e.preventDefault()
    reset()
    local.categories.push(nuevacat.value.replace(" ", "-"))
    pintar()
    pintarform()
    localStorage.setItem("data", JSON.stringify(local))
    formulario1.reset()
});

//agregar Gasto y Eliminar Gasto

//este evento captura el boton de donde se criqueo, 
//si es agregar gasto solo te scrollea hasta la seccion donde se agrega y te completa la categoria en el fomulario
//si es en un botoncito de eliminar elimina el gasto directamente.

const agregargasto = document.querySelector("#categories")
agregargasto.addEventListener("click", (e) => {
    if (e.target.name == "add") {
        reset()
        pintar()
        pintarform(e.target.id)
        // scroll hasta el formuilario 
        const element = document.getElementById("cargarGasto");
        element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }

    //     reset()

    //     const nuevoGasto = {}
    //     nuevoGasto.id = local.bills.length + 1

    //     nuevoGasto.categorie = e.target.id//id es la categoria en este caso
    //     nuevoGasto.fecha = prompt("fecha")
    //     nuevoGasto.coment = prompt("comentario")
    //     nuevoGasto.bill = Number(prompt("gasto"))


    //     local.bills.push(nuevoGasto)

    //     pintar()
    //     pintarform()
    //     localStorage.setItem("data", JSON.stringify(local))
    // }
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
        pintarform()
        localStorage.setItem("data", JSON.stringify(local))
    }
})
//aqui esta el evento para capturar el gasto añadido
const formugasto = document.querySelector("#formugasto")
let categoriagasto = document.querySelector("#select")
console.log(categoriagasto.value)
let fechagasto = document.querySelector("#inputfecha")
let gastogasto = document.querySelector("#inputgasto")
const comentariogasto = document.querySelector("#inputcomentario")
formugasto.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("adentro")
    let aux = categoriagasto.value
    reset()

    let nuevoGasto = {}
    nuevoGasto.id = local.bills.length + 1
    nuevoGasto.categorie = aux
    nuevoGasto.fecha = fechagasto.value
    nuevoGasto.coment = comentariogasto.value
    nuevoGasto.bill = Number(gastogasto.value)
    console.log(nuevoGasto)

    local.bills.push(nuevoGasto)

    pintar()
    pintarform()
    localStorage.setItem("data", JSON.stringify(local))


})





//reset

const back = document.querySelector("#borrarMemoria")
back.addEventListener("click", (e) => {
    reset()
    local.categories = []
    local.bills = []



    console.log(local)
    pintar()
    localStorage.setItem("data", JSON.stringify(local))
})





