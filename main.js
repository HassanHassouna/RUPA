const apiManager = new APIManager()
const renderer = new Renderer()
$('#displayUser').on('click', function () {

    apiManager.getAllData()
        .then(function () {
            renderer.renderData(apiManager.data);
        })
        .catch(function (error) {
            console.error("Error fetching data:", error);
        });
})



