function determineMobileCSS() {
    let x = window.outerWidth > window.innerWidth ? window.innerWidth : window.outerWidth;
    let y = window.outerHeight > window.innnerHeight ? window.innerHeight : window.outerHeight;
    console.log(x + "  " + y);

    if (x <= 1000 && x > y) {
        return "small-landscape.css";
    } else if (x <= 1000 && y > x) {
        return "small.css";
    } else if (x > 1000) {
        return "main.css";
    } else {
        return "small.css";
    }
}

function reloadCSS() {
    document.getElementById("loadCSS").href = "css/" + determineMobileCSS();
}

$(document).ready(function () {

    reloadCSS();

    window.addEventListener("orientationchange", function () {
        this.setTimeout(() => {
            reloadCSS();
        }, 10);
    });

    let state = 1;
    startBanner();

    //feat block left
    $(".feat-img-1").hover(function () {
        $(this).removeClass("feat-img-1");
        $(this).addClass("overlay-1");
        //$(".call").fadeIn(5000);
    }, function () {
        $(this).removeClass("overlay-1");
        $(this).addClass("feat-img-1");
    });

    $(".feat-img-2").hover(function () {
        $(this).removeClass("feat-img-2");
        $(this).addClass("overlay-1");
        //$(".call").fadeIn(5000);
    }, function () {
        $(this).removeClass("overlay-1");
        $(this).addClass("feat-img-2");
    });

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