jQuery(document).ready(function($){

    $(document).on("click", function(e) {
        if ($(e.target).is('#sell-price')){
            $('#correct-overlay').fadeIn('fast');
        } else if ($(e.target).is('.wrong-price')){
            $('#wrong-overlay').fadeIn('fast').delay(1200).fadeOut("slow");
        } else {
            return;
        }
    });

    $(".button-row").hover(
            function(){ $(this).toggleClass("animate"); }
        ) 
});