

var searchjobName;
var jsonData;
var jobSOC;
var weeklyPayData = null;
var singularJobJSON;



function firstTenResults() {

    var searchjobName = document.getElementById("searchTxt").value
    // document.getElementById("jobName").innerHTML = jobName;
    searchjobName = searchjobName.replace(/\s/g, '%20')


    allJSONData(searchjobName)

    console.log(jsonData)
    document.getElementById("Job1SOC").innerHTML = "SOC: " + jsonData[0]["soc"];
    document.getElementById("Job1Title").innerHTML = "Title: " + jsonData[0]["title"];

    document.getElementById("Job2SOC").innerHTML = "SOC: " + jsonData[1]["soc"];
    document.getElementById("Job2Title").innerHTML = "Title: " + jsonData[1]["title"];

    document.getElementById("Job3SOC").innerHTML = "SOC: " + jsonData[2]["soc"];
    document.getElementById("Job3Title").innerHTML = "Title: " + jsonData[2]["title"];

    document.getElementById("Job4SOC").innerHTML = "SOC: " + jsonData[3]["soc"];
    document.getElementById("Job4Title").innerHTML = "Title: " + jsonData[3]["title"];

    document.getElementById("Job5SOC").innerHTML = "SOC: " + jsonData[4]["soc"];
    document.getElementById("Job5Title").innerHTML = "Title: " + jsonData[4]["title"];

    document.getElementById("Job6SOC").innerHTML = "SOC: " + jsonData[5]["soc"];
    document.getElementById("Job6Title").innerHTML = "Title: " + jsonData[5]["title"];

    document.getElementById("Job7SOC").innerHTML = "SOC: " + jsonData[6]["soc"];
    document.getElementById("Job7Title").innerHTML = "Title: " + jsonData[6]["title"];

    document.getElementById("Job8SOC").innerHTML = "SOC: " + jsonData[7]["soc"];
    document.getElementById("Job8Title").innerHTML = "Title: " + jsonData[7]["title"];

    document.getElementById("Job9SOC").innerHTML = "SOC: " + jsonData[8]["soc"];
    document.getElementById("Job9Title").innerHTML = "Title: " + jsonData[8]["title"];

    document.getElementById("Job10SOC").innerHTML = "SOC: " + jsonData[9]["soc"];
    document.getElementById("Job10Title").innerHTML = "Title: " + jsonData[9]["title"];




    // var jobSOC = jsonData[0]["soc"]
    // document.getElementById("SOC").innerHTML = jobSOC;

    // var title = jsonData[0]["title"]
    // document.getElementById("title").innerHTML = title;

    // var desc = jsonData[0]["description"]
    // document.getElementById("desc").innerHTML = desc;

    // var qualifications = jsonData[0]["qualifications"]
    // document.getElementById("qualifications").innerHTML = qualifications;

    // var tasks = jsonData[0]["tasks"]
    // document.getElementById("tasks").innerHTML = tasks;

    // weeklyPayFromSOC(jsonData)

    // document.getElementById("pay").innerHTML = weeklyPayData;

    // console.log(weeklyPayData)

}

function searchSOC() {
    var jobSOC = document.getElementById("searchSOC").value  

    singularJob(jobSOC)

    console.log(singularJobJSON)

    var jobSOC = singularJobJSON["soc"]
    document.getElementById("SOC").innerHTML = jobSOC;

    var title = singularJobJSON["title"]
    document.getElementById("title").innerHTML = title;

    var desc = singularJobJSON["description"]
    document.getElementById("desc").innerHTML = desc;

    var qualifications = singularJobJSON["qualifications"]
    document.getElementById("qualifications").innerHTML = qualifications;

    var tasks = singularJobJSON["tasks"]
    document.getElementById("tasks").innerHTML = tasks;

    // weeklyPayFromSOC(jsonData)

    // document.getElementById("pay").innerHTML = weeklyPayData;

    // console.log(weeklyPayData)

}

function singularJob(jobSOC){
    urlAPI = 'http://api.lmiforall.org.uk/api/v1/soc/code/' + jobSOC

    fetch(urlAPI)
        .then(response => response.json())
        .then((out) => {
            singularJobJSON = out
        })
        .catch(err => { throw err });

}

function allJSONData(searchjobName) {
    urlAPI = 'http://api.lmiforall.org.uk/api/v1/soc/search?q=' + searchjobName

    fetch(urlAPI)
        .then(response => response.json())
        .then((out) => {
            jsonData = out
        })
        .catch(err => { throw err });
}


function weeklyPayFromSOC(jsonData) {
    var jobSOC = jsonData[0]["soc"]
    weeklypayAPI = "http://api.lmiforall.org.uk/api/v1/ashe/estimatePay?soc=" + jobSOC + "&coarse=true&filters=region%3A11"

    fetch(weeklypayAPI)
        .then(response => response.json())
        .then((out) => {
            weeklyPayData = out
        })
        .catch(err => { throw err });

}

