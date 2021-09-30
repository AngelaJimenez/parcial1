carrito = [];
confirmation=[];
const URL =   "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json";


const t = (callback) => {
  fetch(URL).then((element) => {
    const a = element.json();
    a.then((r) => {
      callback(r);
      console.a
    });
  });
};


function quitarElementos() {
  var node = document.getElementById("productos");
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
  var node = document.getElementById("titulotipoProducto");
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}
t((datos) => {
    comida = datos[0].products;
    agregar(comida, "Burgers");
  });

  
let burguers = document.getElementById("burguers");
burguers.onclick = () => {
    quitarElementos();
  t((datos) => {
    comida = datos[0].products;
    agregar(comida, "Burgers");
  });
};

let tacos = document.getElementById("tacos");
tacos.onclick = () => {
    quitarElementos();
  t((datos) => {
    comida = datos[1].products;
    agregar(comida, "Tacos");
  });
};

let salads = document.getElementById("salads");
salads.onclick = () => {
    quitarElementos();
  t((datos) => {
    comida = datos[2].products;
    agregar(comida, "Salads");
  });
};

let desserts = document.getElementById("desserts");
desserts.onclick = () => {
    quitarElementos();
  t((datos) => {
    comida = datos[3].products;
    agregar(comida, "Desserts");
  });
};

let drinks = document.getElementById("drinks");
drinks.onclick = () => {
    quitarElementos();
  t((datos) => {
    comida = datos[4].products;
    agregar(comida, "Drinks & Slides");
  });
};



let carritopic = document.getElementById("carritoFoto");
carritopic.onclick = () => {
    let divNombre = document.getElementById("titulotipoProducto");
    let nom = document.createElement("h1");
    nom.innerText = "Order detail";
    nom.className = "text-center";
    divNombre.appendChild(nom);
    creartablacarrito()    
};

function creartablacarrito(){

    quitarElementos();
    let totaltotal=0
    let divtable = document.getElementById("productos");

    let table = document.createElement("table");
    table.className='table table-striped';
    table.setAttribute('id', 'tablacarrito')
    let thead = document.createElement("thead");
    let tr = document.createElement("tr");
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    let th3 = document.createElement("th");
    let th4 = document.createElement("th");
    let th5 = document.createElement("th");
    let th6 = document.createElement("th");

    th1.textContent='Item'
    th2.textContent='Qty.'
    th3.textContent='Description'
    th4.textContent='Unit Price'
    th5.textContent='Amount'
    th6.textContent='Modify'
    

    tr.appendChild(th1)
    tr.appendChild(th2)
    tr.appendChild(th3)
    tr.appendChild(th4)
    tr.appendChild(th5)
    tr.appendChild(th6)

    thead.appendChild(tr)
    table.appendChild(thead);

    divtable.appendChild(table);



    i=1
    
    var setofcarrito = new Set();
    carrito.forEach(element=> {
            setofcarrito.add(element)
    });

    setofcarrito.forEach(food=>{
        
        let tr = document.createElement('tr')
        let td1 = document.createElement('th')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        let td5 = document.createElement('td')
        let td6 = document.createElement('td')
        let divbtn = document.createElement('div')
        let boton1 = document.createElement("a");
        divbtn.className="d-grid gap-2"
        boton1.className = "btn btn-dark";
        boton1.innerText = "+";
        let boton2 = document.createElement("a");
        boton2.className = "btn btn-dark";
        boton2.innerText = "-";
        boton1.style="margin:1px"

        divbtn.appendChild(boton1);
        divbtn.appendChild(boton2);
        td6.appendChild(divbtn)
        boton1.onclick = () => {
            carrito.push(food);
            confirmation=[];
            creartablacarrito();
            getNumeroItems(carrito.length + " Items");
          };
        boton2.onclick = () => {
            carrito.pop(food);
            confirmation=[];
            creartablacarrito();
            getNumeroItems(carrito.length + " Items");
          };
        
        td1.textContent=i
        i+=1
        var cantidad=0
        var total =0
        carrito.forEach(countable=>{
            if(countable.name=== food.name)
            {
                cantidad+=1
            }
        })
        
        total=cantidad*food.price
        td2.textContent=cantidad
        td3.textContent = food.description
        td4.textContent = food.price
        td5.textContent = total
        totaltotal+=total

        var id = i-1;
        var quantity = cantidad;
        var descripcion = food.description;
        var unitprice = food.price;
        var obj = {'id': id, 'quantity': quantity,'description':descripcion,'unitprice':unitprice};
        confirmation.push(obj);

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(td6)

        table.appendChild(tr)
    
    });
    let finalconteiner = document.createElement("div");

    finalconteiner.className="container";

    let finalrow = document.createElement("div");
    finalrow.className="row"
    let total =  document.createElement("div");
    total.className="col-9"
    let rowbotonesfinales=document.createElement("div");
    rowbotonesfinales.className="col-3"

    let divbotonesfinales=document.createElement("div");
    
    let botoncancel = document.createElement("a");
    botoncancel.className = "btn btn-danger";
    botoncancel.innerText = "Cancel";

    let botonconfirm = document.createElement("a");
    botonconfirm.className = "btn btn-success";
    botonconfirm.innerText = "Confirm Order";
    
    botoncancel.setAttribute("data-toggle","modal")
    botoncancel.setAttribute("data-target","#exampleModal")
    
    
    botonconfirm.onclick = () => {
      console.log(confirmation)
      carrito=[];
      confirmation=[];
      creartablacarrito();
      getNumeroItems(carrito.length + " Items");

    };


    divbotonesfinales.className="d-grid gap-2"
    divbotonesfinales.appendChild(botoncancel);
    divbotonesfinales.appendChild(botonconfirm);

    rowbotonesfinales.appendChild(divbotonesfinales)
    let p= document.createElement("p");
    let b= document.createElement("b");
    b.innerText= "Total: $"+totaltotal
    p.appendChild(b)
    total.appendChild(p)
    finalrow.appendChild(total)
    finalrow.appendChild(rowbotonesfinales)
    finalconteiner.appendChild(finalrow)
    divtable.appendChild(finalconteiner)

}





