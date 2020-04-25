'use strict';

function getInput(){
    let input = $(".js-handleInput").val();
    console.log(input);
    getRepos(input);
}

function getRepos(input){
    let url = `https://api.github.com/users/${input}/repos`;
    fetch(url)
        .then(response => response.json())
        .then(responseJson => displayRepos(responseJson))            
    console.log(url);
}

function displayRepos(responseJson){
    $(".js-results-list").empty();
    for (let i = 0; i < responseJson.length; i++){
        $(".js-results-list").append(`<li><a href="${responseJson[i].url}">${responseJson[i].name}</a></li>`);
    }
    console.log(responseJson.length);
    console.log(responseJson[0].name);
}

function watch(){
    $(".js-form").on("click", ".js-submit", function(event){
        event.preventDefault();
        console.log("clicked");
        getInput();
    });
}

$(watch);