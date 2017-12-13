$(document).ready(function() {
	$('.uno').hide(); /*escondo columns uno*/
	setTimeout(function() {
        $(".cero").fadeOut(1500);
    },3000);

    setTimeout(function() {
        $(".uno").fadeIn(1500);
    },3000);

//efecto mouse
$('.pictures').mouseover(function () {
    $('.comida-overlay').show();
}).mouseout(function () {
    $('.comida-overlay').hide();
});

/*seleccion de comida
var container = $('.box');
$('#select').on('change', function(){
    var eat = $('#select').val();
    if(eat === "value1") {
    box.html(<div class="column is-4 eat">
                        <figure class="image is-96x96">
                            <img src="assets/img/vegeta2.jpg" class="comida">
                            <div class="comida-overlay">
                                <p>Del huerto</p>
                            </div>
                        </figure>   
                    </div>);
    }
    if(eat === "value2") {
        container.html(<div class="column is-4">
                        <figure class="image is-96x96">
                            <img src="assets/img/buffet2.jpeg" class="comida">
                            <div class="comida-overlay">
                                <p> ¡Tenedor libre! </p>
                            </div>
                        </figure>
                    </div>);
    }

     if(eat === "value3") {
          container.html(<div class="column is-4">
                        <figure class="image is-96x96">
                            <img src="assets/img/parrilla2.jpg" class="comida">
                            <div class="comida-overlay">
                                <p>Buenos Amigos</p>
                            </div>
                        </figure>
                    </div>);
    }


})*/

//modal1
$('#v').on('change', function () {
    $('.modal1').show();
});

//modal2
$('#b').on('change', function () {
    $('.modal2').show();
});
//modal3
$('#p').on('change', function () {
    $('.modal3').show();
});

})

  
