let Itemselement = document.querySelector('#items');

function renderProducts(){
    Cardarray.forEach(element => {


        let newNode = document.createElement('div');
        newNode.classList.add('card','col-sm-4');

        let newNodeCardbody= document.createElement('div');
        newNodeCardbody.classList.add('cardbody');
        //title
        let  newNodeTitle = document.createElement('h5');
        newNodeTitle.classList.add('card-title');
        newNodeTitle.textContent = element['name'];
        //adding image
        let newNodeImage = document.createElement('img');
        newNodeImage.classList.add('card-image'); 
        /*newNodeImage.style.width = '200px';*/
        newNodeImage.style.height = '250px';
        newNodeImage.src = element['logo'];
        // creating the price part
        let newNodePrice = document.createElement('p');
        newNodePrice.classList.add('card-text');
        newNodePrice.textContent = element['priceofProduct'] + '€';
        //buttons
        let newNodebuttonleft = document.createElement('button');
        newNodebuttonleft.classList.add('btn', 'btn-primary', 'dropbtn');
        newNodebuttonleft.textContent = '-';
        newNodebuttonleft.setAttribute('marcador', element['type']);
        //newNodebutton.addEventListener('click', AddtoCart);

        //creating the blank space to increment the numbers 
        let newNodeNumberItems
        let newNodebuttonright = document.createElement('button');
        newNodebuttonright.classList.add('btn', 'btn-primary', 'dropbtn');
        newNodebuttonright.textContent = '+';
        newNodebuttonright.setAttribute('marcador', element['type']);
        //newNodebutton.addEventListener('click', AddtoCart);

        newNodeCardbody.appendChild(newNodeTitle);
        newNodeCardbody.appendChild(newNodeImage);
        newNodeCardbody.appendChild(newNodePrice);
        newNodeCardbody.appendChild(newNodebuttonleft);
        newNodeCardbody.appendChild(newNodebuttonright);
        newNode.appendChild(newNodeCardbody);
        Itemselement.appendChild(newNode);

        //console.log(element)
    });
}

renderProducts();