//  -----CLASES-----
class Producto
{
    constructor(nombre,descripcion,precio,cantidadEnStock,categoria)
    {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidadEnStock = cantidadEnStock;
        this.categoria = categoria;
        // atributos o propiedas para agregar más adelante
        // id
        // urlImagen
    }

    ModificarStock(stock) 
    {
        if(!isNaN(stock))
        {
            this.cantidadEnStock += stock
            if(this.cantidadEnStock < 0)
            {
                this.cantidadEnStock = 0;
            }
        }
    }
}

// ----- CONSTANTES Y VARIABLES GLOBALES -----
const categorias = ["Placa de Video","Procesador","Memoria RAM","Almacenamiento"]

const productos = [new Producto("PLACA VIDEO GEFORCE RTX 3060 TI 8GB MSI GAMING X","Placa de video 3060ti",212000.00,5,categorias[0]),
                    new Producto("PROCESADOR AMD RYZEN 5 3600 AM4","Procesador AMD RYZEN 3600", 51000.00,3,categorias[1])]

// ----- FUNCIONES -----
const listarProductos = (productos) => { let mensaje = "LISTA DE PRODUCTOS:";
    for (let i = 0; i < productos.length; i++) {
        mensaje += `\n ${i}. ${productos[i].nombre} \n ${productos[i].descripcion} \n $ ${productos[i].precio} \n Stock: ${productos[i].cantidadEnStock} \n Categoria: ${productos[i].categoria} \n`;
    }
    return mensaje;
}

const listarCategorias = () => { let mensaje = "";
    for (let i = 0; i < categorias.length; i++) {
        mensaje += `${i}. ${categorias[i]}\n`        
    }
    return mensaje;
}

const agregarProducto = (productos,mostrarCategorias) => { let nombre = prompt("Ingrese el nombre del producto:");
    let descripcion = prompt("Ingrese la descripcion del producto:");
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));
    let stock = parseInt(prompt("Ingrese el stock del producto:"));
    let categoria = parseInt(prompt("Seleccione la categoria del producto:\n" + mostrarCategorias()));

    if(!isNaN(categoria) && categoria >= 0 && categoria < productos.length)
    {
        productos.push(new Producto(nombre,descripcion,precio,stock,categorias[categoria]));
    }
    else
    {
        alert("Error al agregar producto");
    }
}

function modificarStock()
{
    let productoAModificar = parseInt(prompt("Seleccione el producto a modificar:\n" + listarProductos(productos)));
    let stock;

    if(!isNaN(productoAModificar) && productoAModificar >= 0 && productoAModificar < productos.length)
    {
        stock = parseInt(prompt("Ingrese la cantidad de stock para sumar o restar (números positivos para sumar y negativos para restar):"));
        if(!isNaN(stock))
        {
            productos[productoAModificar].ModificarStock(stock);
        }
        else
        {
            alert("Valor ingresado invalido");
        }
    }
    else
    {
        alert("Valor ingresado invalido");
    }
}
function desplegarMenu()
{
    do 
    {
        let opcion = prompt("Ingrese una opción:\n 1. Mostrar Productos \n 2. Agregar Producto \n 3. Modificar Stock de Producto \n 4. Filtrar Productos \n 0. Salir");
        switch (opcion) {
            case "1":
                alert(listarProductos(productos));
                desplegarMenu();
                break;

            case "2":
                agregarProducto(productos,listarCategorias);
                desplegarMenu();
                break;

            case "3":
                modificarStock();
                desplegarMenu();
                break;

            case "4":
                let filtro = prompt("Ingrese la palabra clave para realizar el filtrado:");
                alert(listarProductos(productos.filter((item) => item.nombre.includes(filtro.toUpperCase()))));
                desplegarMenu();
                break;

            case "0":
                alert("Gracias por visitar nuestro sitio!");
            break;
        
            default:
                alert("Opción invalida. Vuelva a seleccionar");
                desplegarMenu();
                break;
        }
    } while (opcion !== "0");
}
productos.push(new Producto("PLACA VIDEO GEFORCE RTX 3060 TI 8GB MSI GAMING X","Placa de video 3060ti",212000.00,20,categorias[0]));

desplegarMenu();
