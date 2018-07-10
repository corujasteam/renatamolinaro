$(document).ready(function(){
    // $.mask.definitions['~'] = "[+-]";
    // $("#celular").mask("(99) 99999-9999");
    
    // setCursor()
    // function setCursor() {
    //     $('#celular').setCursorPosition(1);
    // }

    $('#carousel').carousel(
        {
            fullWidth: true,
        }
    );

    setInterval(function() {
 
        $('#carousel').carousel('next');
    
    }, 1000);

    $('#carousel2').carousel(
        {
            fullWidth: true,
        }
    );

    setInterval(function() {
 
        $('#carousel2').carousel('next');
    
    }, 4000);

    $('.modal').modal();

    var data = new Date();
    document.getElementById("data").innerHTML = data.toLocaleDateString();
});