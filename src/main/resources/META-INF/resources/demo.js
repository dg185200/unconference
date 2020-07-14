window.addEventListener("load", function() {
  init();
});

function init() {
    document.getElementById('voting').onclick = function(e) {
        if (e.target.className === 'submitButton') {
            fetch('./vote', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({language: e.target.id})            
            })
            .then(function (response) {
                response.json().then(function(data) {
                    renderResults(data.raw);
                    document.getElementById('voting').classList.add('hidden');
                    document.getElementById('results').classList.remove('hidden');
                });
            })
            .catch(error => {
                console.error('Could not submit your vote: ', error);
            });
        }
    }

    document.getElementById('refreshButton').onclick = function(e) {
        fetch('./results')
        .then(function (response) {
            response.json().then(function(data) {
                renderResults(data.raw);
            });
        });
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
                data: results
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