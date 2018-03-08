$(document).ready(function () {
    $('.button-collapse').sideNav({
        menuWidth: 300,
        edge: 'left',
        closeOnClick: true,
        draggable: true,
    });
    $('.parallax').parallax();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.modal').modal();
    var i = 0;
    var sound;
    $("#photo").on("click", function(){
        ++i;
        switch(i){
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
            i=0;
            break;
            default:
            console.log("default");
            //sound = "sound/fichierAïe.mp3";
            break;
        }

    });
});