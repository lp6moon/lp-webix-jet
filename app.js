/*
 App configuration
 */

define([
    "libs/webix-jet-core/core",
    "libs/webix-jet-core/plugins/menu",
    "common/webix-ext",
    "libs/webix/codebase/i18n/zh"
], function (core, menu) {
    webix.i18n.setLocale("zh-CN");
    webix.attachEvent("onAjaxError", function (request) {


        console.log("onAjaxError", arguments)
    });
    webix.attachEvent("onLoadError", function (text, xml, ajax, owner) {
        //text - response text
        //xml - response xml object
        //ajax - xmlHttpRequest object
        //owner - component which triggered error

        console.log("onLoadError", arguments)
    });

    webix.attachEvent("onBeforeAjax",
        function (mode, url, data, request, headers, files, promise) {
            //headers["Content-type"]= "application/json";

            console.log("onBeforeAjax", arguments);
        }
    );

    //configuration
    var app = window.app = core.create({
        id: "my-app",
        name: "My App!",
        version: "0.1.0",
        debug: true,
        start: "/top/start"
    });

    app.use(menu);

    return app;
});