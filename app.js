/*
	App configuration
*/

define([
	"libs/webix-jet-core/core",
	"libs/webix-jet-core/plugins/menu",
	"common/webix-ext"
], function(
	core, menu
){

    webix.attachEvent("onBeforeAjax",
        function(mode, url, data, request, headers, files, promise){
            //headers["Content-type"]= "application/json";
        }
    );

	//configuration
	var app =window.app= core.create({
		id:         "my-app",
		name:       "My App!",
		version:    "0.1.0",
		debug:      true,
		start:      "/top/start"
	});

	app.use(menu);

	return app;
});