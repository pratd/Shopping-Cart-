let ProductDatabase = [
    {
        name:'Gucci tshirt',
        price: 100,
        type:'clothing',
        logo:"assets/item3.jpg",
        quantity: 50,
        options: {
            colors: ['red','white', 'blue', 'black', 'gray'],
            sizes:['S','M','L','XL','XXL'],
            Price:[[100,100,100,100,100],[120,120,120,120,120],[110,110,110,110,110],
            [130,130,130,130,130],[100,100,100,100,100]],
            stock:[[10,20,20,30,4],[15,34,7,9,10],[17,13,4,5,10],[2,15,17,19,9],[10,20,30,40,10]]
        }
    },
    {
        name:'Lamborghini  Aventador',
        price: 3000000,
        type: 'car',
        logo: 'assets/item1.jpg',
        quantity: 5,
        options:{
            colors:['red','white', 'blue', 'black', 'gray'],
            Price:[3000000,3005000, 3010000,3015000,3010000,3005000],
            Stock:[3,2,0,1,4]
        }
    },
    {
        name:'Very good wine',
        price: 200,
        type: 'food & drink',
        logo: 'assets/item5.png',
        quantity: 20,
        options:{
            colors:['red','white'],
            Price:[200,300],
            Stock:[10,12]
        }
    },
    {
        name:'Panzer 3',
        price: 5000000,
        type:'war instrument',
        logo: 'assets/item4.jpg',
        quantity:2,
        options:{
            color:['matte black','gray'],
            additions:['extra armor', 'extra shells'],
            Price:[[6200000,7000000],[5000000,5200000]],
            Stock:[[2,3],[1,1]]

        }
    },
    {
        name:'Angel Wing Begonia',
        price: 5,
        type:'House deco',
        logo: 'assets/item2.jpeg',
        quantity:50,
        typeofPlant:['with flower', 'without flower'],
        Price:[10,5],
        Stock:[30,50],
    },
    {
        name:'Macbook Pro',
        price:3500,
        type:'Electronics',
        logo: 'assets/item6.jpg',
        quantity:20,
        options:{
            RAM:['6GB','8GB','16GB'],
            colors:['Matte black','matte white','silver gray'],
            Price:[[3500, 3500, 3500],[3700,3700,3700],[4000,400,4000]],
            Stock:[[10,10,10],[15,20,34],[3,5,10]]
        }
    }
]