// Creo unos arrays demos para poder hacer pruebas mas rapido

const categoriesreset = ["Vivienda", "Alimentación", "Transporte", "Entretenimiento", "Salud", "Educación", "Ropa", "Tecnología", "Impuestos", "Viajes"];

const billsreset = [
    { id: 1, categorie: "Vivienda", fecha: "2023/01/01", coment: "Alquiler", bill: 1200 },
    { id: 2, categorie: "Vivienda", fecha: "2023/02/15", coment: "Servicios públicos", bill: 200 },
    { id: 3, categorie: "Alimentación", fecha: "2023/01/05", coment: "Supermercado", bill: 150 },
    { id: 4, categorie: "Alimentación", fecha: "2023/02/20", coment: "Restaurante", bill: 50 },
    { id: 5, categorie: "Transporte", fecha: "2023/01/10", coment: "Gasolina", bill: 80 },
    { id: 6, categorie: "Transporte", fecha: "2023/02/25", coment: "Transporte público", bill: 30 },
    { id: 7, categorie: "Entretenimiento", fecha: "2023/01/15", coment: "Cine", bill: 20 },
    { id: 8, categorie: "Entretenimiento", fecha: "2023/02/05", coment: "Concierto", bill: 100 },
    { id: 9, categorie: "Salud", fecha: "2023/01/12", coment: "Consulta médica", bill: 50 },
    { id: 10, categorie: "Salud", fecha: "2023/03/18", coment: "Medicamentos", bill: 30 },
    { id: 11, categorie: "Educación", fecha: "2023/01/20", coment: "Libros", bill: 50 },
    { id: 12, categorie: "Educación", fecha: "2023/03/10", coment: "Curso online", bill: 100 },
    { id: 13, categorie: "Ropa", fecha: "2023/02/05", coment: "Ropa de invierno", bill: 200 },
    { id: 14, categorie: "Ropa", fecha: "2023/04/15", coment: "Zapatos", bill: 80 },
    { id: 15, categorie: "Tecnología", fecha: "2023/03/12", coment: "Teléfono nuevo", bill: 600 },
    { id: 16, categorie: "Tecnología", fecha: "2023/04/05", coment: "Tablet", bill: 300 },
    { id: 17, categorie: "Impuestos", fecha: "2023/03/31", coment: "Impuesto sobre la renta", bill: 500 },
    { id: 18, categorie: "Impuestos", fecha: "2023/04/20", coment: "Impuesto de propiedad", bill: 300 },
    { id: 19, categorie: "Viajes", fecha: "2023/02/25", coment: "Boletos de avión", bill: 800 },
    { id: 20, categorie: "Viajes", fecha: "2023/05/10", coment: "Hospedaje", bill: 400 },
    { id: 21, categorie: "Alimentación", fecha: "2023/01/07", coment: "Comida para llevar", bill: 30 },
    { id: 22, categorie: "Salud", fecha: "2023/03/22", coment: "Seguro médico", bill: 100 },
    { id: 23, categorie: "Educación", fecha: "2023/02/15", coment: "Cuota universitaria", bill: 400 },
    { id: 24, categorie: "Ropa", fecha: "2023/04/10", coment: "Accesorios", bill: 50 },
    { id: 25, categorie: "Transporte", fecha: "2023/01/18", coment: "Tren", bill: 15 },
    { id: 26, categorie: "Entretenimiento", fecha: "2023/02/25", coment: "Parque de diversiones", bill: 50 },
    { id: 27, categorie: "Impuestos", fecha: "2023/03/10", coment: "Impuesto de vehículo", bill: 200 },
    { id: 28, categorie: "Salud", fecha: "2023/05/18", coment: "Dentista", bill: 80 },
    { id: 29, categorie: "Vivienda", fecha: "2023/02/05", coment: "Mantenimiento", bill: 150 },
    { id: 30, categorie: "Tecnología", fecha: "2023/04/15", coment: "Accesorios electrónicos", bill: 70 },
    { id: 31, categorie: "Impuestos", fecha: "2023/05/12", coment: "Impuesto sobre ventas", bill: 100 },
    { id: 32, categorie: "Alimentación", fecha: "2023/03/07", coment: "Desayuno", bill: 10 },
    { id: 33, categorie: "Entretenimiento", fecha: "2023/04/25", coment: "Entradas de teatro", bill: 60 },
    { id: 34, categorie: "Transporte", fecha: "2023/02/10", coment: "Peaje", bill: 5 },
    { id: 35, categorie: "Ropa", fecha: "2023/03/18", coment: "Ropa de verano", bill: 120 },
    { id: 36, categorie: "Salud", fecha: "2023/05/05", coment: "Suplementos vitamínicos", bill: 30 },
    { id: 37, categorie: "Vivienda", fecha: "2023/02/12", coment: "Seguro de hogar", bill: 80 },
    { id: 38, categorie: "Educación", fecha: "2023/04/18", coment: "Clases particulares", bill: 150 },
    { id: 39, categorie: "Viajes", fecha: "2023/03/25", coment: "Alquiler de coche", bill: 200 },
    { id: 40, categorie: "Tecnología", fecha: "2023/05/10", coment: "Auriculares", bill: 50 },
    { id: 41, categorie: "Transporte", fecha: "2023/06/10", coment: "Peaje", bill: 5 },
    { id: 42, categorie: "Ropa", fecha: "2023/06/18", coment: "Ropa de verano", bill: 120 },
    { id: 43, categorie: "Salud", fecha: "2023/06/05", coment: "Suplementos vitamínicos", bill: 30 },
    { id: 44, categorie: "Vivienda", fecha: "2023/06/12", coment: "Seguro de hogar", bill: 80 },
    { id: 45, categorie: "Educación", fecha: "2023/06/18", coment: "Clases particulares", bill: 150 },
    { id: 46, categorie: "Viajes", fecha: "2023/06/25", coment: "Alquiler de coche", bill: 200 },
    { id: 47, categorie: "Tecnología", fecha: "2023/06/10", coment: "Auriculares", bill: 50 },
];


