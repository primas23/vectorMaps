var bubble_map = new Datamap({
    element: document.getElementById('canada'),
    scope: 'canada',
    geographyConfig: {
        popupOnHover: true,
        highlightOnHover: true,
        borderColor: '#bcff12',
        borderWidth: 0.5,
        dataUrl: 'https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/canada.topo.json'
        //dataJson: topoJsonData
    },
    fills: {
        'MAJOR': '#bcff12',
        'MEDIUM': '#bcff12',
        'MINOR': '#bcff12',
        defaultFill: '#dddddd'
    },
    data: {
        'JH': { fillKey: 'MINOR' },
        'MH': { fillKey: 'MINOR' }
    },
    setProjection: function (element) {
          var projection = d3.geo.mercator()
            .center([-106.3468, 68.1304]) // always in [East Latitude, North Longitude]
            .scale(150)
            .translate([element.offsetWidth / 2, element.offsetHeight / 2]);

        var path = d3.geo.path().projection(projection);
        return { 
            path: path, 
            projection: projection 
        };
    }
});