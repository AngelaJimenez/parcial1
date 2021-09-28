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
  
    //Productos ordenados
    let divContainerRow = document.createElement("div");
    divContainerRow.className = "row";
  
  
  }