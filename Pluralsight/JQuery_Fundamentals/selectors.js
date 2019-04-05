$(document).ready(function () {

    // var divs = $('div'); 
    // alert(divs.length);

    //$('div').css('background-color', 'Green'); // apply styles to tag

    // $('div').each(function () { // alert shows html inside the selected tag for each div
    //     alert($(this).html());
    // })

    // selecting Nodes by
    $('#lor').css('font-family', 'Monospace'); // select by id
    $('.lor').css('color', 'Green'); // select by class
    $('a[title]').css('background-color', 'black'); // select all title attributes
    $('a[title=whitetext]').css('color', 'white'); // select all attributes & value
    $(':input').css('border', '2px solid red'); // select by input nodes // ':' selects all inputs (input,select,textarea,button,image,radio and more)
    $(':input[type="password"]').css('border','2px solid green'); // select all input nodes with type=password not most efficient selector because of ':'
    var inputs = $(':input');
    // alert(inputs[1].val()); //throws type error because in order to get to your functions you need 
    //alert($(inputs[1]).val()); //wrap it in a jQuery object and use jquery functions
    $('td:contains("hello")').css('background-color', 'lightblue'); // :contains() searches for specific text in the tag
    $('tr:odd').css('background-color', 'yellow'); // tr:odd or tr:even selects rows in tables
    $('td:first-child:even').css('border-left', '4px solid').css('border-left-color','blue'); // selects first child element -chained selectors - chained styles
    $('input[name^="j"').css('border-right', '14px solid salmon'); // select attribute that starts with^ "j" ($ endswith,* contains)
    // codylindley.com/jqueryselectors/ cool site

});