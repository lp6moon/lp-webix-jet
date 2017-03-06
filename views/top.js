define([
    "app",
    "./subviews/menu-profile",
    "./subviews/menu-top"
], function (app, profileMenu, topMenu) {

    var header = {
        view: "toolbar",
        height: 52,
        elements: [
            {
                view: "label",
                label: "<a href='#!/top/start'><img class='photo' src='assets/imgs/logo.png' /></a>",
                width: 200
            },
            {},
            {
                view: "icon",
                icon: "user",
                width: 45,
                popup: profileMenu.$ui.id
            }
        ]
    };
    var body = {
        cols: [
            topMenu,
            {$subview: true}
        ]
    };

    var footer = {
        height: 18
    };

    return {
        $ui: {
            rows: [header, body]
        },
        $menu: "menu:top",
        $onurlchange: function (config, url, $scope) {
            console.log("$onurlchange", arguments);
        },
        $oninit: function (view, $scope) {
            var $profile = $scope.ui(profileMenu.$ui);
            console.log("$oninit", arguments);

        },
        $ondestroy: function () {
            console.log("$ondestroy", arguments);
        }
    };
});
