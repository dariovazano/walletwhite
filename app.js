// Saludo inicial

// alert("Bienvenido a Wallet White un analisador de gastos mensuales\nEn esta ocación vamos a:\n-Crear y elimiar categorias\n-Agregar y eliminar gastos de cada categoria\n-Cálculo del total y el porcentaje de cada categoria")

const categories= ["Vivienda","Alimentación","Transporte"]

const bills= [
    {categorie:"Vivienda", fecha:"22/04/2023", coment:"vivienda", bill:1750},
    {categorie:"Vivienda", fecha:"22/04/2023", coment:"vivienda", bill:75},
    {categorie:"Vivienda", fecha:"22/04/2023", coment:"vivienda", bill:7},
    {categorie:"Alimentación", fecha:"22/04/2023", coment:"Alimentación", bill:850},
    {categorie:"Alimentación", fecha:"22/04/2023", coment:"Alimentación", bill:75},
    {categorie:"Alimentación", fecha:"22/04/2023", coment:"Alimentación", bill:7},
    {categorie:"Transporte", fecha:"22/04/2023", coment:"Transporte", bill:950},
    {categorie:"Transporte", fecha:"22/04/2023", coment:"Transporte", bill:75},
    {categorie:"Transporte", fecha:"22/04/2023", coment:"Transporte", bill:7}
]


alert("dale dale")

function pintar(){
    //Total
    let total= bills.reduce((accum,gasto)=>{
        return accum + gasto.bill;
    },0);
    const valor = document.querySelector("#total").textContent=`$ ${total}`
    //Porcentajes
    categories.forEach(categorie  => {
        //calculo el porcentaje
        let resultados = bills.filter((producto) => producto.categorie === categorie)
        let porcentaje = resultados.reduce((accum,gasto1)=>{
        return accum + gasto1.bill/total;
        },0);   
        let redondeo= Math.round(porcentaje*100)
        //lo pinto en el HTML
        let lista = document.createElement("div")
        lista.innerHTML=
        `<li class="list-group-item">${categorie}<div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="${redondeo}%" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar" style="width: ${redondeo}%">${redondeo}%</div>
        </div></li>`
        document.querySelector("#percent").appendChild(lista)
    });
    //tarjetas
    categories.forEach(categorie =>{
        //Creo la tarjeta
        let tarjeta = document.createElement("div")
        tarjeta.className = "col-12 col-xl-3 col-md-6"
        tarjeta.innerHTML=
            `
                <div class="card  text-bg-secondary mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${categorie}</h5>
                        <ul id="${categorie}"class="list-group list-group-flush">
                    </ul>
                    </div>
                </div>
            `
        document.querySelector("#categories").appendChild(tarjeta)
        //creo el listado en cada tarjeta
        let resultados = bills.filter((producto) => producto.categorie === categorie)
        for (let resultado of resultados){
        let cardList=document.createElement("div")
        cardList.className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        cardList.innerHTML=
            `
            ${resultado.fecha} - ${resultado.coment} <span class="badge bg-primary rounded-pill">$${resultado.bill}</span> <button type="button" class="btn btn-danger btn-sm">-</button>
            `
            document.querySelector(`#${categorie}`).appendChild(cardList)
        }

        




    });
}

pintar()