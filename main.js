let nombrePrimerProducto = "Paleta de Padel Cougar Atix";
let precioPrimerProducto = 40000;
let nombreSegundoProducto = "Paleta de Padel Cougar Raptor";
let precioSegundoProducto = 35000;
let nombreTercerProducto = "Paleta de Padel Cougar Primal";
let precioTercerProducto = 25000;
let montoCarrito = 0;
let carritoDeCompra = "";



function desplegarMenu()
{
    do 
    {
        let opcion = prompt("Ingrese una opción:\n 1. Ver lista de Productos \n 2. Ver precio de Producto Seleccionado \n 3. Formas de pago \n 4. Sumar al carrito \n 5. Mostrar carrito \n 0. Salir");
        
        switch (opcion) {
            case "1":
                alert(` 1. ${nombrePrimerProducto} \n 2. ${nombreSegundoProducto} \n 3. ${nombreTercerProducto}`);
                desplegarMenu();
                break;

            case "2":
                opcion = prompt(`¿Sobre que producto quiere saber el precio?\n 1. ${nombrePrimerProducto} \n 2. ${nombreSegundoProducto} \n 3. ${nombreTercerProducto}`);
                if(verificarOpcionCorrecta(opcion))
                {
                    switch (opcion) {
                        case "1":
                            alert(`El precio de ${nombrePrimerProducto} es de ${precioPrimerProducto}`);
                            break;

                        case "2":
                            alert(`El precio de ${nombreSegundoProducto} es de ${precioSegundoProducto}`);
                            break;

                        case "3":
                            alert(`El precio de ${nombreTercerProducto} es de ${precioTercerProducto}`);
                            break;
                    }
                }
                else
                {
                    alert("Opción invalida.");
                }
                desplegarMenu();
                break;

            case "3":
                alert("Metodos de pago: \n 1. Efectivo/Transferencia \n 2. Tarjeta de Débito \n 3. Tarjeta de Crédito ");
                desplegarMenu();
                break;

            case "4":
                opcion = prompt(`¿Que producto quiere agregar al carrito?\n 1. ${nombrePrimerProducto} \n 2. ${nombreSegundoProducto} \n 3. ${nombreTercerProducto}`);
                if(verificarOpcionCorrecta(opcion))
                {
                    switch (opcion) {
                        case "1":
                            montoCarrito += precioPrimerProducto;
                            carritoDeCompra = carritoDeCompra + "\n" + nombrePrimerProducto;
                            break;

                        case "2":
                            montoCarrito += precioSegundoProducto;
                            carritoDeCompra = carritoDeCompra + "\n" + nombreSegundoProducto;
                            break;

                        case "3":
                            montoCarrito += precioTercerProducto;
                            carritoDeCompra = carritoDeCompra + "\n" + nombreTercerProducto;
                            break;
                    }
                }
                else
                {
                    alert("Opción invalida.");
                }
                desplegarMenu();
                break;

            case "5":
                alert(`Carrito: ${carritoDeCompra} \n Total: $${montoCarrito}`);
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

function verificarOpcionCorrecta(opcionIngresada)
{
    if(opcionIngresada === "1" || opcionIngresada === "2" || opcionIngresada === "3")
    {
        return true;
    }
    else
    {
        return false;
    }
}

desplegarMenu();
