System.register(['angular2/platform/browser', './form_app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, form_app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (form_app_component_1_1) {
                form_app_component_1 = form_app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(form_app_component_1.FormComponent);
        }
    }
});
//# sourceMappingURL=form_main.js.map