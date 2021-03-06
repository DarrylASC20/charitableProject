let api = "https://api.data.charitynavigator.org/v2/Organizations?app_id=fdc3d132&app_key=dbbd7d630df788b5c498c1a97cfb7e87&search=pandemic";

let container = document.querySelector('.charLink');

fetch(api)
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        printInfo(myJson);
    });

function printInfo(info) {
    // <a href="link" target="_blank">name</a>
    for(let p = 1; p < 5; p++) {
        let a = document.createElement("a");
        a.setAttribute("href", info[p].charityNavigatorURL);
        a.setAttribute("target", "_blank");
        a.innerHTML = info[p].charityName;
        let br = document.createElement("br");
        container.appendChild(a);
        container.appendChild(br);
    }
}

let api2 = "https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/everything?q=Coronavirus&sortBy=popularity&apiKey=cee80a6b38374a4bbd109317f0b22f55";
let container2 = document.querySelector('.article');
let artPic = document.querySelector('.artPic');
let artName = document.querySelector('.artName');
let story = document.querySelector('.story');
let fullStory = document.querySelector('.fullStory');
let fullArticle = document.querySelector('.fullArticle');
let allArticles = [];
let index = 0;

fetch(api2)
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        allArticles = myJson.articles;
        printNews(index);
    });

function printNews(index) {
    console.log(index);
    let article = allArticles[index];
    artPic.src = article.urlToImage;
    artName.innerHTML = article.title;
    story.innerHTML = article.description;
    fullStory.innerHTML = article.url;
    fullArticle.href = article.url;
}

let previous = document.getElementById('previous');
let next = document.getElementById('next');

function nextArticle(myArticles) {
    index++;
    printNews(index);
}

next.addEventListener('click', nextArticle);

function prevArticle(myArticle) {
    index--;
    printNews(index);
}

previous.addEventListener('click', prevArticle);

//let signUp = document.querySelector('#signUp');

//signUp.onclick() = function() {
    
//}