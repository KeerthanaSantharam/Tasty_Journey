jQuery(document).ready(function($){
    "use strict";
    //contact
    $('form.contactForm').submit(function(){
        var c=$(this).find('.form-group'),
            ferror=false;
        emailExp=/^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
        c.children('input').each(function(){//run all i/ps
            var j=$(this);//current i/p
            var rule=j.attr('data-rule');
            if(rule !== undefined){
                var ierror=false;//error flag for current i/p
                var pos=rule.indexOf(':',0);
            }
            
        })
    })
})