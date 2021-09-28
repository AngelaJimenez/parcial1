carrito = [];

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


//VACIAR HTML
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

//Interacción
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


//PRODUCTOS
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

    function getNumeroItems(texto)
    {
        let item = document.getElementById("numeroProductosCarro");
        item.innerHTML = texto;
    }
  }