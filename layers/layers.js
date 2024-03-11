var wms_layers = [];


        var lyr_DarkMatterretina_0 = new ol.layer.Tile({
            'title': 'Dark Matter (retina)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_masterBoundary_1 = new ol.format.GeoJSON();
var features_masterBoundary_1 = format_masterBoundary_1.readFeatures(json_masterBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_masterBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_masterBoundary_1.addFeatures(features_masterBoundary_1);
var lyr_masterBoundary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_masterBoundary_1, 
                style: style_masterBoundary_1,
                popuplayertitle: "masterBoundary",
                interactive: true,
    title: 'masterBoundary<br />\
    <img src="styles/legend/masterBoundary_1_0.png" /> 0.454 - 0.557<br />\
    <img src="styles/legend/masterBoundary_1_1.png" /> 0.557 - 0.586<br />\
    <img src="styles/legend/masterBoundary_1_2.png" /> 0.586 - 0.634<br />\
    <img src="styles/legend/masterBoundary_1_3.png" /> 0.634 - 0.651<br />\
    <img src="styles/legend/masterBoundary_1_4.png" /> 0.651 - 0.726<br />'
        });

lyr_DarkMatterretina_0.setVisible(true);lyr_masterBoundary_1.setVisible(true);
var layersList = [lyr_DarkMatterretina_0,lyr_masterBoundary_1];
lyr_masterBoundary_1.set('fieldAliases', {'bbox_north': 'bbox_north', 'bbox_south': 'bbox_south', 'bbox_east': 'bbox_east', 'bbox_west': 'bbox_west', 'place_id': 'place_id', 'osm_type': 'osm_type', 'osm_id': 'osm_id', 'lat': 'lat', 'lon': 'lon', 'class': 'class', 'type': 'type', 'place_rank': 'place_rank', 'importance': 'importance', 'addresstype': 'addresstype', 'name': 'name', 'display_name': 'display_name', 'Measures': 'Measures', 'Status': 'Status', });
lyr_masterBoundary_1.set('fieldImages', {'bbox_north': 'TextEdit', 'bbox_south': 'TextEdit', 'bbox_east': 'TextEdit', 'bbox_west': 'TextEdit', 'place_id': 'Range', 'osm_type': 'TextEdit', 'osm_id': 'Range', 'lat': 'TextEdit', 'lon': 'TextEdit', 'class': 'TextEdit', 'type': 'TextEdit', 'place_rank': 'Range', 'importance': 'TextEdit', 'addresstype': 'TextEdit', 'name': 'TextEdit', 'display_name': 'TextEdit', 'Measures': 'TextEdit', 'Status': 'TextEdit', });
lyr_masterBoundary_1.set('fieldLabels', {'bbox_north': 'no label', 'bbox_south': 'no label', 'bbox_east': 'no label', 'bbox_west': 'no label', 'place_id': 'no label', 'osm_type': 'no label', 'osm_id': 'no label', 'lat': 'no label', 'lon': 'no label', 'class': 'no label', 'type': 'no label', 'place_rank': 'no label', 'importance': 'no label', 'addresstype': 'no label', 'name': 'no label', 'display_name': 'no label', 'Measures': 'no label', 'Status': 'no label', });
lyr_masterBoundary_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});