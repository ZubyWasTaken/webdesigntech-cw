$(document).ready(function () {

    var universityJSON;

    const universityURL = "http://universities.hipolabs.com/search?country=United%20Kingdom";

    fetch(universityURL)
        .then(response => response.json())
        .then((out) => {
            universityJSON = out
        })
        .catch(err => { throw err });


    $("#searchBtn").on("click", function () {

        console.log(universityJSON)

        for (var i = 0; i < universityJSON.length; i++) {
            var obj = universityJSON[i];

            console.log(obj.name);
            document.getElementById('log').innerHTML += '<br>' + obj.name + '<br>' + obj.web_pages + '<br>';

        }


    })







});