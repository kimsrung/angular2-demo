System.register(["angular2/platform/browser", "./service_app.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, service_app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (service_app_component_1_1) {
                service_app_component_1 = service_app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(service_app_component_1.MyService);
        }
    }
});
//# sourceMappingURL=service_main.js.map