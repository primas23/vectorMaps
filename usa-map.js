var map = new Datamap({
    element: document.getElementById('container'),
    fills: {
        HIGH: '#afafaf',
        LOW: '#123456',
        MEDIUM: 'blue',
        UNKNOWN: 'rgb(0,0,0)',
        defaultFill: 'green'
    },
    data: {
        IRL: {
            fillKey: 'LOW',
            numberOfThings: 2002
        },
        USA: {
            fillKey: 'MEDIUM',
            numberOfThings: 10381
        }
    }
});

// Draw a legend for this map
map.legend();