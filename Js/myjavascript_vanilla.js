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
        newNodeImage.classList.add('img-fluid','card-image'); 
        /*newNodeImage.style.width = '200px';*/
        newNodeImage.style.height = '250px';
        newNodeImage.src = element['logo'];
        // creating the price part
        let newNodePrice = document.createElement('p');
        newNodePrice.classList.add('card-text');
        newNodePrice.textContent = element['priceofProduct'] + '€';

        //creating the blank space to increment the numbers 
        let newNodeNumberItems= document.createElement('input');
        newNodeNumberItems.classList.add('form-control','boxed', 'inlineElement');
        newNodeNumberItems.placeholder='Add';
        newNodeNumberItems.id = element['typeofProduct'];
        newNodeNumberItems.value=0;
        //buttons
        let newNodebuttonleft = document.createElement('button');
        newNodebuttonleft.classList.add('btn', 'btn-primary', 'dropbtn','inlineElement');
        newNodebuttonleft.textContent = '-';
        newNodebuttonleft.setAttribute('marketbuy', element['typeofProduct']);
        newNodebuttonleft.addEventListener('click', UpdateValueDecrement);

        let newNodebuttonright = document.createElement('button');
        newNodebuttonright.classList.add('btn', 'btn-primary', 'dropbtn', 'inlineElement');
        newNodebuttonright.textContent = '+';
        newNodebuttonright.setAttribute('marketbuy', element['typeofProduct']);
        newNodebuttonright.addEventListener('click', UpdateValueIncrement);

        //select options 
        let newNodeSelectbody = document.createElement('div');
        newNodeSelectbody.classList.add('options','col-sm-2');

        let newNodeSelect = document.createElement('select');
        


        newNodeCardbody.appendChild(newNodeTitle);
        newNodeCardbody.appendChild(newNodeImage);
        newNodeCardbody.appendChild(newNodePrice);
        newNodeCardbody.appendChild(newNodebuttonleft);
        newNodeCardbody.appendChild(newNodeNumberItems);
        newNodeCardbody.appendChild(newNodebuttonright);
        newNode.appendChild(newNodeCardbody);
        Itemselement.appendChild(newNode);

        
        //console.log(element)
    });
}
renderProducts();

function UpdateValueIncrement(){
   var elem = this.getAttribute('marketbuy');
    document.getElementById(elem).value = parseInt (document.getElementById(elem).value) +1;
}

function UpdateValueDecrement(){
    var elem = this.getAttribute('marketbuy');
     document.getElementById(elem).value = Math.max(parseInt (document.getElementById(elem).value) -1,0);
 }
