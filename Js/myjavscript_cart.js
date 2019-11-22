let Cartitemselect = document.querySelector('#cartitems');
function renderCart () {
    
    //begin withe cart design
    Cartitemselect.textContent ='';
    // get the Cart itemData from local storage
    if(typeof CartItems === 'undefined'){
        CartItems = JSON.parse(window.localStorage.getItem('Items-Bought'));
    }
    CartItems.forEach(function (element, indice) {


        //start creating Nodes in html
        let mybuyNode = document.createElement('li');
        mybuyNode.classList.add('list-group-item', 'text-right');
        mybuyNode.textContent = element['name'] +  '-' + element['Price'];
        
        // Cancellation button
        let myButtonNode = document.createElement('button');
        myButtonNode.classList.add('btn', 'btn-danger', 'mx-5');
        myButtonNode.textContent = 'X';
        myButtonNode.setAttribute('position', indice);
        myButtonNode.addEventListener('click', DeleteItemCart);
        
        // append nodes
        mybuyNode.appendChild(myButtonNode);
        Cartitemselect.appendChild(mybuyNode);
    });
}
renderCart();
function DeleteItemCart() {
    
    let buttonClicked = this.getAttribute('position');
    
    // Delete the index from the Cart

    CartItems.splice(buttonClicked, 1);
    console.log(CartItems)
    // re-render the Cart
    renderCart();
    // Calculate the new price
    calculateTotal();
}
function calculateTotal(){
    total = 0;
    for(let i = 0; i<CartItems.length; i++){
        total += parseInt(CartItems[i]['Price'].split(" ")[0]) * parseInt(CartItems[i]['Number']);
    }
   window.localStorage.setItem('Total', total);
}


