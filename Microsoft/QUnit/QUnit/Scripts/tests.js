
test("A Hello World Test", 1, function () {
    equal(greeting, "Hello World", "Expect greeting of Hello World");
});

test("Area of Pizza Slice", 1, function () {
    equal(areaOfPizzaSlice(18, 8), 31.808619, "Expected 31.808619");
});