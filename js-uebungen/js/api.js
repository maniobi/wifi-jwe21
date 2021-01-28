let endpoint = 'https://api.coincap.io/v2/assets/bitcoin/history?interval=d1';
let params = {};

let response;


window.setInterval(function() {
    // AJAX Request wiederholt sich
    console.log('AJAX Request');
}, 3000);

let myChart = $('#myChart');

function createChart(labels, data) {
    
    myChart = new Chart(myChart, {

        // https://www.chartjs.org/docs/latest/charts/line.html
        
        type: 'line',

        data: {

            // array aus dem response
            labels: labels,

            datasets: [{
                label: 'Coin Price in USD',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        }


    });
}


$('#update_btn').click(function() {

    $.ajax({
        url: endpoint,
        data: params,
        dataType: 'json',
        type: 'GET',

        success: function(response) {

            console.log(response);
            window.response = response;
 
            let html = '';


            let labelsArray = [];
            let dataArray = [];
            
            $(response.data).each(function(index, eintrag) {
                 
                // Ausgabe im HTML
                /*
                    html += `<strong class="price">${eintrag.priceUsd}</strong>`;
                    html += `<span class="time">${eintrag.time}</span>`;
                    html += '<br>';
                */


                /**
                 * 
                 * Die folgenden Zeilen verwenden dynamische Werte aus dem API Request
                 * 
                 */

                // Timestamp in Datum umformatieren
                // https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/
                let time = new Date(eintrag.time);
                time = `${time.getDate()}.${time.getMonth()+1}.${time.getFullYear()}`;

                // einer global verwendbaren Variable zuweisen
                labelsArray[index] = time;

                // gerundet auf 2 Nachkommerstellen
                let roundedPrice = Math.round(eintrag.priceUsd);

                // einer global verwendbaren Variable zuweisen
                dataArray[index] = roundedPrice;


            });

            createChart(labelsArray, dataArray);


            // $('#response').html(html);

        }

    });

});


