$(document).ready(function() {
	/*$('.uno').hide(); // escondo columns uno
	setTimeout(function() {
        $(".cero").fadeOut(1500);
    },3000);*/

    setTimeout(function() {
        $(".uno").fadeIn(1500);
    },3000);

//efecto mouse
$('.pictures').mouseover(function () {
    $('.comida-overlay').show();
}).mouseout(function () {
    $('.comida-overlay').hide();
});

//selecion de comida
var tipoEat = $('#select').val();
var valor = $('#select option:selected').text()

//seleccion modal
$("#select").change(function() {
 $("select").click(function(){
	$(".modal1").show();
});




//seleccion ejemplo modal
/* 
$("select").click(function(){
	$(".modal").show();
})
*/

//cerrar modal
$('.fa fa-times').clik(function){
	$('#ex1').hide();
}



});

  
