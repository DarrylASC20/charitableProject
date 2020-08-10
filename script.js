let api = "https://api.data.charitynavigator.org/v2/Organizations?app_id=fdc3d132&app_key=dbbd7d630df788b5c498c1a97cfb7e87";

fetch(api)
    .then(function (response) {
        return response.json();


    })
    .then(function (myJson) {
        printInfo(myJson);

    });

function printInfo(info) {

    console.log(info);

}

let api2 = "https://gnews.io/api/v3/search?q=example&token=3069c2ba43fc4972906cf4e38414e2f7";

fetch(api2)
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        printNews(myJson);
        console.log(myJson.articles[0].title);
    });

function printNews(news) {
    
}

