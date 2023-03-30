$(".question").on("click", function(){
    $(this).children("h2").toggleClass("question-bold");
    $(this).next(".answer").slideToggle();
    $(this).children("button").toggleClass("upsideDown");
    $(this).toggleClass("no-border");

})
