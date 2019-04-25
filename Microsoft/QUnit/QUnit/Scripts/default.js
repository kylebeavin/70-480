
var greeting = "Hello World";

function areaOfPizzaSlice(diameter, slicesPerPizza) {
    return areaOfPizza(diameter) / slicesPerPizza;
    function areaOfPizza(diameter) {
        var radius = diameter / 2;
        return 3.141592 * radius * radius;
    }
}
// Object Literals
var car1 = {
    year: 2000,
    make: 'Ford',
    model: 'Fusion',
    repairs: ['repair1', 'repair2', 'repair3'], //array property
    getInfo: function () {
        return 'Vehicle: ' + this.year + ' ' + this.make + ' ' + this.model;
    }
};

var car2 = {
    year: 2010,
    make: 'BMW',
    model: 'Z4',
    getInfo: function () {
        return 'Vehicle: ' + this.year + ' ' + this.make + ' ' + this.model;
    }
};

// Creating dynamic objects by using the factory pattern
function getVehicle(theYear, theMake, theModel) {
    var vehicle = new Object();
    vehicle.year = theYear,
    vehicle.make = theMake,
    vehicle.model = theModel,
    vehicle.getInfo = function () {
        return 'Vehicle: ' + this.year + ' ' + this.make + ' ' + this.model;
        };
    return vehicle; // this is of type Object not type vehicle
}