$(".folk-btn").click(function(){
    $(".folk-vinyls").addClass("reveal");
    $(".folk-vinyls").removeAttr("style");
    $(".green-controls").addClass("reveal");
    $(".green-controls").removeAttr("style");
    $('.bday-vinyls').hide();
    $('.red-controls').hide();
    $('.sunshine-vinyls').hide();
    $('.blue-controls').hide();

});
$(".bday-btn").click(function(){
    $(".bday-vinyls").addClass("reveal");
    $(".bday-vinyls").removeAttr("style");
    $(".red-controls").addClass("reveal");
    $(".red-controls").removeAttr("style");
    $('.folk-vinyls').hide();
    $('.green-controls').hide();
    $('.sunshine-vinyls').hide();
    $('.blue-controls').hide();

});
$(".sunshine-btn").click(function(){
    $(".sunshine-vinyls").addClass("reveal");
    $(".sunshine-vinyls").removeAttr("style");
    $(".blue-controls").addClass("reveal");
    $(".blue-controls").removeAttr("style");
    $('.folk-vinyls').hide();
    $('.green-controls').hide();
    $('.bday-vinyls').hide();
    $('.red-controls').hide();

});


$(".draggable").draggable({snap: ".snap"});