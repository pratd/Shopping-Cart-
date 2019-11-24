//functions for the shopping cart
window.localStorage.clear();
let Itemselement = document.querySelector('#items');
let CartFinal = [];
function renderProducts(){
    Cardarray.forEach(element => {
        window.localStorage.setItem('Item ' + element['name'], JSON.stringify(element));

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
        newNodeImage.id = element['logo'];

        // creating the price part
        let newNodePrice = document.createElement('p');
        newNodePrice.classList.add('card-text');
        newNodePrice.id = element['priceofProduct'];
        newNodePrice.textContent = element['priceofProduct'] + ' €';

        //creating the blank space to increment the numbers 
        let newNodeNumberItems= document.createElement('input');
        newNodeNumberItems.classList.add('form-control','boxed', 'inlineElement');
        newNodeNumberItems.placeholder='Add';
        newNodeNumberItems.id = element['name'];
        newNodeNumberItems.value=0;
        //buttons
        let newNodebuttonleft = document.createElement('button');
        newNodebuttonleft.classList.add('btn', 'btn-primary', 'dropbtn','inlineElement');
        newNodebuttonleft.textContent = '-';
        newNodebuttonleft.setAttribute('marketbuy', element['name']);
        newNodebuttonleft.addEventListener('click', UpdateValueDecrement);

        let newNodebuttonright = document.createElement('button');
        newNodebuttonright.classList.add('btn', 'btn-primary', 'dropbtn', 'inlineElement');
        newNodebuttonright.textContent = '+';
        newNodebuttonright.setAttribute('marketbuy', element['name']);
        newNodebuttonright.addEventListener('click', UpdateValueIncrement);

        //select options 
        let newNodeSelectbody = document.createElement('div');
        newNodeSelectbody.classList.add('selectbody','row','justify-content-around', 'py-3' );
        
        let newNodeSelectA = document.createElement('select');
        newNodeSelectA.classList.add('dropdown-content','col-sm-4');
        newNodeSelectA.setAttribute('selectedA',element['name'])
        newNodeSelectA.addEventListener('change', ShowtypeA) ;

        var selectarrayA = element['optionsofProduct']['typeA'];
        var selectarrayB = element['optionsofProduct']['typeB'];
        var options_strA='<option value="' + 0 + '"></option>';
        
        if (selectarrayA !== undefined){
            selectarrayA.forEach(type => {
                options_strA += '<option value="' + type + '">' + type + '</option>';
            });
                  
        }
        var options_strB='<option value="' + 0 + '"></option>';
        if (selectarrayB !== undefined){
            selectarrayB.forEach(type => {
                options_strB += '<option value="' + type + '">' + type + '</option>';
            });
                  
        }
        newNodeSelectA.innerHTML=options_strA;
        let newNodeSelectB = document.createElement('select');
        newNodeSelectB.classList.add('dropdown-content','col-sm-4');
        newNodeSelectB.innerHTML=options_strB;
        newNodeSelectB.setAttribute('selectedB',element['name'])
        newNodeSelectB.addEventListener('change', ShowtypeB) ;
        //create a div element to store the variables hidden
        let tempNodeA = document.createElement('div');
        tempNodeA.id = element['IdA'];
        tempNodeA.classList.add('temporary');
        tempNodeA.style.display='None';

        let tempNodeB = document.createElement('div');
        tempNodeB.id = element['IdB'];
        tempNodeB.classList.add('temporary');
        tempNodeB.style.display='None';
        
        //create a div element to show the number of stocks left
        let newNodeStock = document.createElement('input')
        newNodeStock.classList.add('form-control','boxed', 'col-1', 'd-none', 'd-xl-block');
        newNodeStock.id = element['optionsofProduct']['Stock'];
        //newNodeStock.setAttribute('Stock',element['name']);
        newNodeStock.value=0;
        
        //create the buy button
        let newNodeBuy  = document.createElement('button');
        newNodeBuy.classList.add('btn', 'btn-primary', 'Buybtn', 'inlineElement');
        newNodeBuy.textContent = 'BUY';
        newNodeBuy.setAttribute('Buy', element['name']);
        newNodeBuy.addEventListener('click', PushtoCart);

        //append childs
        if (selectarrayA !== undefined){
            newNodeSelectbody.appendChild(newNodeSelectA);
            newNodeSelectbody.appendChild(tempNodeA);
        }
        if (selectarrayB !== undefined){
            newNodeSelectbody.appendChild(newNodeSelectB);
            newNodeSelectbody.appendChild(tempNodeB);
        }


        newNodeSelectbody.appendChild(newNodeStock);
        newNodeCardbody.appendChild(newNodeTitle);
        newNodeCardbody.appendChild(newNodeImage);
        newNodeCardbody.appendChild(newNodePrice);
        //newNodeCardbody.appendChild(tempNodeA);
        //newNodeCardbody.appendChild(tempNodeB);
        newNodeCardbody.appendChild(newNodebuttonleft);
        newNodeCardbody.appendChild(newNodeNumberItems);
        newNodeCardbody.appendChild(newNodebuttonright);
        newNodeCardbody.appendChild(newNodeSelectbody);
        newNodeCardbody.appendChild(newNodeBuy);
        newNode.appendChild(newNodeCardbody);
        Itemselement.appendChild(newNode);

        
        //console.log(document.getElementById(element['IdA'].value))
    });
}
renderProducts();

