$(document).ready(function () {

    $('.button-collapse').sideNav({
        menuWidth: 300,
        edge: 'left',
        closeOnClick: true,
        draggable: true,
    });

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        //The following are not needed
        pressed:true,
        dragged:true,
        numVisible : 1
        });

    // Instantiate a new Swiper carrousel object

    var mySwiper = new Swiper('.swiper-container', {
        speed: 400,
        spaceBetween: 100,
        autoHeight: true,
        loop:true,
        effect:'slide',
        freeModeMomentum:true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable :true,
          },
          navigation: {
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          },
          breakpoints: {
            // when window width is <= 990px
            990: {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'progressbar',
                    clickable :true,
                  },               
            }
        },
    });
    
    mySwiper.on('slideChange', function () {
        // console.log('slide changed');
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
                console.log("aïe!");
                soundAie.play();
                $('#photo').attr({
                    src: 'img/photoAie.jpg'
                });
                break;
            case 2:
                console.log("ouïe!");
                soundOuie.play();
                $('#photo').attr({
                    src: 'img/photoOuie.jpg'
                });
                break;
            case 3:
                console.log("non mais c'est fini oui!");
                $('#photo').attr({
                    src: 'img/photoFini.jpg'
                });
                soundFini.play();
                break;
            case 4:
                // console.log("reset");
                $('#photo').attr({
                    src: 'img/photo.jpg'
                });
                i = 0;
                break;
            default:
                // console.log("default");
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
            // console.log("success");
            var $notif = $("<span>Votre message va être envoyé, je vous recontacterai dans les plus brefs délais.</span>");
            Materialize.toast($notif, 5000);
        }
    });

    //Redirect each project to corresponding URL in a new tab (just like target="_blank" does)
    // $("#prj1").click(function () {
    //     window.open("https://app.adoptematomate.com/gardens");
    // });

    // $("#prj2").click(function () {
    //     window.open("http://www.naturemp.org/phototheque/piwigo");
    // });

    // $("#prj3").click(function () {
    //     window.open("https://k0d3.alwaysdata.net/smart_city/");
    // });

    // $("#prj4").click(function () {
    //     window.open("https://github.com/Sh3nr0n/GaleryReactExpress");
    // });

    // $("#prj5").click(function () {
    //     window.open("https://github.com/Sh3nr0n/virtual_garden_planing");
    // });

    //Download actions
    $('#downloadCv').attr({
        target: '_blank',
        href: 'doc/CV_Mehdi_LEFEUVRE.pdf'
    });

    $('#downloadLettre').attr({
        target: '_blank',
        href: 'doc/Lettre_Mehdi_LEFEUVRE.pdf'
    });
});