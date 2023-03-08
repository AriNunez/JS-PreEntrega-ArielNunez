//  -----CLASES-----
class Producto
{
    constructor(id,nombre,descripcion,precio,categoria,urlImagen)
    {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.categoria = categoria;
        this.urlImagen = urlImagen;
    }

    // ModificarStock(stock) 
    // {
    //     if(!isNaN(stock))
    //     {
    //         this.cantidadEnStock += stock
    //         if(this.cantidadEnStock < 0)
    //         {
    //             this.cantidadEnStock = 0;
    //         }
    //     }
    // }
}

// ----- CONSTANTES Y VARIABLES GLOBALES -----
const categorias = ["Placa de Video","Procesador","Memoria RAM","Almacenamiento"]

const productos = [new Producto(1,"PLACA VIDEO GEFORCE RTX 3060 TI 8GB MSI GAMING X",`VIDEO GEFORCE RTX 3060 TI 8GB MSI GAMING X`,212000.00,categorias[0],"./Media/rtx3060ti8gbmsi.jpg"),
                    new Producto(2,"PLACA VIDEO GEFORCE RTX 3080 10GB GIGABYTE VISION OC",`VIDEO GEFORCE RTX 3080 10GB GIGABYTE VISION OC`,331000.0,categorias[0],"./Media/rtx308010gbgiga.jpg"),
                    new Producto(3,"PLACA VIDEO GEFORCE RTX 3050 8GB GIGABYTE EAGLE OC",`VIDEO GEFORCE RTX 3050 8GB GIGABYTE EAGLE OC`,190000.00,categorias[0],"./Media/rtx30508gbgiga.jpg"),
                    new Producto(4,"PROCESADOR AMD RYZEN 5 4600G AM4",`PROCESADOR AMD RYZEN 5 4600G AM4`,90000.00,categorias[1],"./Media/amdr54600g.jpg")];

let carrito = [];

const botonVaciarCarrito = document.getElementById("boton-vaciar-carrito");
botonVaciarCarrito.addEventListener("click", () => {
    localStorage.clear();
    carrito = [];
    renderizarCarrito();
})

// ----- FUNCIONES -----

function renderizarProductos()
{
    let conjuntoProductos = document.getElementById("conjunto-productos");

    productos.forEach(producto => {

        let divProducto = document.createElement("div");
        let boton;

        divProducto.innerHTML = `
        <div class="card m-3" style="width: 18rem;">
        <img src="${producto.urlImagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.descripcion}</p>
          <p class="card-text">$${producto.precio}</p>
          <a class="btn btn-primary" id="${producto.id}">Agregar</a>
        </div>
      </div>
        `;

        conjuntoProductos.appendChild(divProducto);
        boton = document.getElementById(`${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
        })

    })
}

function renderizarCarrito()
{
    let conjuntoCarrito = document.getElementById("conjunto-carrito");
    let carritoStorage = localStorage.getItem("carrito");
    
    conjuntoCarrito.innerHTML = "";

    if(carritoStorage != null)
    {
        carrito = JSON.parse(carritoStorage);
    }

    carrito.forEach(producto => {
        
        let divProducto = document.createElement("div");

        divProducto.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${producto.urlImagen}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">${producto.descripcion}</p>
              <p class="card-text"><small class="text-muted">$${producto.precio}</small></p>
            </div>
          </div>
        </div>
      </div>
        `;

        conjuntoCarrito.appendChild(divProducto);
    })


}

function agregarAlCarrito(idProducto)
{
    let producto = productos.find(item => item.id === idProducto);

    if(producto)
    {
        carrito.push(producto);
    }
    localStorage.setItem("carrito",JSON.stringify(carrito));

    renderizarCarrito();
}
// ----- INICIO PROGRAMA -----

renderizarProductos();
renderizarCarrito();


