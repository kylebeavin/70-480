﻿
var greeting = "Hello World";

function areaOfPizzaSlice(diameter, slicesPerPizza) {
    return areaOfPizza(diameter) / slicesPerPizza;
    function areaOfPizza(diameter) {
        var radius = diameter / 2;
        return 3.141592 * radius * radius;
    }
}
//// Object Literals
//var car1 = {
//    year: 2000,
//    make: 'Ford',
//    model: 'Fusion',
//    repairs: ['repair1', 'repair2', 'repair3'], //array property
//    getInfo: function () {
//        return 'Vehicle: ' + this.year + ' ' + this.make + ' ' + this.model;
//    }
//};

//var car2 = {
//    year: 2010,
//    make: 'BMW',
//    model: 'Z4',
//    getInfo: function () {
//        return 'Vehicle: ' + this.year + ' ' + this.make + ' ' + this.model;
//    }
//};

//// Creating dynamic objects by using the factory pattern
//function getVehicle(theYear, theMake, theModel) {
//    var vehicle = new Object();
//    vehicle.year = theYear,
//    vehicle.make = theMake,
//    vehicle.model = theModel,
//    vehicle.getInfo = function () {
//        return 'Vehicle: ' + this.year + ' ' + this.make + ' ' + this.model;
//        };
//    return vehicle; // this is of type Object not type vehicle
//}

// Creating a class
//function Vehicle(theYear, theMake, theModel) { // the problem with this is there is no var keyword which defines all in global scope
//    year = theYear;
//    make = theMake;
//    model = theModel;
//    getInfo = function () {
//        return 'Vehicle: ' + year + ' ' + make + ' ' + model;
//    };
//}

//// Creating a class
//function Vehicle(theYear, theMake, theModel) { // constructor function
//    var year = theYear;
//    var make = theMake;
//    var model = theModel;
//    this.getInfo = function () {
//        return 'Vehicle: ' + year + ' ' + make + ' ' + model;
//    };
//}

//// using the prototype property to create a single getinfo method that is shared across all instances
//function Vehicle(theYear, theMake, theModel) {
//    this.year = theYear;
//    this.make = theMake;
//    this.model = theModel;
//}
//Vehicle.prototype.getInfo = function () {
//    return 'Vehicle: ' + this.year + ' ' + this.make + ' ' + this.model;
//}

//// using getters
//function Vehicle(theYear, theMake, theModel) {
//    var year = theYear;
//    var make = theMake;
//    var model = theModel;
//    this.getYear = function () { return year; };
//    this.getMake = function () { return make; };
//    this.getModel = function () { return model; };
//}
//Vehicle.prototype.getInfo = function () {
//    return 'Vehicle: ' + this.getYear() + ' ' + this.getMake() + ' ' + this.getModel();
//}

// implementing namespaces
//var myApp = myApp || {};                   // doing this <= does not pollute the global namespace //added || this code uses the or operator to create a new object if myApp does not have value                     

//myApp.vehicleCount = 5;                    //var vehicleCount = 5;                         

//myApp.vehicles = new Array();              //var vehicles = new Array();                           

//myApp.Car = function () { }                //function Car() { }
//myApp.Truck = function () { }              //function Truck() { }                                                                

//myApp.repair = {                           //var repair = {
//    description: 'changed spark plugs',    //    description: 'changed spark plugs',                         
//    cost: 100                              //    cost: 100
//};                                         //};

//IIFE or iffy immediately invoked function expression
(function () {
    this.myApp = this.myApp || {};
    var ns = this.myApp;            // ns = namespace

    var vehicleCount = 5;           // private
    var vehicles = new Array();     // private

    ns.Car = function () { }        // public
    ns.Truck = function () { }      // public

    var repair = {                  // private
        description: 'changed spark plugs',
        cost: 100
    }
}());