//creo los dor arrays principales vacios


const categories = []
const bills = []


//compruebo si hay algo en el local storage.

let data = localStorage.getItem("data")
let local = JSON.parse(data)
if (local == null) {
    local = {
        "categories": categories,
        "bills": bills,
    }

}

//

// Inicio Gráficos graficos

let grafico1 = new Morris.Area({
    element: 'grafico1',
    behaveLikeLine: true,
    data: [
        { dia: '1', Actual: 3, Promedio: 3 },
        { dia: '2', Actual: 2, Promedio: 1 },
        { dia: '3', Actual: 2, Promedio: 4 },
        { dia: '4', Actual: 3, Promedio: 3 }
    ],
    xkey: 'dia',
    ykeys: ['Actual', 'Promedio'],
    labels: ['Mes Actual', 'Promedio últimos 3 meses'],
    parseTime: false,
    resize: 'true',
    lineWidth: 2,
    ymax: 'auto',
});


let grafico2 = new Morris.Donut({
    element: 'grafico2',
    data: [
        { value: 70, label: 'foo' },
        { value: 15, label: 'bar' },
        { value: 10, label: 'baz' },
        { value: 5, label: 'A really really long label' }
    ],
    resize: 'true',
    formatter: function (x) { return x + "%" }
}).on('click', function (i, row) {


});

//cargo el el dia de hoy en las variables day month and year 


let hoy = new Date()
let dayb = hoy.getDate()
let monthb = hoy.getMonth() + 1
let year = hoy.getFullYear()
// Le doy el formato al mes como lo requiere el imput yyyy-mm-dd 
let month = ""
if (monthb < 10) { month = `0${monthb}` } else { month = monthb }
let day = ""
if (dayb < 10) { day = `0${dayb}` } else { day = dayb }



