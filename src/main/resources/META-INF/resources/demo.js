var httpRequest;

window.addEventListener("load", function() {
  init();
});

function init() {
    document.getElementById('voting').onclick = function(e) {
        if (e.target.className === 'submitButton') {
            httpRequest = new XMLHttpRequest();
            if (!httpRequest) {
                alert('Cannot create an XMLHttpRequest instance');
                return false;
            }

            document.getElementById('loading').classList.remove('hidden');

            httpRequest.onreadystatechange = submitVote;
            httpRequest.open('POST', './vote', true);
            httpRequest.setRequestHeader('Accept', 'application/json');
            httpRequest.setRequestHeader('Content-Type', 'application/json');
            httpRequest.send(JSON.stringify({language: e.target.id}));
        }
    }

    document.getElementById('refreshButton').onclick = function(e) {
        httpRequest = new XMLHttpRequest();
        if (!httpRequest) {
            alert('Cannot create an XMLHttpRequest instance');
            return false;
        }

        document.getElementById('loading').classList.remove('hidden');

        httpRequest.onreadystatechange = refreshResults;
        httpRequest.open('GET', './results', true);
        httpRequest.setRequestHeader('Accept', 'application/json');
        httpRequest.setRequestHeader('Content-Type', 'application/json');
        httpRequest.send();
    }
    getVersion();
}

function submitVote() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            renderResults(JSON.parse(httpRequest.responseText));
            document.getElementById('voting').classList.add('hidden');
            document.getElementById('results').classList.remove('hidden');
            document.getElementById('loading').classList.add('hidden');
        } else {
            alert('Sorry, could not submit your vote, please try again later.');
        }
    }
}

function refreshResults() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            renderResults(JSON.parse(httpRequest.responseText));
            document.getElementById('loading').classList.add('hidden');
        } else {
            alert('Sorry, could not submit your vote, please try again later.');
        }
    }

    getVersion();
}

function getVersion() {
  fetch('./version')
    .then(function (response) {
        response.text().then(function (versionNumber){
          var mainFooter = document.getElementById("main-footer");
          var version = document.createElement("p");
          version.appendChild(document.createTextNode(versionNumber));
          mainFooter.appendChild(version);
        });
    })
}

function renderResults(results) {
    var ctx = document.getElementById('resultsChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',
    
        // The data for our dataset
        data: {
            labels: ['C', 'C++', 'C#', 'Go', 'Java', 'Javascript', 'Kotlin', 'Python', 'Ruby', 'Swift'],
            datasets: [{
                label: '',
                backgroundColor: '#56a8ca',
                borderColor: '#ffffff',
                data: results.raw
            }],
            legend: {
                display: true,
                labels: {
                    fontColor: '#ba603a'
                }
            }
        },
        options: {}
    });
}