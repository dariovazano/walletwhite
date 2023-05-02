// Saludo inicial

// alert("Bienvenido a Wallet White un analisador de gastos mensuales\nEn esta ocación vamos a:\n-Crear y elimiar categorias\n-Agregar y eliminar gastos de cada categoria\n-Cálculo del total y el porcentaje de cada categoria")

const categories= ["Vivienda","Alimentación","Transporte"]

const bills= [
    {categorie:"Vivienda", coment:"vivienda", bill:1750},
    {categorie:"Vivienda", coment:"vivienda", bill:75},
    {categorie:"Vivienda", coment:"vivienda", bill:7},
    {categorie:"Alimentación", coment:"Alimentación", bill:850},
    {categorie:"Alimentación", coment:"Alimentación", bill:75},
    {categorie:"Alimentación", coment:"Alimentación", bill:7},
    {categorie:"Transporte", coment:"Transporte", bill:950},
    {categorie:"Transporte", coment:"Transporte", bill:75},
    {categorie:"Transporte", coment:"Transporte", bill:7}
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
        let tarjeta = document.createElement("div")
        tarjeta.className = "col-12 col-xl-3 col-md-6"
        tarjeta.innerHTML=
        `
        <div class="card  text-bg-secondary mb-3">
            <div class="card-body">
                <h5 class="card-title">${categorie}</h5>
                <ul id="${categorie}"class="list-group list-group-flush">
                  <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">22/03/2023 - alq <span class="badge bg-primary rounded-pill">$750</span> <button type="button" class="btn btn-danger btn-sm">-</button></li>
                  <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">22/03/2023 - alq <span class="badge bg-primary rounded-pill">$750</span> <button type="button" class="btn btn-danger btn-sm">-</button></li>
                  <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">22/03/2023 - alq <span class="badge bg-primary rounded-pill">$750</span> <button type="button" class="btn btn-danger btn-sm">-</button></li>
                  <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"><a href="#" class="btn btn-success">+</a></li>
              </ul>
              </div>
        </div>
    `
    document.querySelector("#categories").appendChild(tarjeta)


    });
}

pintar()