function UpdateValueIncrement(){
   var elem = this.getAttribute('marketbuy');
    Cardarray.forEach(element => {
        if (elem === element['name']){
            if (document.getElementById(element['optionsofProduct']['Stock']).value !== '0' ) {
                var stockvalue = document.getElementById(element['optionsofProduct']['Stock']).value;
                stockvalue = Math.max( parseInt(stockvalue) - 1, 0 );
                //get the maximum value of the array
                index1 = document.getElementById(element['IdA']).value;
                if ( document.getElementById(element['IdB']) === null){
                    maxmimumValue = parseInt(element['optionsofProduct']['Stock'][index1]);
                }else{
                    var index2 = document.getElementById(element['IdB']).value;
                    maxmimumValue = parseInt(element['optionsofProduct']['Stock'][index1][index2]);
                }
                document.getElementById(elem).value = Math.min( maxmimumValue, parseInt(document.getElementById(elem).value) +1);
                document.getElementById(element['optionsofProduct']['Stock']).value = stockvalue;
                window.localStorage.setItem('Item-Left: ' + element['name'], stockvalue);
            }else{
                document.getElementById(element['optionsofProduct']['Stock']).value = 0;
                return false;
            }            
        }
    });
}

function UpdateValueDecrement(){
    var elem = this.getAttribute('marketbuy');
     Cardarray.forEach(element => {
         if (elem ==element["name"]){
            if (document.getElementById(elem).value !== '0' ) {
                var stockvalue = document.getElementById(element['optionsofProduct']['Stock']).value;
                //get the maximum value of the array
                index1 = document.getElementById(element['IdA']).value;
                if (document.getElementById(element['IdB']) == null){
                    maxmimumValue = parseInt(element['optionsofProduct']['Stock'][index1]);
                }else{
                    var index2 = document.getElementById(element['IdB']).value;
                    maxmimumValue = parseInt(element['optionsofProduct']['Stock'][index1][index2]);
                }
                document.getElementById(elem).value = Math.max( 0, parseInt(document.getElementById(elem).value) -1);
                stockvalue = Math.max( parseInt(stockvalue) + 1, 0 );
                document.getElementById(element['optionsofProduct']['Stock']).value = stockvalue;
                window.localStorage.setItem('Item-Left: ' + element['name'], stockvalue);
            }else{
                if (document.getElementById(element['IdB']) == null){
                    maxmimumValue = parseInt(element['optionsofProduct']['Stock'][index1]);
                }else{
                    var index2 = document.getElementById(element['IdB']).value;
                    maxmimumValue = parseInt(element['optionsofProduct']['Stock'][index1][index2]);
                }
                document.getElementById(element['optionsofProduct']['Stock']).value = maxmimumValue;
                return false;
            }
         }
    });
 }

 function ShowtypeA(){
   var parent = this.getAttribute('selectedA');
   var index = this.selectedIndex;
   Cardarray.forEach(element => {
       if (parent == element['name']){
            document.getElementById(element['IdA']).value= index;
            if(element['IdA']=== 1 || element['IdA']=== 4 || element['IdA']=== 6){
                if (typeof document.getElementById(element['IdA']).value !== 'undefined' ) {
                        if (document.getElementById(element['IdB']).value !== undefined ){
                            index1 = index;
                            index2 = document.getElementById(element['IdB']).value;
                            document.getElementById(element['optionsofProduct']['Stock']).value =
                            parseInt(element['optionsofProduct']['Stock'][index1][index2]);
                            document.getElementById(element['priceofProduct']).textContent = 
                            parseInt(element['optionsofProduct']['Price'][index1][index2]) + ' €';
                            window.localStorage.setItem(element['name'], element['optionsofProduct']['tempA'][index1]+','+
                            element['optionsofProduct']['tempB'][index2]);
                        }else{
                            index1 = index;
                            index2 = '0';
                            document.getElementById(element['optionsofProduct']['Stock']).value =
                            parseInt(element['optionsofProduct']['Stock'][index1][index2]);
                            document.getElementById(element['priceofProduct']).textContent = 
                            parseInt(element['optionsofProduct']['Price'][index1][index2]) + ' €';
                            window.localStorage.setItem(element['name'], element['optionsofProduct']['tempA'][index1]+','+
                            element['optionsofProduct']['tempB'][index2]);
                        }
                } else{
                    if ( document.getElementById(element['IdB']).value !== undefined ){
                        index1 = '0';
                        index2 = document.getElementById(element['IdB']).value;
                        document.getElementById(element['optionsofProduct']['Stock']).value =
                        parseInt(element['optionsofProduct']['Stock'][index1][index2]);
                        document.getElementById(element['priceofProduct']).textContent = 
                        parseInt(element['optionsofProduct']['Price'][index1][index2]) + ' €';
                        window.localStorage.setItem(element['name'], element['optionsofProduct']['tempA'][index1]+','+
                        element['optionsofProduct']['tempB'][index2]);
                    }else{
                        index1 = '0';
                        index2 = '0';
                        document.getElementById(element['optionsofProduct']['Stock']).value =
                        parseInt(element['optionsofProduct']['Stock'][index1][index2]);
                        document.getElementById(element['priceofProduct']).textContent = 
                        parseInt(element['optionsofProduct']['Price'][index1][index2]) + ' €';
                        window.localStorage.setItem(element['name'], element['optionsofProduct']['tempA'][index1]+','+
                        element['optionsofProduct']['tempB'][index2]);
                    }  
                }         
            }else{
                if (typeof document.getElementById(element['IdA']).value !== 'undefined' ) {
                    index1= index;
                    document.getElementById(element['optionsofProduct']['Stock']).value =
                    parseInt(element['optionsofProduct']['Stock'][index1]);
                    document.getElementById(element['priceofProduct']).textContent = 
                    parseInt(element['optionsofProduct']['Price'][index1]) + ' €';
                    window.localStorage.setItem(element['name'], element['optionsofProduct']['tempA'][index1]);
                        
                } else{
                    index1='0';
                    document.getElementById(element['optionsofProduct']['Stock']).value =
                    parseInt(element['optionsofProduct']['Stock'][index1]);
                    document.getElementById(element['priceofProduct']).textContent = 
                    parseInt(element['optionsofProduct']['Price'][index1]) + ' €';
                    window.localStorage.setItem(element['name'], element['optionsofProduct']['tempA'][index1]);
                }         

            }
       }
   });
}   