function agregar(comida, titulo) {
    let divProductos = document.getElementById("productos");
    let divNombre = document.getElementById("titulotipoProducto");
    let nom = document.createElement("h1");
    nom.innerText = titulo;
    nom.className = "text-center";
    divNombre.appendChild(nom);
    let divContainerRow = document.createElement("div");
    divContainerRow.className = "row";
  
    comida.forEach(element => {
        let card = document.createElement("div");
        card.className = "card";
        card.style="width: 18rem;"
        let imagen = document.createElement("img");
        imagen.src = element.image;
        imagen.className = "card-img-top cardpic";

        
        let cardBody = document.createElement("div");
        cardBody.className = "card-body";
    
        cardBody.appendChild(imagen);

        let titulo= document.createElement("h5");
        titulo.innerText = element.name;
        titulo.className = "card-title";
        cardBody.appendChild(titulo);
    
        let descripcion = document.createElement("p");
        descripcion.innerText = element.description;
        descripcion.className = "card-text";
        cardBody.appendChild(descripcion);
    
        let precio = document.createElement("p");
        precio.innerHTML = "$" + element.price;
        precio.className = "font-weight-bold card-text card-price";
        cardBody.appendChild(precio);

        let boton = document.createElement("a");
        boton.className = "btn btn-dark";
        boton.innerText = "Add to car";
        cardBody.appendChild(boton);

        card.appendChild(cardBody);
        divContainerRow.appendChild(card);
        divProductos.appendChild(divContainerRow);

        boton.onclick = () => {
            carrito.push(element);
            getNumeroItems(carrito.length + " Items");
          };
    });

  }

  
  function getNumeroItems(texto)
  {
      let item = document.getElementById("numeroProductosCarro");
      item.innerHTML = texto;
  }


  let cancelorder = document.getElementById("cancelorder");
cancelorder.onclick = () => {
  carrito=[];
  confirmation=[];
  creartablacarrito();
  getNumeroItems(carrito.length + " Items");
};

let acceptorder = document.getElementById("acceptorder");
acceptorder.onclick = () => {

};

