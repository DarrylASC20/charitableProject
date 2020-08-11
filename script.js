let api = "https://api.data.charitynavigator.org/v2/Organizations?app_id=fdc3d132&app_key=dbbd7d630df788b5c498c1a97cfb7e87";
let diasterCharities = "https://api.data.charitynavigator.org/v2/Organizations?app_id=fdc3d132&app_key=dbbd7d630df788b5c498c1a97cfb7e87&search=Natural%20Diasters";
let environCharity = "https://api.data.charitynavigator.org/v2/Organizations?app_id=fdc3d132&app_key=dbbd7d630df788b5c498c1a97cfb7e87&search=Environment";
let socialJustice = "https://api.data.charitynavigator.org/v2/Organizations?app_id=fdc3d132&app_key=dbbd7d630df788b5c498c1a97cfb7e87&search=Social%20Justice";
let healthCharity = "https://api.data.charitynavigator.org/v2/Organizations?app_id=fdc3d132&app_key=dbbd7d630df788b5c498c1a97cfb7e87&search=Health";
let container = document.querySelector('.charLink');

fetch(api)
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        printInfo(myJson);
    });

function printInfo(info) {
    for(let p = 1; p < 10; p++){  
        container.innerHTML += info[p].charityName + "<br>";  
    }
}



let api2 = "https://gnews.io/api/v3/search?q=example&token=3069c2ba43fc4972906cf4e38414e2f7";
let disasterNews = "https://gnews.io/api/v3/topics/natural+disasters?token=3069c2ba43fc4972906cf4e38414e2f7";
let enviroNews = "https://gnews.io/api/v3/topics/environment?token=3069c2ba43fc4972906cf4e38414e2f7";
let worldNews = "https://gnews.io/api/v3/topics/world?token=3069c2ba43fc4972906cf4e38414e2f7";
let healthNews = "https://gnews.io/api/v3/topics/health?token=3069c2ba43fc4972906cf4e38414e2f7";

fetch(healthNews)
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        printNews(myJson);
    });

function printNews(news) {
    for(let p = 1; p < 10; p++){
        console.log(article[0].description);
    }
}

/*let signUp = document.querySelector('#signUp');

signUp.onclick() = function() {
    
}*/


