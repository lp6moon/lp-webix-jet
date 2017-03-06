define(function () {
    return {
        $ui: {
            view: "submenu",
            id: "menu:profile",
            width: 200,
            padding: 0,
            data: [
                {id: 1, icon: "user", value: "个人资料"},
                {id: 2, icon: "pencil", value: "修改密码"},
                {$template: "Separator"},
                {id: 9, icon: "sign-out", value: "注销"}
            ],
            type: {
                template: function (obj) {
                    if (obj.type)
                        return "<div class='separator'></div>";
                    return "<span class='webix_icon alerts fa-" + obj.icon + "'></span><span>" + obj.value + "</span>";
                }
            },
            on: {
                onItemClick:function(id){
                    var item = this.getItem(id);
                    alert(item.value)
                }
            }

        }

    }
})