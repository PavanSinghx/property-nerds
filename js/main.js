$(document).ready(function () {

    let state = 1;

    startBanner();

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

    function startBanner() {
        $(".call").fadeIn(5000);
    }

    function open() {
        $(".header-container").effect("slide", {
            "direction": "right",
            "mode": "show"
        }, 1000, state++);
    }

    function close(state) {

        $(".header-container").effect("slide", {
            "direction": "left",
            "mode": "hide"
        }, 1000, function () {
            document.getElementsByClassName("header-container")[0].style.backgroundImage = (state % 2 == 0) ? "url(assets/headerimage.jpg)" : "url(assets/headerimage2.jpg)";
        });
    }

    setInterval(() => {
        close(state);
        open();
    }, 5000)

});