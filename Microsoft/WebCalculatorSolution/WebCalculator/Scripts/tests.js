/// <reference path="_references.js" />

// the first param is the name of the module
// second param defines an object that has a setup property
// the setup property is assigned a function expression that calls the initialize function before each test
module('Calculator Test Suite', { /*setup: function () { initialize(); }*/ setup: function () { calculatorNamespace.initialize(); } });

test("Initialize Test", function () {
    expect(2);
    //txtInput.value = '0';
    //txtResult.value = '0';
    var expected = '0';
    equal($('#txtInput').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $('#txtInput').val());
    equal($('#txtResult').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $('#txtResult').val());
});

test("Button Click Test", function () {
    //sets button Quantity to 10
    var buttonQuantity = 10;

    // buttonQuantity calls the expect function to set the quantity of assertions
    expect(buttonQuantity * 2);

    // for loop executes 10 times to obtain a referenct to the appropriate button
    for (var i = 0; i < buttonQuantity; i++) {

        //// trigger the click event
        //var btn = document.getElementById('btn' + i);
        //QUnit.triggerEvent(btn, "click");
        $('#btnNumber' + i).triggerHandler('click');

        //// retrieve the result
        //var result = txtInput.value[txtInput.value.length - 1];
        var result = $('#txtInput').val()[$('#txtInput').val().length - 1];
        var expected = String(i);

        // perform an assertion that checks the last character of txtInput
        equal(result, expected, 'Expected value: ' + expected + ' Actual value: ' + result);

        // perform an assertion that checks the length of txtInput
        var expectedLength = i < 2 ? 1 : i;
        equal($('#txtInput').val().length, expectedLength, 'Expected string length: ' + expectedLength + ' Actual value: ' + $('#txtInput').val().length);
    }
});

test("Add Test", function () {
    expect(2);
    $('#txtInput').val('10');
    $('#txtResult').val('20');
    $('#btnPlus').triggerHandler('click');
    var expected = '30';
    equal($('#txtResult').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $('#txtResult').val());
    expected = '0';
    equal($('#txtInput').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $('#txtInput').val());
});

test("Subtract Test", function () {
    expect(2);
    $('#txtInput').val('10');
    $('#txtResult').val('20');
    $('#btnMinus').triggerHandler('click');
    var expected = '10';
    equal($('#txtResult').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $('#txtResult').val());
    expected = '0';
    equal($('#txtInput').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $('#txtInput').val());
});

test("Clear Entry Test", function () {
    expect(1);
    $('#txtInput').val('10');
    $('#btnClearEntry').triggerHandler('click');
    var expected = '0';
    equal($('#txtInput').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $('#txtInput').val());
});

test("Clear Test", function () {
    expect(2);
    $('#txtInput').val('10');
    $('#txtResult').val('20');
    $('#btnClear').triggerHandler('click');
    var expected = '0';
    equal($('#txtInput').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $('#txtInput').val());
    equal($('#txtResult').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $('#txtResult').val());
});

test("Multiply Test", function () {
    expect(2);
    $('#txtInput').val('10');
    $('#txtResult').val('20');
    $('#btnMultiply').triggerHandler('click');
    var expected = '200';
    equal($('#txtResult').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $('#txtResult').val());
    expected = '0';
    equal($('#txtInput').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $('#txtInput').val());
});

test("Divide Test", function () {
    expect(2);
    $('#txtInput').val('10');
    $('#txtResult').val('20');
    $('#btnDivide').triggerHandler('click');
    var expected = '2';
    equal($('#txtResult').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $('#txtResult').val());
    expected = '0';
    equal($('#txtInput').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $('#txtInput').val());
});