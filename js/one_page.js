$("#content").css({backgroundColor: 'rgba(66, 93, 116, 0.69)'});
$("article:nth-child(2)").hide(0);
$("article:nth-child(3)").hide(0);
$(document).ready(function(){    
    //////////////////////////////////
    //////////STYLE PAR DEFAUT////////
    //////////////////////////////////
    $("nav ul li:nth-child(1) a").click(function () {
        $("article:nth-child(1)").fadeIn(250);
        $("article:nth-child(2)").fadeOut(100);
        $("article:nth-child(3)").fadeOut(100);  
        $("#content").css({backgroundColor: "rgba(66, 93, 116, 0.69)"});
    });
    
    $("nav ul li:nth-child(2) a").click(function () {
        $("article:nth-child(1)").fadeOut(100);
        $("article:nth-child(2)").fadeIn(250);
        $("article:nth-child(3)").fadeOut(100);
        $("#content").css({backgroundColor: "rgba(144, 135, 70, 0.65)"});
    });
    
    $("nav ul li:nth-child(3) a").click(function () {
        $("article:nth-child(1)").fadeOut(100);
        $("article:nth-child(2)").fadeOut(100);
        $("article:nth-child(3)").fadeIn(250);    
        $("#content").css({backgroundColor: "rgba(72, 114, 77, 0.72)"});
    });
    
});