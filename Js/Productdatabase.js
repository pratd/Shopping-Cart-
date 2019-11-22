let ProductDatabase = [
    {   
        IdstockA:1,
        IdstockB:'1a',
        name:'Gucci tshirt',
        price: 100,
        type:'clothing',
        logo:"assets/item3.jpg",
        quantity: 50,
        options: {
            typeA: ['red','white', 'blue', 'black', 'gray'],
            typeB:['S','M','L','XL','XXL'],
            Price:[[0,0,0,0,0,0],[0,100,100,100,100,100],[0,120,120,120,120,120],[0,110,110,110,110,110],
            [0,130,130,130,130,130],[0,100,100,100,100,100]],
            Stock:[[0,0,0,0,0,0],[0,10,20,20,30,4],[0,15,34,7,9,10],[0,17,13,4,5,10],[0,2,15,17,19,9],[0,10,20,30,40,10]],
            //temporary panel
            tempA:['0','red','white', 'blue', 'black', 'gray'],
            tempB:['0','S','M','L','XL','XXL']
        }
    },
    {   
        IdstockA:2,
        IdstockB:'2a',
        name:'Lamborghini  Aventador',
        price: 3000000,
        type: 'car',
        logo: 'assets/item1.jpg',
        quantity: 5,
        options:{
            typeA:['red','white', 'blue', 'black', 'gray'],
            Price:[0,3000000,3005000, 3010000,3015000,3010000,3005000],
            Stock:[0,3,2,0,1,4],
            tempA:['0','red','white', 'blue', 'black', 'gray']
        }
    },
    {   IdstockA:3,
        IdstockB:'3a',
        name:'Very good wine',
        price: 200,
        type: 'food & drink',
        logo: 'assets/item5.png',
        quantity: 20,
        options:{
            typeA:['red','white'],
            Price:[0,200,300],
            Stock:[0,10,12],
            tempA:['0','red','white']
        }
    },
    {   
        IdstockA:4,
        IdstockB:'4a',
        name:'Panzer 3',
        price: 5000000,
        type:'war instrument',
        logo: 'assets/item4.jpg',
        quantity:2,
        options:{
            typeA:['matte black','gray'],
            typeB:['extra armor', 'extra shells'],
            Price:[[0,0,0],[0,6200000,7000000],[0,5000000,5200000]],
            Stock:[[0,0,0],[0,2,3],[0,1,1]],
            tempA:['0','matte black','gray'],
            tempB:['0','extra armor', 'extra shells']

        }
    },
    {   
        IdstockA:5,
        IdstockB:'5a',
        name:'Angel Wing Begonia',
        price: 5,
        type:'House deco',
        logo: 'assets/item2.jpeg',
        quantity:50,
        options:{
            typeA:['with flower', 'without flower'],
            Price:[0,10,5],
            Stock:[0,30,50],
            tempA:['0','with flower', 'without flower']
        } 
    },
    {   
        IdstockA:6,
        IdstockB:'6a',
        name:'Macbook Pro',
        price:3500,
        type:'Electronics',
        logo: 'assets/item6.jpg',
        quantity:20,
        options:{
            typeA:['6GB','8GB','16GB'],
            typeB:['Matte black','matte white','silver gray'],
            Price:[[0,0,0,0],[0,3500, 3500, 3500],[0,3700,3700,3700],[0,4000,4000,4000]],
            Stock:[[0,0,0,0],[0,10,10,10],[0,15,20,34],[0,3,5,10]],
            tempA:['0','6GB','8GB','16GB'],
            tempB:['0','Matte black','matte white','silver gray'],
        }
    }
]
//all the products have default value as total quantity when none is selected