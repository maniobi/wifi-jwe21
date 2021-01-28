let myChart = $('#myChart');


myChart = new Chart(myChart, {

    // https://www.chartjs.org/docs/latest/charts/line.html
    
    type: 'line',

    data: {

        labels: ['1.1.20', '1.3.20', '1.5.20', '1.7.20', '1.9.20', '1.11.20'],

        datasets: [{
            label: 'Coin Price in USD',
            data: [
                12000, 14000, 19000, 12000, 24000, 9000
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 3
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