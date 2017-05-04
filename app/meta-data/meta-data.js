System.register(["angular2/platform/browser", "./meta-data.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, meta_data_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (meta_data_component_1_1) {
                meta_data_component_1 = meta_data_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(meta_data_component_1.MetaDataClass);
        }
    }
});
//# sourceMappingURL=meta-data.js.map