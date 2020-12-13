$(document).ready(function () {

    //variabled declared
    var searchjobName;
    var jsonData;
    var jobSOC;
    var weeklyPayData = null;
    var singularJobJSON;

    
    $('#showChart').css('visibility', 'hidden');

    $("#searchBtn").on("click", function firstTenResults() {
        var searchjobName = document.getElementById("searchTxt").value
        // document.getElementById("jobName").innerHTML = jobName;
        searchjobName = searchjobName.replace(/\s/g, '%20')


        allJSONData(searchjobName)

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

    })

    $("#searchSOCBtn").on("click", function searchSOC() {
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

        weeklyPayFromSOC(jsonData)

        console.log(weeklyPayData)

        $('#showChart').css('visibility', 'visible');

        
    })


    $("#showChart").on("click", function showChart(){
        var chart = new CanvasJS.Chart("chartContainer", {
            title:{
                text: "Weekly Pay in Scotland in GBP"              
            },
        
            data: [              
            {
                // Change type to "doughnut", "line", "splineArea", etc.
                type: "column",
                dataPoints: [
                    { label: weeklyPayData["series"][0]["year"], y: weeklyPayData["series"][0]["estpay"]  },
                    { label: weeklyPayData["series"][1]["year"], y: weeklyPayData["series"][1]["estpay"]  },
                    { label: weeklyPayData["series"][2]["year"], y: weeklyPayData["series"][2]["estpay"]  },
                    { label: weeklyPayData["series"][3]["year"], y: weeklyPayData["series"][3]["estpay"]  }
                ]
            }
            ]
        });
        chart.render();
    })

    



    function singularJob(jobSOC) {
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


    function weeklyPayFromSOC(jobSOC) {
        var jobSOC = document.getElementById("searchSOC").value
        weeklypayAPI = "http://api.lmiforall.org.uk/api/v1/ashe/estimatePay?soc=" + jobSOC + "&coarse=true&filters=region%3A11"

        fetch(weeklypayAPI)
            .then(response => response.json())
            .then((out) => {
                weeklyPayData = out
            })
            .catch(err => { throw err });

    }

});