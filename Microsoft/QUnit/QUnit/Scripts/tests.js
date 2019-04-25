
test("A Hello World Test", 1, function () {
    equal(greeting, "Hello World", "Expect greeting of Hello World");
});

test("Area of Pizza Slice", 1, function () {
    equal(areaOfPizzaSlice(18, 8), 31.808619, "Expected 31.808619");
});

// checks to make sure each object contains the data thats expected
test("Object Literal Test", function () {
    expect(2);
    var expected = 'Vehicle: 2000 Ford Fusion';
    var actual = car1.getInfo();
    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
    var expected = 'Vehicle: 2010 BMW Z4';
    var actual = car2.getInfo();
    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
});

// demonstrates the creation of multiple instances
test("Create Instances Test Using Factory Pattern", function () {
    expect(2);
    var car1 = getVehicle(2000, 'Ford', 'Fusion');
    var car2 = getVehicle(2010, 'BMW', 'Z4');
    var expected = 'Vehicle: 2000 Ford Fusion';
    var actual = car1.getInfo();
    equal(actual, expected, 'Expected value: ' + ' Actual value: ' + actual);
    var expected = 'Vehicle: 2010 BMW Z4';
    var actual = car2.getInfo();
    equal(actual, expected, 'Expected value: ' + ' Actual value: ' + actual);
});