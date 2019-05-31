/// <reference path="jquery-3.3.1.js" />

$(document).ready(function () {
    $('#submit').on('click', callServer);
});

function callServer() {
    var data = $('form[name="ContactForm"]').serialize();
    $.post('/ContactService', data, function (returnObject) {
        debugger;
        console.log('hi');
        $('#result').html(returnObject.result);
    }, 'json');
}