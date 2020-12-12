

var jobName;
var jsonData;
var jobSOC;
var weeklyPayData = null;



function GetDataButton() {
    
    var jobName = document.getElementById("searchTxt").value
    document.getElementById("jobName").innerHTML = jobName;
    jobName = jobName.replace(/\s/g, '%20')
    

    allJSONData(jobName)

    var jobSOC = jsonData[0]["soc"]
    document.getElementById("SOC").innerHTML = jobSOC;

    var title = jsonData[1]["title"]
    document.getElementById("title").innerHTML = title;

    var desc = jsonData[2]["description"]
    document.getElementById("desc").innerHTML = desc;

    var qualifications = jsonData[3]["qualifications"]
    document.getElementById("qualifications").innerHTML = qualifications;

    var tasks = jsonData[4]["tasks"]
    document.getElementById("tasks").innerHTML = tasks;

    weeklyPayFromSOC(jsonData)

    document.getElementById("pay").innerHTML = weeklyPayData[0];

    console.log(weeklyPayData)

}

function allJSONData(jobName) {
    urlAPI = 'http://api.lmiforall.org.uk/api/v1/soc/search?q=' + jobName

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

