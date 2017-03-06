define([], function () {

    return {
        padding:10,
        cols: [
            {
                rows: [
                    {
                        view: "button",
                        value: "btn1",
                        autowidth: true,
                        click: function (e) {
                            webix.ajax().get("http://localhost:4000/api/data").then(function (response) {
                                window.res = response
                                console.log(response.json())
                            })
                        }
                    },
                    {}
                ]
            },
            {}
        ]


    }
});
