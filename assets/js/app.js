var socket = io.connect();

var map = L.map('map').setView([52.15933, 4.48973], 17);

var mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';

L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; ' + mapLink,
        maxZoom: 18
    }).addTo(map);

var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

var drawControl = new L.Control.Draw({
    draw: {
        position: 'topleft',
        polygon: false,
        rectangle: false,
        polyline: false,
        circle: false
    }
});

map.addControl(drawControl);

map.on('draw:created', function (e) {
    var type = e.layerType,
        layer = e.layer;
    if (type === 'marker') {
        layer.bindPopup('A popup!');
    }
    //console.log(e.layer.toGeoJSON());
    var feature = e.layer.toGeoJSON();
    socket.emit('insert feature', feature);
});

socket.on('insert feature', function(geojson){
    L.geoJson(geojson, {
        onEachFeature: function (feature, layer) {
            drawnItems.addLayer(layer);
        }
    });
    //console.log(geojson.geometry.coordinates);
});
