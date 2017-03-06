define(function () {

    return {
        $ui: {
            width: 200,

            rows: [
                {
                    view: "tree",
                    id: "menu:top",
                    type: "menuTree",
                    css: "menu",
                    activeTitle: true,
                    select: true,
                    tooltip: {
                        template: function (obj) {
                            return obj.$count ? "" : obj.details;
                        }
                    },
                    on: {
                        onBeforeSelect: function (id) {
                            if (this.getItem(id).$count) {
                                return false;
                            }

                        },
                        onAfterSelect: function (id) {
                            this.$scope.show("./" + id);
                        }
                    },
                    data: [
                        {id: "start", value: "首页", icon: "home"},
                        {
                            id: "one",
                            value: "一级菜单",
                            open: true,
                            data: [
                                {id: "one-1", value: "二级菜单1", icon: "pencil-square-o"},
                                {id: "one-2", value: "二级菜单2", icon: "pencil-square-o"}
                            ]
                        },
                        {id: "two", value: "列表",icon: "list"}
                    ]
                }
            ]
        }
    };

});
