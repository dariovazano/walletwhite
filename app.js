// Saludo inicial

// alert("Bienvenido a Wallet White un analisador de gastos mensuales\nEn esta ocación vamos a:\n-Crear y elimiar categorias\n-Agregar y eliminar gastos de cada categoria\n-Cálculo del total y el porcentaje de cada categoria")

const categories= ["Vivienda","Alimentación","Transporte"]

const bills= [
    {id:1, categorie:"Vivienda", fecha:"22/04/2023", coment:"vivienda", bill:1750},
    {id:2, categorie:"Vivienda", fecha:"22/04/2023", coment:"vivienda", bill:75},
    {id:3, categorie:"Vivienda", fecha:"22/04/2023", coment:"vivienda", bill:7},
    {id:4, categorie:"Alimentación", fecha:"22/04/2023", coment:"Alimentación", bill:850},
    {id:5, categorie:"Alimentación", fecha:"22/04/2023", coment:"Alimentación", bill:75},
    {id:6, categorie:"Alimentación", fecha:"22/04/2023", coment:"Alimentación", bill:7},
    {id:7, categorie:"Transporte", fecha:"22/04/2023", coment:"Transporte", bill:950},
    {id:8, categorie:"Transporte", fecha:"22/04/2023", coment:"Transporte", bill:75},
    {id:9, categorie:"Transporte", fecha:"22/04/2023", coment:"Transporte", bill:7}
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
        var lista = document.createElement("div");
        
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
        tarjeta.setAttribute("id","eliminar")
        tarjeta.className = "col-12 col-xl-3 col-md-6"
        tarjeta.innerHTML=
            `
                <div class="card  text-bg-secondary mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${categorie}</h5>
                        <ul id="${categorie}"class="list-group list-group-flush">
                    </ul>
                    <button id="${categorie}" name="add" type="button" class="btn btn-success">Añadir gasto</button>
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
            ${resultado.fecha} - ${resultado.coment} <span class="badge bg-primary rounded-pill">$${resultado.bill}</span> <button name="remove" type="button" class="btn btn-danger btn-sm" id="${resultado.id}">-</button>
            `
            document.querySelector(`#${categorie}`).appendChild(cardList)
        }

    });
}

//creo la funcion de reseteo
const reset=()=>{
 //borro los porcentajes
    categories.forEach(categorie=>{
        const padre = document.querySelector("#percent");
        const hijo= padre.lastChild;
        padre.removeChild(hijo)
//borro las tarjetas
        const padre1 = document.querySelector("#categories");
        const hijo1= padre1.lastChild;
        padre1.removeChild(hijo1)
   })
}


pintar()

alert("volvemos a 0")





//Eventos

//Agregar categoría
const agregarCat= document.querySelector("#agregarCategoria")
agregarCat.addEventListener("click",(e)=>{
    reset()
    console.log(e.target.name)
    categories.push(prompt("La nueva categoria es:"))
    pintar()
});

//agregar Gasto
const agregargasto = document.querySelector("#categories")
agregargasto.addEventListener("click",(e)=>{
    if (e.target.name=="add"){
    
    reset()
    
    const nuevoGasto={}
    nuevoGasto.id=bills.length+1
   
        nuevoGasto.categorie=e.target.id//id es la categoria en este caso
        nuevoGasto.fecha=prompt("fecha")
        nuevoGasto.coment=prompt("comentario")
        nuevoGasto.bill=Number(prompt("gasto"))

        // nuevoGasto.fecha="dddd"
        // nuevoGasto.coment="dfdfsdf"
        // nuevoGasto.bill=333
        
        
        bills.push(nuevoGasto)
        
    pintar()    }
    if (e.target.name=="remove") {
        reset()
        console.log("   hola")
        let i=0
        bills.forEach(bill=>{
            
            if (bill.id==e.target.id){
                console.log(`si ${i}`)
                bills.splice(i, 1)
            }
            else {
                i=i+1}
        })


        pintar() 
    }
    
})

//eliminar gasto





