$(document).ready(function () {

    var universityJSON;

    const universityURL = 'http://universities.hipolabs.com/search?country=United%20Kingdom';

    fetch(universityURL)
        .then(response => response.json())
        .then((out) => {
            universityJSON = out
        })
        .catch(err => { throw err });


    $("#displayBtn").on("click", function () {

        console.log(universityJSON)

    })

    





});