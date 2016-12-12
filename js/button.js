$(document).ready(function () {
    $("#style").hide();
    $("#close").hide();
    $("#button").mouseenter(function () {
        $("#button, header, nav, #content").css({filter: "blur(10px)"});
        $("article").css({width: "100%"});
        $("#style").show(250);
        $("#close").show(250);
        $("#style").css({filter: "blur(0px)"});
        $("#close").click(function (){
            $(this).fadeOut(250, function(){
                $(this).hide();
            }); 
            $("#style").fadeOut(250, function(){
                $(this).hide();
            }); 
            $("#button, header,nav, #content").css({filter: "blur(0px)"});
        });
    });
});