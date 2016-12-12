$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        $('nav').addClass('fixed_nav');
        $('#content').addClass('fixed_content');
        $("#button p").hide();
        $('#button').addClass('fixed_button');
    } else {
        $('nav').removeClass('fixed_nav');
        $('#content').removeClass('fixed_content');
        $("#button p").show();
        $('#button').removeClass('fixed_button');
    }
});