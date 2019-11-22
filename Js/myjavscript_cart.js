let Cartitemselect = document.querySelector('#cartitems');
function renderCart () {
    // Vaciamos todo el html
    Cartitemselect.textContent = '';
    // Generamos los Nodos a partir de carrito
    carrito.forEach(function (item, indice) {
        // Obtenemos el item que necesitamos de la variable base de datos
        let miItem = baseDeDatos.filter(function(itemBaseDatos) {
            return itemBaseDatos['id'] == item;
        });
        // Creamos el nodo del item del carrito
        let miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right');
        miNodo.textContent = `${miItem[0]['nombre']} - ${miItem[0]['precio']}€`;
        // Boton de borrar
        let miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.setAttribute('posicion', indice);
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        Cartitemselect.appendChild(miNodo);
    })
}

function cancelItemCart() {
    // Obtenemos la posicion que hay en el boton pulsado
    let posicion = this.getAttribute('posicion');
    // Borramos la posicion que nos interesa
    carrito.splice(posicion, 1);
    // volvemos a renderizar
    renderizarCarrito();
    // Calculamos de nuevo el precio
    calcularTotal();
}

