let ProductDatabase = [
    {
        name:'Gucci tshirt',
        price: 100,
        type:'clothing',
        logo:"assets/item3.jpg",
        quantity: 50,
        options: {
            More: [{
                colors: ['red','white', 'blue', 'black', 'gray'],
                sizes:['S','M','L','XL','XXL']
            }]
        }
    },
    {
        name:'Lamborghini  Aventador',
        price: 3000000,
        type: 'car',
        logo: 'assets/item1.jpg',
        quantity: 5,
        options:{
            More:[{
                colors:['red','white', 'blue', 'black', 'gray']
            }]
        }
    },
    {
        name:'Very good wine',
        price: 200,
        type: 'food & drink',
        logo: 'assets/item5.png',
        quantity: 20,
        options:{
            More:[{
                type:['red','white']
            }]
        }
    },
    {
        name:'Panzer 3',
        price: 5000000,
        type:'war instrument',
        logo: 'assets/item4.jpg',
        quantity:2,
        options:{
            More:[{
                type:['matte black','gray'],
                additions:['extra armor', 'extra shells']
            }]
        }
    },
    {
        name:'Angel Wing Begonia',
        price: 5,
        type:'House deco',
        logo: 'assets/item2.jpeg',
        quantity:50,
        More:[{
            type:['with flower', 'without flower']
        }]
    },
    {
        name:'Macbook Pro',
        price:3500,
        type:'Electronics',
        logo: 'assets/item6.jpg',
        quantity:20,
        options:{
            More:[{
                RAM:['6GB','8GB','16GB'],
                color:['Matte black','matte white','silver gray']
            }]
        }
    }
]