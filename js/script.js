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
    var sound;
    $("#photo").on("click", function () {
        ++i;
        switch (i) {
            case 1:
                console.log("aie1");
                //sound = "sound/fichierAïe.mp3";
                break;
            case 2:
                console.log("aie2");
                sound = "sound/fichierOuïe.mp3";
                break;
            case 3:
                console.log("aie3");
                //sound = "sound/fichierCestFiniOui.mp3";
                i = 0;
                break;
            default:
                console.log("default");
                //sound = "sound/fichierAïe.mp3";
                break;
        }

    });

    //Display a message when data are successfully sent

    // $("#submitModal").on("click", function () {
    //     // console.log("clicksubmit");
    //     var $toastContent = $('<span>Votre message a bien été envoyé</span>');
    //     Materialize.toast($toastContent, 5000);
    // });

    // Submit message using ajax

    $("#submitModal").on("click", function () {
        // Get the form.
        var form = $('#contactForm');

            // Submit the form using AJAX.
            $.ajax({
                type: 'POST',
                url: "php/mailer.php",
                data: $(form).serialize(),// Serialize the form data
                success: function(){
                    var $toastContent = $("<span>Votre message a bien été envoyé</span>");//.text(response);
                    Materialize.toast($toastContent, 5000);
                },

                error: function () {
                    var $toastContent = $("<span>Une erreur est survenue lors de l\'envoi de votre message. Veillez à remplir tous les champs.</span>");//.text(response);
                    Materialize.toast($toastContent, 5000); 

                }

                
            });

    });

});