function ShowtypeB(){
    var parent = this.getAttribute('selectedB');
    var index = this.selectedIndex;
    Cardarray.forEach(element => {
        if (parent == element['name']){
             document.getElementById(element['IdB']).value= index;
             if(element['IdB']=== '1a' || element['IdB']=== '4a' || element['IdB']=== '6a'){
                if (typeof document.getElementById(element['IdB']).value !== 'undefined' ) {
                        if (typeof document.getElementById(element['IdA']).value !=='undefined') {
                            index1 = document.getElementById(element['IdA']).value;
                            index2 = index;
                            document.getElementById(element['optionsofProduct']['Stock']).value =
                            parseInt(element['optionsofProduct']['Stock'][index1][index2]);
                            document.getElementById(element['priceofProduct']).textContent = 
                            parseInt(element['optionsofProduct']['Price'][index1][index2]) + ' €';
                            window.localStorage.setItem(element['name'], element['optionsofProduct']['tempA'][index1]+','+
                            element['optionsofProduct']['tempB'][index2]);
                        }else{
                            index1 = '0';
                            index2 = index;
                            document.getElementById(element['optionsofProduct']['Stock']).value =
                            parseInt(element['optionsofProduct']['Stock'][index1][index2]);
                            document.getElementById(element['priceofProduct']).textContent = 
                            parseInt(element['optionsofProduct']['Price'][index1][index2]) + ' €';
                            window.localStorage.setItem(element['name'], element['optionsofProduct']['tempA'][index1]+','+
                            element['optionsofProduct']['tempB'][index2]);
                        }
                } else{
                    if (typeof document.getElementById(element['IdA']).value !=='undefined' ){
                        index1 = document.getElementById(element['IdA']).value;
                        index2 = '0';
                        //console.log(index2)
                        document.getElementById(element['optionsofProduct']['Stock']).value =
                        parseInt(element['optionsofProduct']['Stock'][index1][index2]);
                        document.getElementById(element['priceofProduct']).textContent = 
                        parseInt(element['optionsofProduct']['Price'][index1][index2]) + ' €';
                        window.localStorage.setItem(element['name'], element['optionsofProduct']['tempA'][index1]+','+
                        element['optionsofProduct']['tempB'][index2]);
                    }else{
                        index1 = '0';
                        index2 = '0';
                        document.getElementById(element['optionsofProduct']['Stock']).value =
                        parseInt(element['optionsofProduct']['Stock'][index1][index2]);
                        document.getElementById(element['priceofProduct']).textContent = 
                        parseInt(element['optionsofProduct']['Price'][index1][index2]) + ' €';
                        window.localStorage.setItem(element['name'], element['optionsofProduct']['tempA'][index1]+',' + 
                        element['optionsofProduct']['tempB'][index2]);
                    }  
                }         
            }else{
                if (typeof document.getElementById(element['IdB']).value !== 'undefined' ) {
                    index2= index;
                    document.getElementById(element['optionsofProduct']['Stock']).value =
                    parseInt(element['optionsofProduct']['Stock'][index2]);
                    document.getElementById(element['priceofProduct']).textContent = 
                    parseInt(element['optionsofProduct']['Price'][index2]) + ' €';
                    window.localStorage.setItem(element['name'], element['optionsofProduct']['tempA'][index2] );
                        
                } else{
                    index2='0';
                    document.getElementById(element['optionsofProduct']['Stock']).value =
                    parseInt(element['optionsofProduct']['Stock'][index2]);
                    document.getElementById(element['priceofProduct']).textContent = 
                    parseInt(element['optionsofProduct']['Price'][index2]) + ' €';
                    window.localStorage.setItem(element['name'], element['optionsofProduct']['tempA'][index2]);
                }         

            }
        }
    })
   
} 
let Itemsbought=[];
function PushtoCart(){
    CartFinal.push(this.getAttribute('Buy'));
    Cardarray.forEach(element => {
        if (this.getAttribute('Buy')===element['name']){
            var productvalue = window.localStorage.getItem(element['name']);
            for(i=0; i<Itemsbought.length; i++){
                if(Itemsbought[i]['name']===this.getAttribute('Buy')){
                    //console.log(Itemsbought[i]['ProductType'])
                    if (Itemsbought[i]['ProductType'] === productvalue){
                        //console.log(Itemsbought.indexOf(Itemsbought[i]['ProductType']))
                        var Indexposition = i;
                        Itemsbought.splice(Indexposition,1);
                        console.log(i)
                    }
                }
            }
            Itemsbought.push({name: element['name'], 
            Number:document.getElementById(element['name']).value,
            Price: document.getElementById(element['priceofProduct']).textContent,
            ProductType: productvalue, 
            image: document.getElementById(element['logo']).src });
            window.localStorage.setItem('Items-Bought', JSON.stringify(Itemsbought));
        }
    });
    //console.log(Itemsbought)
    //calculate total 
    calculateTotal();
    //update Div element
    //UpdateDivElement();
}

function calculateTotal(){
    total = 0;
    for(let i = 0; i<Itemsbought.length; i++){
        total += parseInt(Itemsbought[i]['Price'].split(" ")[0]) * parseInt(Itemsbought[i]['Number']);
    }
   window.localStorage.setItem('Total', total);
}
