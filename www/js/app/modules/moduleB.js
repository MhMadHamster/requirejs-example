define(['jquery', 'modules/moduleC'], function($, moduleC) {
    return {
        getText: function() {
            moduleC.appendToBody('<p>This is method "getText" from "moduleB.js".</p>');
        }
    }
});