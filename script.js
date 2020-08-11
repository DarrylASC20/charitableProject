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



let api2 = "https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/everything?q=Disease&sortBy=popularity&apiKey=cee80a6b38374a4bbd109317f0b22f55";

fetch(api2)
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        printNews(myJson);
    });

function printNews(news) {
    for(let p = 1; p < 10; p++){
        console.log(news);
    }
}

/*let signUp = document.querySelector('#signUp');

signUp.onclick() = function() {
    
}*/


