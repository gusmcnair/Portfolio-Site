$(() => {
    
    //Expand mobile menu upon clicking hamburger icon
    $(".hamburger").click(function () {
        if ($("nav").hasClass(".show-menu")) {
            $("nav").removeClass(".show-menu").fadeOut(250);
        }
        else {
            $("nav").addClass('.show-menu').fadeIn(250);
        }
    });

    //Auto-closes mobile menu after a link has been clicked.
    $("li").click(function () {
        if ($(window).width() < 800){
        $("nav").removeClass(".show-menu").fadeOut(250); 
        }
    });

    //Ensure menu appears when screen is resized
    //(Fixes an issue in which after the hamburger menu was opened 
    //and closed, then changed to desktop size, menu would disappear)
    $(window).resize(function () {
        if ($(window).width() >= 800) {
            $("nav").show();
        } else ($("nav").hide())
    });

    //Scrolls to portfolio on click of button
    $(".js-react").click(function (){
        $("html, body").animate({
            scrollTop: $("hr").offset().top
        }, 1000)
        })

    //Scrolls to portfolio on click of button
    $(".wordpress").click(function (){
        $("html, body").animate({
            scrollTop: $(".top-wordpress").offset().top
        }, 1500)
        })
});
