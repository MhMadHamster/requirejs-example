define(['modules/moduleC'], function(ModuleC) {
    return {
        getText: function() {
            ModuleC.appendToBody('<p>This is method "getText" from "moduleA.js".</p>');
        }
    }
});