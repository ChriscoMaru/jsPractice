$(document).ready(function(){ 

    $("divOne").mouseover(function(){
        // $("p").remove();
        $(this).find(".para").text("over");
    }) .mouseout(function(){
        
        // $("p").remove();
        $(this).find(".para").text("out");
    });
    });