//creo la funcion de Pintar
function pintar() {




    //Total mesual
    let esteMes = local.bills.filter((producto) => producto.fecha.substring(0, 7) == `${year}/${month}`)
    let totalMes = esteMes.reduce((accum, gasto) => {
        return accum + gasto.bill;
    }, 0);
    document.querySelector("#totalMes").textContent = `Total del mes $ ${totalMes}`


    //Total global

    let total = local.bills.reduce((accum, gasto) => {
        return accum + gasto.bill;
    }, 0);



    //Porcentajes globales
    //creo el data2 que es el nuevo array para el grafico de torta
    let data2 = []

    local.categories.forEach(categorie => {
        //calculo el porcentaje
        let resultados = local.bills.filter((producto) => producto.categorie === categorie)
        let porcentaje = resultados.reduce((accum, gasto1) => {
            return accum + gasto1.bill / total;
        }, 0);
        let redondeo = Math.round(porcentaje * 100)
        data2.push({ value: redondeo, label: categorie, })
    });

    //cargo la nueva data2 en el gráfico de torta

    grafico2.setData(data2)


    // creo el data3  para el grafico de lines
    let data3 = []

    local.bills.forEach(element => {


    });


    let sActual = 0
    let sPromedio = 0
    for (let i = 1; i < 32; i++) {
        let b = ""
        if (i < 10) { b = `0${i}` } else { b = `${i}` }

        // aca calculoel actual
        let otro = local.bills.filter((producto) => producto.fecha == `${year}/${month}/${b}`)

        let otro2 = otro.reduce((accum, gasto) => {
            return accum + gasto.bill;

        }, 0);
        sActual = sActual + otro2


        // aca los ultimos 3 meses

        for (let h = 1; h < 4; h++) {
            let montha = ""
            let yeara = ""
            if (month - h <= 0) {
                yeara = year - 1
                montha = 13 - h
            } else { yeara = year }
            if (0 < month - h < 10) { montha = `0${month - h}` } else { montha = month - h }

            let otro4 = local.bills.filter((producto) => producto.fecha == `${yeara}/${montha}/${b}`)


            let otro5 = otro4.reduce((accum, gasto) => {
                return accum + gasto.bill;

            }, 0);
            sPromedio = sPromedio + otro5
        }

        data3.push({ dia: i, Actual: sActual, Promedio: Math.round(sPromedio / 3) }) //aca el tres habria que cambiarlo en caso de que no existan gastos de algun mesn en paticular.
    }







    grafico1.setData(data3)




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
                            <div id="${categorie}" class="list-group list-group-flush">
                            </div>
                        </div>
                        <button id="${categorie}" name="add" type="button" class="btn btn-success">Añadir gasto</button>
                        
                    </div>
                </div>
            `
        document.querySelector("#categories").appendChild(tarjeta)


        //creo el listado en cada tarjeta
        let resultados = local.bills.filter((producto) => producto.categorie === categorie)
        for (let resultado of resultados) {
            let cardList = document.createElement("a")

            cardList.className = "list-group-item"
            cardList.innerHTML =
                `
                <div class="d-flex w-100 justify-content-between">
                <h5 class="badge text-bg-primary">$${resultado.bill}</h5>
                <small>${resultado.fecha}</small>
                <p class="mb-1 text-truncate">${resultado.coment}.</p>
                <button name="remove" type="button" class="btn btn-danger btn-sm rounded-pill" id="${resultado.id}" >-</button>
                </div>
                


            
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


    let fecha = document.createElement("div")
    fecha.innerHTML = ` <label for="fechas" class="form-label">Fechas del gasto</label>
    <input type="date" id="inputfecha" value="${year}-${month}-${day}" min="1990-01-01" max="2050-12-31">
    `
    document.querySelector("#formufechas").appendChild(fecha)

}




