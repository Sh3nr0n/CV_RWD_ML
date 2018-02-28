$(document).ready(function () {

    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
        /*onOpen: function(el) { /* Do Stuff* / }, // A function to be called when sideNav is opened*/
        /*onClose: function(el) { /* Do Stuff* / }, // A function to be called when sideNav is closed*/
    });

    $('.parallax').parallax();
    $('.carousel').carousel();
    //Use "scroll fire" plugin above to display content when the user scrolls to a fixed part of the page

    // var options = [
    //     {selector: '.class', offset: 200, callback: customCallbackFunc },
    //     {selector: '.other-class', offset: 200, callback: function() {
    //       customCallbackFunc();
    //     } },
    //   ];
    //   Materialize.scrollFire(options);
});