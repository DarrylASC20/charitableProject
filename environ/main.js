let environCharity = "https://api.data.charitynavigator.org/v2/Organizations?app_id=fdc3d132&app_key=dbbd7d630df788b5c498c1a97cfb7e87&search=Environment";
let container = document.querySelector('.charLink');

fetch(environCharity)
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        printInfo(myJson);
    });

    function printInfo(info) {
        for(let p = 1; p < 4; p++){  
            container.innerHTML += info[p].charityName + "-" + "<br>" + info[p].charityNavigatorURL + "<br>" + "<br>";  
        }
        let url = info[p].charityNavigatorURL;
        url.onClick() = function(){
            window.open(url, '_blank');
        }
    }
    

let api2 = "https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/everything?q=environmental+problems&sortBy=popularity&apiKey=cee80a6b38374a4bbd109317f0b22f55";
let artName = document.querySelector('.artName');
let story = document.querySelector('.story');
let fullStory = document.querySelector('.link');

fetch(api2)
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        printNews(myJson);
    });

function printNews(news) {
    for(let p = 1; p < 10; p++){
        artName.innerHTML += news[p].sources.name;
        story.innerHTML += story[p].sources.description;
        fullStory.innerHTML += news[p].sources.url;
    }
}

/*let signUp = document.querySelector('#signUp');

signUp.onclick() = function() {
    
}*/