//creo la funcion de reseteo
const reset = () => {
    //borro los porcentajes
    local.categories.forEach(categorie => {
        // const padre = document.querySelector("#percent");
        // const hijo = padre.lastChild;
        // padre.removeChild(hijo)
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
    local.categories.push(nuevacat.value.replace(/ /gi, "-"))
    pintar()
    pintarform()
    localStorage.setItem("data", JSON.stringify(local))
    formulario1.reset()
    document.querySelector("#submit").setAttribute("disabled", "disabled")
});

//agregar Gasto y Eliminar Gasto

//este evento captura el boton de donde se criqueo, 

//si es en un botoncito de eliminar elimina el gasto directamente.

const agregargasto = document.querySelector("#categories")
agregargasto.addEventListener("click", (e) => {
    //si es agregar gasto solo te scrollea hasta la seccion donde se agrega y te completa la categoria en el fomulario
    if (e.target.name == "add") {
        reset()
        pintar()
        pintarform(e.target.id)
        // scroll hasta el formuilario 
        const element = document.getElementById("cargarGasto");
        element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }

    //si es en un botoncito de eliminar elimina el gasto directamente.
    if (e.target.name == "remove") {
        reset()

        let i = 0
        local.bills.forEach(bill => {

            if (bill.id == e.target.id) {
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

//Validaciones de los campos. 

//categorias
const inputcat = document.querySelector("#categorianueva")
inputcat.addEventListener("keyup", (e) => {
    if (local.categories.length == 0) {
        document.querySelector("#submit").removeAttribute("disabled")
        document.querySelector("#validacioncat").textContent = "Nombre de catregoía aceptable"
    }
    local.categories.forEach(categorie => {
        if (inputcat.value.toLowerCase() == categorie.toLowerCase()) {
            document.querySelector("#submit").setAttribute("disabled", "disabled")
            document.querySelector("#validacioncat").textContent = "Esta categoría ya existe"
        }
        else {
            document.querySelector("#submit").removeAttribute("disabled")
            document.querySelector("#validacioncat").textContent = "Nombre de catregoía aceptable"
        }
    })
    if (inputcat.value == "") {
        document.querySelector("#submit").setAttribute("disabled", "disabled")
        document.querySelector("#validacioncat").textContent = "Inserta el nombre de tu nueva categoría"
    }
})
//valor de gastos
const inputgas = document.querySelector("#inputgasto")
inputgas.addEventListener("keyup", (e) => {
    if (inputgas.value == 0) {
        document.querySelector("#submitgasto").setAttribute("disabled", "disabled")
        document.querySelector("#validaciongas").textContent = "incluí un valor mayor que 0"
    }
    else {
        document.querySelector("#submitgasto").removeAttribute("disabled")
    }


})




//aqui esta el evento para capturar el gasto añadido
const formugasto = document.querySelector("#formugasto")
let categoriagasto = document.querySelector("#select")
let fechagasto = document.querySelector("#inputfecha")
let gastogasto = document.querySelector("#inputgasto")
const comentariogasto = document.querySelector("#inputcomentario")
formugasto.addEventListener("submit", (e) => {
    e.preventDefault()
    let aux = categoriagasto.value
    let aux2 = fechagasto.value
    reset()
    let nuevoGasto = {}
    nuevoGasto.id = local.bills.length + 1
    nuevoGasto.categorie = aux
    nuevoGasto.fecha = fechagasto.value.replace(/-/gi, "/",)
    nuevoGasto.coment = comentariogasto.value
    nuevoGasto.bill = Number(gastogasto.value)
    local.bills.push(nuevoGasto)
    pintar()
    pintarform()
    localStorage.setItem("data", JSON.stringify(local))




    document.querySelector("#inputfecha").value = ""
    formugasto.reset()
})


// Cargar demo

const demo = document.querySelector("#CargarDemo")
demo.addEventListener("click", (e) => {
    reset()
    local.categories = categoriesreset
    local.bills = billsreset
    pintar()
    pintarform()
    localStorage.setItem("data", JSON.stringify(local))
})


//reset del localstorage

const back = document.querySelector("#borrarMemoria")
back.addEventListener("click", (e) => {
    reset()
    local.categories = []
    local.bills = []
    pintar()
    pintarform()
    localStorage.setItem("data", JSON.stringify(local))
})


//Aca hago el fetch y creo las tarjetas de los asesores financieros

let aserores = document.querySelector("#asesores")

const pedirAsesores = async () => {
    const resp = await fetch("/asesores.json")
    const data = await resp.json()


    data.forEach((asesor) => {
        const ase = document.createElement("div")
        ase.className = "col-12 col-xl-3 col-md-6"
        ase.innerHTML =
            `
            <div class="card mb-3" style="">
            <img src="${asesor.foto}" class="card-img-top" alt="foto del asesor">
            <div class="card-body">
                <h5 class="card-title">${asesor.name}</h5>
                <p class="card-text">Ciudad: ${asesor.address.city}</p>
                <p class="card-text">Teléfono: ${asesor.phone} </p>
                <p class="card-text">Companía: ${asesor.company.name} </p>
            </div>
            </div>
            `
        asesores.appendChild(ase)
    })
}

pedirAsesores()

// Header add Content - Security - Policy "upgrade-insecure-requests"