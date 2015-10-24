define(['jquery'], function($) {
    return {
        appendToBody: function(value) {
            $('body').append(value);
        }
    }
});