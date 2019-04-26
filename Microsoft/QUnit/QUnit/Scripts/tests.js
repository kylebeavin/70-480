
test("A Hello World Test", 1, function () {
    equal(greeting, "Hello World", "Expect greeting of Hello World");
});

test("Area of Pizza Slice", 1, function () {
    equal(areaOfPizzaSlice(18, 8), 31.808619, "Expected 31.808619");
});

//// checks to make sure each object contains the data thats expected
//test("Object Literal Test", function () {
//    expect(2);
//    var expected = 'Vehicle: 2000 Ford Fusion';
//    var actual = car1.getInfo();
//    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
//    var expected = 'Vehicle: 2010 BMW Z4';
//    var actual = car2.getInfo();
//    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
//});

//// demonstrates the creation of multiple instances
//test("Create Instances Test Using Factory Pattern", function () {
//    expect(2);
//    var car1 = getVehicle(2000, 'Ford', 'Fusion');
//    var car2 = getVehicle(2010, 'BMW', 'Z4');
//    var expected = 'Vehicle: 2000 Ford Fusion';
//    var actual = car1.getInfo();
//    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
//    var expected = 'Vehicle: 2010 BMW Z4';
//    var actual = car2.getInfo();
//    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
//});

//// initializes Vehicle and calls getInfo()
//test("Function Test", function () {                                                       
//    expect(2);                                                                            
//    Vehicle(2000, 'Ford', 'Fusion');                                                      
//    var expected = 'Vehicle: 2000 Ford Fusion';                                          // The Vehicle function accepts three parameters and doesnt return anything.
//    var actual = getInfo();                                                              // Instead, it is setting global variables, and there is no provision for multiple instances.  
//    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual); // To prove that global variables are being set, the second assertion is checking to see 
//    expected = 2000;                                                                     // whether there is a global variable named year that equals 2000. This assertion succeeds
//    actual = year;                                                                       // which proves that the data is not encapsulated, and there is only one copy of the data.
//    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual); 
//});

//// for example, the following qunit test fails
//test("failing function test", function () {
//    expect(2);
//    vehicle(2000, 'ford', 'fusion');
//    vehicle(2010, 'bmw', 'z4');
//    var expected = 'vehicle: 2000 ford fusion';
//    var actual = getinfo();
//    equal(actual, expected, 'expected value: ' + expected + ' actual value: ' + actual); 
//    expected = 2000;
//    actual = year;
//    equal(actual, expected, 'expected value: ' + expected + ' actual value: ' + actual); 
//});

//test("encapsulation test", function () {
//    expect(2);
//    var car1 = new Vehicle(2000, 'ford', 'fusion');
//    var car2 = new Vehicle(2010, 'bmw', 'z4');
//    var expected = 'vehicle: 2000 ford fusion';
//    var actual = car1.getinfo(); // a method that is public but has access to private data is called a privileged method
//    equal(actual, expected, 'expected value: ' + expected + ' actual value: ' + actual);
//    expected = 2000;
//    actual = year; // there is no global variable year
//    equal(actual, expected, 'expected value: ' + expected + ' actual value: ' + actual);
//});

//// the getInfo variable references a function the code can be replaced for each object
//test("Function Replacement Test", function () {
//    expect(2);
//    var car1 = new Vehicle(2000, 'Ford', 'Fusion');
//    var car2 = new Vehicle(2010, 'BMW', 'Z4');
//    car1.getInfo = function () {
//        return 'This is a Car';
//    };
//    var expected = 'This is a Car';
//    var actual = car1.getInfo();
//    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
//    var expected = 'This is a Car';
//    var actual = car2.getInfo();
//    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
//});

////to replace the function across all objects use the prototype pattern
//test("Instance Test Using Prototype", function () {
//    expect(2);
//    var car1 = new Vehicle(2000, 'Ford', 'Fusion');
//    var car2 = new Vehicle(2010, 'BMW', 'Z4');
//    var expected = 'Vehicle: 2000 Ford Fusion';
//    var actual = car1.getInfo();
//    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
//    var expected = 'Vehicle: 2010 BMW Z4';
//    var actual = car2.getInfo();
//    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
//});

//// test to see whether it can be changed across all instances
//test("Instance Test Using Prototype Replace Function", function () {
//    expect(2);
//    var car1 = new Vehicle(2000, 'Ford', 'Fusion');
//    var car2 = new Vehicle(2010, 'BMW', 'Z4');
//    Vehicle.prototype.getInfo = function () {
//        return 'Car: ' + this.year + ' ' + this.make + ' ' + this.model;
//    };
//    var expected = 'Car: 2000 Ford Fusion';
//    var actual = car1.getInfo();
//    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual); // remember that the prototype is defined externally to the constructor
//    var expected = 'Car: 2010 BMW Z4';                                        // function, so all properties must be public when using the this keyword
//    var actual = car2.getInfo();
//    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
//});

//// compromise using private data that is readable
//test("Instance Test Using Prototype and getters", function () {
//    expect(2);
//    var car1 = new Vehicle(2000, 'Ford', 'Fusion');
//    var car2 = new Vehicle(2010, 'BMW', 'Z4');
//    var expected = 'Vehicle: 2000 Ford Fusion';
//    var actual = car1.getInfo();
//    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual); 
//    var expected = 'Vehicle: 2010 BMW Z4';                                        
//    var actual = car2.getInfo();
//    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
//});