var Cardarray=[];
i=0;
ProductDatabase.forEach(element => {
    var temporary = new Products(element.name,element.price,element.type,
        element.logo, element.options)
    Cardarray[i] = temporary;
    i=i+1;
});
/*
var newCloth = Cardarray[0];
var newCar = Cardarray[1];
var newWine = Cardarray[2];
var newTank = Cardarray[3];
var newPlant = Cardarray[4];
var newComp = Cardarray[5];
*/