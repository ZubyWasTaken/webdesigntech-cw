var jobName;
var jsonData = null;

function searchTxt() {
    jobName = document.getElementById("searchTxt").value;
    jobName = jobName.replace(/\s/g, '%20')

    console.log(jobName)
    searchAPI(jobName)
}


function searchAPI(jobName) {
    var request = new XMLHttpRequest()
    urlAPI = 'http://api.lmiforall.org.uk/api/v1/soc/search?q=' + jobName

    

    fetch(urlAPI)
        .then(response => response.json())
        .then((out) => {
            jsonData = out
            console.log('JSON Output ', out);
        })
        .catch(err => { throw err });

        console.log(jsonData)
}

function functionGrabSOC(jsonData){


}

