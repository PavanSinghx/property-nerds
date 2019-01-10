$(document).ready(function () {

    $(".header-item-left").hover(function () {

        $(this).addClass("header-item-active");

    }, function () {

        $(this).removeClass("header-item-active");

    });

    $(".header-item-right").hover(function () {

        $(this).addClass("header-item-active");

    }, function () {

        $(this).removeClass("header-item-active");

    });

});