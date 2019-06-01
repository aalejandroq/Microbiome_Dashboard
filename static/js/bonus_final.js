// ******************************************************************************
// ******************************************************************************

function buildGauge(sample) {
    d3.json(`metadata/${sample}`).then(function(data) {

    var level = data.WFREQ*(20)-10;    
    // Trig to calc meter point
    var degrees = 180 - level,
        radius = .65;
    var radians = degrees * Math.PI / 180;
    var x = radius * Math.cos(radians);
    var y = radius * Math.sin(radians);
    
    // Path: creates the needle of the gauge
    var mainPath = 'M 0 0 L',
        pathX = String(x),
        space = ' ',
        pathY = String(y),
        pathEnd = ' Z';
    var path = mainPath.concat(pathX,space,pathY,pathEnd);

    var data = [{ type: 'scatter',
    x: [0], y:[0],
        marker: {size: 25, color:'F37370'},
        showlegend: false,
        hoverinfo: 'text'},

    { values: [10, 10, 10, 10, 10, 10, 10, 10, 10, 90],
    rotation: 90,
    text: ['9', '8', '7', '6', '5', '4', '3', '2', '1',''],
    textinfo: 'text',
    textposition:'inside',
    marker: {colors:['rgba(20, 60, 144, 1)', 'rgba(48, 80, 155, 1)', 'rgba(72, 100, 167, 1)',
                    'rgba(96, 121, 179, 1)', 'rgba(120, 141, 191, 1)', 'rgba(144, 161, 201, 1)',
                    'rgba(168, 182, 214, 1)', 'rgba(192, 202, 226, 1)', 'rgba(216, 222, 238, 1)',
                    'rgba(255, 255, 255, 1)']},
    labels: ['', '', '', '', '', '', '', '', ''],
    hoverinfo: 'text',
    hole: .5,
    type: 'pie',
    showlegend: false
    }];

    var layout = {
    shapes:[{
        type: 'path',
        path: path,
        fillcolor: 'F37370',
        line: {
            color: 'F37370',
            width: 6
        }
        }],
    title: 'Scrubs per Week',

    xaxis: {zeroline:false, showticklabels:false,
                showgrid: false, range: [-1, 1], fixedrange: true},
    yaxis: {zeroline:false, showticklabels:false,
                showgrid: false, range: [-1, 1], fixedrange: true}
    };

    Plotly.newPlot('gauge', data, layout);

    });
};

// ******************************************************************************
// ******************************************************************************
