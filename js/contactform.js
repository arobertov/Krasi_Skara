jQuery(document).ready(function($) {
    "use strict";
    var ferror = false;
     $('#name').change(function () {
         ferror = validateFormField(this,3,40) ;
     });
    $('#email').change(function () {
         ferror = validateFormEmail(this);
    });
    $('#subject').change(function () {
        ferror = validateFormField(this,3,40);
    });
    $('textarea[name="message"]').change(function () {
        ferror = validateFormField(this,2);
    });

    function validateFormEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!re.test($(email).val())){
            $(email).css('border','3px solid red');
            $('#email-error').fadeIn();
            $('#send').prop('disabled',true);
            return true;
        }
        $(email).css('border','1px solid #ced4da');
        $('#email-error').fadeOut();
        $('#send').prop('disabled',false);
        return false;
    }

    function validateFormField(field,minLength,maxLength){
        var errorId = '#'+$(field).attr('name')+'-error';

        if($(field).val().length < minLength || $(field).val().length >= maxLength) {
            $(field).css('border','3px solid red');
            $(errorId).fadeIn();
            $('#send').prop('disabled',true);
            return true;
        }
        $(field).css('border','1px solid #ced4da');
        $(errorId).fadeOut();
        $('#send').prop('disabled',false);
        return false;

    }

    //Contact
    $('form.contactForm').submit(function() {
        if(ferror){
            return false;
        }
        var str = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "sendMail.php",
            data: str,
            success: function(msg) {
                var err =  msg.match(/(Error:) (.+)/);
                console.log(err);

                if(err !== null){
                    $("#sendmessage").removeClass("show");
                    $("#errormessage").addClass("show");
                    $('#errormessage').html(err[2]);
                    return false;
                }
                if(msg.match(/OK/)){
                    $("#sendmessage").fadeIn(1000,'linear');
                    window.setTimeout(function () {
                        $('#sendmessage').fadeOut(3000,'linear')
                    },6000);
                    $("#errormessage").removeClass("show");
                    $('.contactForm').find("input, textarea").val('');
                }
                


            },
            error: function (msg) {
                $("#sendmessage").removeClass("show");
                $("#errormessage").addClass("show");
                $('#errormessage').html(msg);
            }
        });
        return false;
    } )
});