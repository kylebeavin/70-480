// initialize variable that can be called each time a test is run
var txtInput;
var txtResult;

function initialize() {
    // execute 10 times
    for (var i = 0; i < 10; i++) {
        // subscribe to 'click' event and call numberClick
        document.getElementById('btn'+i).addEventListener('click', numberClick, false);
    }

    // locate the Input text boxes
    txtInput = document.getElementById('txtInput');
    txtResult = document.getElementById('txtResult');

    //subscribe to 'click' event and call functions
    document.getElementById('btnPlus').addEventListener('click', plusClick, false);
    document.getElementById('btnMinus').addEventListener('click', minusClick, false);
    document.getElementById('btnClearEntry').addEventListener('click', clearEntry, false);
    document.getElementById('btnClear').addEventListener('click', clear, false);
    document.getElementById('btnMultiply').addEventListener('click', multiplyClick, false);
    document.getElementById('btnDivide').addEventListener('click', divideClick, false);
    clear();
}

function numberClick() {
    // read innerText property of a button that was clicked and append it to txtInput if 0 replace with new value
    txtInput.value = txtInput.value == '0' ?
        this.innerText : txtInput.value + this.innerText;
}

function plusClick() {
    txtResult.value = Number(txtResult.value) + Number(txtInput.value);
    clearEntry();
}

function minusClick() {
    txtResult.value = Number(txtResult.value) - Number(txtInput.value);
    clearEntry();
}

function clearEntry() {
    txtInput.value = '0';
}

function clear() {
    txtInput.value = '0';
    txtResult.value = '0';
}

function multiplyClick() {
    txtResult.value = Number(txtResult.value) * Number(txtInput.value);
    clearEntry();
}

function divideClick() {
    txtResult.value = Number(txtResult.value) / Number(txtInput.value);
    clearEntry();
}