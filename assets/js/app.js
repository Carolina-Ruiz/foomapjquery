$(document).ready(function() {
	$('.uno').hide(); /*escondo columns uno*/
	setTimeout(function() {
        $(".cero").fadeOut(1500);
    },3000);

    setTimeout(function() {
        $(".uno").fadeIn(1500);
    },3000);

/*efecto mouse*/
$('#pictures').mouseover(function () {
    $('.comida-overlay').show();
}).mouseout(function () {
    $('.comida-overlay').hide();
});


/*seleccion de comida
var container = $('#container'); 
$('#select').on('change', function(){
    var eat = $('#select').val();
    if(eat === "1") {
    container.html('<div class="column is-4" id="v">
                        <figure class="image is-96x96">
                            <img src="assets/img/vegeta2" class="comida">
                            <div class="comida-overlay">
                                <p>Del huerto</p>
                            </div>
                        </figure>   
                    </div>' );
    }
    if(eat === "2") {
        container.html('<div class="column is-4" id="b">
                        <figure class="image is-96x96">
                            <img src="assets/img/buffet2.jpeg" class="comida">
                            <div class="comida-overlay">
                                <p> ¡Tenedor libre! </p>
                            </div>
                        </figure>
                    </div>');
    }

     if(eat === "3") {
          container.html('<div class="column is-4" id="p">
                        <figure class="image is-96x96">
                            <img src="assets/img/parrilla2.jpg" class="comida">
                            <div class="comida-overlay">
                                <p>Buenos Amigos</p>
                            </div>
                        </figure>
                    </div>');
    }


})*/

/*modal1*/
$('#v').click('change', function () {
    $('.modal1').show();
});

/*modal2*/
$('#b').click('change', function () {
    $('.modal2').show();
});
/*modal3*/
$('#p').click('change', function () {
    $('.modal3').show();
});

})

  
