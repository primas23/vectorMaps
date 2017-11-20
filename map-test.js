// var map = new Datamap({
//     element: document.getElementById('container')
// });
var colors = d3.scale.category10();
var zoom = new Datamap({
  element: document.getElementById("zoom_map"),
  scope: 'world',  
  setProjection: function (element) {
    var projection = d3.geo.equirectangular()
      .center([15, 75])      
      .scale(1500);
    var path = d3.geo.path()
      .projection(projection);

    return { 
      path: path, 
      projection: projection 
    };
  },
  fills: {
    defaultFill: "#ABDDA4",
    gt50: colors(Math.random() * 20),
    eq50: colors(Math.random() * 20),
    lt25: colors(Math.random() * 10),
    gt75: colors(Math.random() * 200),
    lt50: colors(Math.random() * 20),
    eq0: colors(Math.random() * 1),
    pink: '#0fa0fa',
    gt500: colors(Math.random() * 1)
  },
  data: {
    'ZAF': { fillKey: 'gt50' },
    'ZWE': { fillKey: 'lt25' },
    'NGA': { fillKey: 'lt50' },
    'MOZ': { fillKey: 'eq50' },
    'MDG': { fillKey: 'eq50' },
    'EGY': { fillKey: 'gt75' },
    'TZA': { fillKey: 'gt75' },
    'LBY': { fillKey: 'eq0' },
    'DZA': { fillKey: 'gt500' },
    'SSD': { fillKey: 'pink' },
    'SOM': { fillKey: 'gt50' },
    'GIB': { fillKey: 'eq50' },
    'AGO': { fillKey: 'lt50' }
  }
});