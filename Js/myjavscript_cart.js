let Cartitemselect = document.querySelector('#cartitems');
let totalValue = document.querySelector('#itemstotal');
function renderCart () {
    
    //begin withe cart design
    Cartitemselect.textContent ='';
    // get the Cart itemData from local storage
    if(typeof CartItems === 'undefined'){
        CartItems = JSON.parse(window.localStorage.getItem('Items-Bought'));
    }
    CartItems.forEach(function (element, indice) {

        var strings = element['ProductType'].split(",");
        var pricestrings= element['Price'].split(" ");
        //start creating Nodes in html
        let mybuyNode = document.createElement('div');
        mybuyNode.classList.add('cart-body', 'text-center', 'col-sm-12');
        
        let mybuyNodelistparent = document.createElement('div');
        mybuyNodelistparent.classList.add('cart-item','row');

        let mybuyNodelistchild = document.createElement('div');
        mybuyNodelistchild.classList.add('cart-item', 'col-sm-2');
        
        let mybuyNodelistchildImg = document.createElement('img');
        mybuyNodelistchildImg.classList.add('img-fluid','cart-image'); 
       // newNodeImage.style.height = '50px';
        mybuyNodelistchildImg.src = element['image'];
        mybuyNodelistchildImg.style.height='80px';


        let mybuyNodelistchildTextparent = document.createElement('div');
        mybuyNodelistchildTextparent.classList.add('col-sm-4','d-sm-none', 'd-md-block');
    
        let mybuyNodelistchildTextchildHeading = document.createElement('h3');
        mybuyNodelistchildTextchildHeading.classList.add('fontuse','fontsizebig','text-left', 'fontweightheavy');
        mybuyNodelistchildTextchildHeading.textContent=element['name'];

        let mybuyNodelistchildTextchildtext = document.createElement('p');
        mybuyNodelistchildTextchildtext.classList.add('fontuse', 'fontsizesmall','text-left');
        mybuyNodelistchildTextchildtext.textContent= 'This ' + element['name'] +' consists of the following options: ' 
                                                    + strings[0] + ' , ' + strings[1];

        let mybuyNodelistchildPrice = document.createElement('div');
        mybuyNodelistchildPrice.classList.add('col-sm-2','fontuse', 'fontweightbold');
        mybuyNodelistchildPrice.textContent= pricestrings[0] + '.00';

        let mybuyNodelistchildQuantity = document.createElement('div')
        mybuyNodelistchildQuantity.classList.add('col-sm-1','box-item', 'text-center', 'fontweightbold' )
        mybuyNodelistchildQuantity.textContent = element['Number'];

        let mybuyNodelistchildTotal = document.createElement('div');
        mybuyNodelistchildTotal.classList.add('col-sm-1','fontuse', 'fontweightbold');
        mybuyNodelistchildTotal.textContent= parseInt(element['Price'])*parseInt(element['Number']);
        
        // Cancellation button
        let mybuyNodeButtonNode = document.createElement('button');
        mybuyNodeButtonNode.classList.add('col-sm-1','btn', 'btn-danger', 'mx-5');
        mybuyNodeButtonNode.textContent = 'X';
        mybuyNodeButtonNode.setAttribute('position', indice);
        mybuyNodeButtonNode.addEventListener('click', DeleteItemCart);
        
        // append nodes
        mybuyNodelistchild.appendChild(mybuyNodelistchildImg);
        mybuyNodelistparent.appendChild(mybuyNodelistchild);
        mybuyNodelistchildTextparent.appendChild(mybuyNodelistchildTextchildHeading);
        mybuyNodelistchildTextparent.appendChild(mybuyNodelistchildTextchildtext);
        mybuyNodelistparent.appendChild(mybuyNodelistchild);
        mybuyNodelistparent.appendChild(mybuyNodelistchildTextparent);
        mybuyNodelistparent.appendChild(mybuyNodelistchildPrice);
        mybuyNodelistparent.appendChild(mybuyNodelistchildQuantity)
        mybuyNodelistparent.appendChild(mybuyNodelistchildTotal)
        mybuyNodelistparent.appendChild(mybuyNodeButtonNode);
        
        mybuyNode.appendChild(mybuyNodelistparent);
        Cartitemselect.appendChild(mybuyNode);
    });
}

let mybuyTotalNode = document.createElement('div');
mybuyTotalNode.classList.add('cart-body', 'text-right', 'col-md-4', 'ml-auto', 'fontweightheavy', 'fontuse');
mybuyTotalNode.textContent="TOTAL : " + window.localStorage.getItem('Total') + ' €';

totalValue.appendChild(mybuyTotalNode);
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



