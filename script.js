carrito = [];
modal = null;
createModal();

const URL =   "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json";


const t = (callback) => {
  fetch(URL).then((element) => {
    const a = element.json();
    a.then((r) => {
      callback(r);
    });
  });
};


//VACIAR HTML
function quitarElementos() {
  var node = document.getElementById("cartasProductos");
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
  var node = document.getElementById("tituloProducto");
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}



let burguers = document.getElementById("burguers");
burguers.onclick = () => {
    quitarElementos();
  t((datos) => {
    comida = datos[0].products;
    ponerProductos(comida, "Burgers");
  });
};

let tacos = document.getElementById("tacos");
tacos.onclick = () => {
    quitarElementos();
  t((datos) => {
    comida = datos[1].products;
    ponerProductos(comida, "Tacos");
  });
};

let salads = document.getElementById("salads");
salads.onclick = () => {
    quitarElementos();
  t((datos) => {
    comida = datos[2].products;
    ponerProductos(comida, "Salads");
  });
};

let desserts = document.getElementById("desserts");
desserts.onclick = () => {
    quitarElementos();
  t((datos) => {
    comida = datos[3].products;
    ponerProductos(comida, "Desserts");
  });
};

let drinks = document.getElementById("drinks");
drinks.onclick = () => {
    quitarElementos();
  t((datos) => {
    comida = datos[4].products;
    ponerProductos(comida, "Drinks & Slides");
  });
};


function getNumeroItems(inner) {
  let items = document.getElementById("numeroCarrito");
  items.innerHTML = inner;
}
