/// <reference path="_references.js" />

(function () {

    this.calculatorNamespace = this.calculatorNamespace || {};
    var ns = this.calculatorNamespace;

    ns.initialize = function () {

        var calculator = new ns.Calculator();

        //// execute 10 times
        //for (var i = 0; i < 10; i++) {
        //    // subscribe to 'click' event and call numberClick
        //    document.getElementById('btn'+i).addEventListener('click', numberClick, false);
        //}

        // one line of jQuery does that ^^^
        $('button[id^="btnNumber"]').on('click', calculator.numberClick);

        //// locate the Input text boxes
        //txtInput = document.getElementById('txtInput');
        //txtResult = document.getElementById('txtResult');

        ////subscribe to 'click' event and call functions
        //document.getElementById('btnPlus').addEventListener('click', plusClick, false);
        //document.getElementById('btnMinus').addEventListener('click', minusClick, false);
        //document.getElementById('btnClearEntry').addEventListener('click', clearEntry, false);
        //document.getElementById('btnClear').addEventListener('click', clear, false);
        //document.getElementById('btnMultiply').addEventListener('click', multiplyClick, false);
        //document.getElementById('btnDivide').addEventListener('click', divideClick, false);
        
        $('#btnPlus').on('click', calculator.plusClick);
        $('#btnMinus').on('click', calculator.minusClick);
        $('#btnClearEntry').on('click', calculator.clearEntry);
        $('#btnClear').on('click', calculator.clear);
        $('#btnMultiply').on('click', calculator.multiplyClick);
        $('#btnDivide').on('click', calculator.divideClick);
        calculator.clear();
    }

    ns.Calculator = (function () {

        function Calculator() {

        };

        Calculator.prototype.numberClick = function () {
            // read innerText property of a button that was clicked and append it to txtInput if 0 replace with new value
            //txtInput.value = txtInput.value == '0' ?
            //    this.innerText : txtInput.value + this.innerText;
            $('#txtInput').val($('#txtInput').val() == '0' ? $(this).text() : $('#txtInput').val() + $(this).text());
        }

        Calculator.prototype.plusClick = function () {
            //txtResult.value = Number(txtResult.value) + Number(txtInput.value);
            $('#txtResult').val(Number($('#txtResult').val()) + Number($('#txtInput').val()));
            Calculator.prototype.clearEntry();
        }

        Calculator.prototype.minusClick = function () {
            //txtResult.value = Number(txtResult.value) - Number(txtInput.value);
            $('#txtResult').val(Number($('#txtResult').val()) - Number($('#txtInput').val()));

            Calculator.prototype.clearEntry();
        }

        Calculator.prototype.clearEntry = function () {
            //txtInput.value = '0';
            $('#txtInput').val('0');
        }

        Calculator.prototype.clear = function () {
            //txtInput.value = '0';
            //txtResult.value = '0';
            $('#txtInput').val('0');
            $('#txtResult').val('0');
        }

        Calculator.prototype.multiplyClick = function () {
            txtResult.value = Number(txtResult.value) * Number(txtInput.value);
            Calculator.prototype.clearEntry();
        }

        Calculator.prototype.divideClick = function () {
            txtResult.value = Number(txtResult.value) / Number(txtInput.value);
            Calculator.prototype.clearEntry();
        }

        return Calculator;
    }());

}());