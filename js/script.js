$(document).ready(function () {

    $('.button-collapse').sideNav({
        menuWidth: 300,
        edge: 'left',
        closeOnClick: true,
        draggable: true,
    });

    $('.parallax').parallax();

    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });

    $('.modal').modal();

    // Plays sounds when user clicks on my picture (portrait)

    var i = 0;
    var soundAie = new Audio('sound/aie.ogg');
    var soundOuie = new Audio('sound/ouie.ogg');
    var soundFini = new Audio('sound/fini.ogg');

    $("#photo").on("click", function () {
        ++i;
        switch (i) {
            case 1:
                console.log("aie1");
                soundAie.play();
                $('#photo').attr({
                    src: 'img/photoAie.jpg'
                });
                break;
            case 2:
                console.log("aie2");
                soundOuie.play();
                $('#photo').attr({
                    src: 'img/photoOuie.jpg'
                });
                break;
            case 3:
                console.log("aie3");
                $('#photo').attr({
                    src: 'img/photoFini.jpg'
                });
                soundFini.play();
                break;
            case 4:
                console.log("reset");
                $('#photo').attr({
                    src: 'img/photo.jpg'
                });
                i = 0;
                break;
            default:
                console.log("default");
                $('#photo').attr({
                    src: 'img/photoAie'
                });
                soundAie.play();
                break;
        }

    });

    // Submit message

    $("#submitModal").on("click", function () {
        if ($("#name").val() == '' || $("#email").val() == '' || $("#message").val() == '') {
            var $notif = $("<span>Votre message n'a pas pu être envoyé. Veillez à bien remplir tous les champs.</span>");
            Materialize.toast($notif, 5000);
        } else {
            console.log("success");
            var $notif = $("<span>Votre message va être envoyé, je vous recontacterai dans les plus brefs délais.</span>");
            Materialize.toast($notif, 5000);
        }
    });

    //Download action
    $('#download').attr({
        target: '_blank',
        href: 'doc/Mehdi_LEFEUVRE.pdf'
    });
});