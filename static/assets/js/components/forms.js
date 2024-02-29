// handle form submission
$( document ).ready(function() {
    //prevent form submission on enter
    $('form input').keydown(function (e) {
        if (e.keyCode == 13) {
            var inputs = $(this).parents("form").eq(0).find(":input");
            if (inputs[inputs.index(this) + 1] != null) {                    
                inputs[inputs.index(this) + 1].focus();
            }
            e.preventDefault();
            return false;
        }
    });
    //prevent form submission actions
    $(".colony_form").submit(function(e) {
        e.preventDefault();
        var $form = $(this);
        $.post($form.attr("action"), $form.serialize()).then(function() {
            // on success
            $('.colony_form_success').fadeIn();
            $('.colony_form')[0].reset();
        });
    });
});