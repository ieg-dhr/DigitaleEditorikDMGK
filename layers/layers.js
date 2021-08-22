var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Geburtsbriefe_geokodiertWOMEN_1 = new ol.format.GeoJSON();
var features_Geburtsbriefe_geokodiertWOMEN_1 = format_Geburtsbriefe_geokodiertWOMEN_1.readFeatures(json_Geburtsbriefe_geokodiertWOMEN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geburtsbriefe_geokodiertWOMEN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geburtsbriefe_geokodiertWOMEN_1.addFeatures(features_Geburtsbriefe_geokodiertWOMEN_1);cluster_Geburtsbriefe_geokodiertWOMEN_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Geburtsbriefe_geokodiertWOMEN_1
});
var lyr_Geburtsbriefe_geokodiertWOMEN_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Geburtsbriefe_geokodiertWOMEN_1, 
                style: style_Geburtsbriefe_geokodiertWOMEN_1,
                interactive: true,
                title: '<img src="styles/legend/Geburtsbriefe_geokodiertWOMEN_1.png" /> Geburtsbriefe_geokodiert - WOMEN'
            });
var format_Geburtsbriefe_geokodiertGROUPS_2 = new ol.format.GeoJSON();
var features_Geburtsbriefe_geokodiertGROUPS_2 = format_Geburtsbriefe_geokodiertGROUPS_2.readFeatures(json_Geburtsbriefe_geokodiertGROUPS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geburtsbriefe_geokodiertGROUPS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geburtsbriefe_geokodiertGROUPS_2.addFeatures(features_Geburtsbriefe_geokodiertGROUPS_2);cluster_Geburtsbriefe_geokodiertGROUPS_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Geburtsbriefe_geokodiertGROUPS_2
});
var lyr_Geburtsbriefe_geokodiertGROUPS_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Geburtsbriefe_geokodiertGROUPS_2, 
                style: style_Geburtsbriefe_geokodiertGROUPS_2,
                interactive: true,
                title: '<img src="styles/legend/Geburtsbriefe_geokodiertGROUPS_2.png" /> Geburtsbriefe_geokodiert - GROUPS'
            });
var format_Geburtsbriefe_geokodiertFOREIGN_3 = new ol.format.GeoJSON();
var features_Geburtsbriefe_geokodiertFOREIGN_3 = format_Geburtsbriefe_geokodiertFOREIGN_3.readFeatures(json_Geburtsbriefe_geokodiertFOREIGN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geburtsbriefe_geokodiertFOREIGN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geburtsbriefe_geokodiertFOREIGN_3.addFeatures(features_Geburtsbriefe_geokodiertFOREIGN_3);
var lyr_Geburtsbriefe_geokodiertFOREIGN_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Geburtsbriefe_geokodiertFOREIGN_3, 
                style: style_Geburtsbriefe_geokodiertFOREIGN_3,
                interactive: true,
                title: '<img src="styles/legend/Geburtsbriefe_geokodiertFOREIGN_3.png" /> Geburtsbriefe_geokodiert - FOREIGN'
            });
var format_Export_Geburtsbriefe_geokodiertMEN_4 = new ol.format.GeoJSON();
var features_Export_Geburtsbriefe_geokodiertMEN_4 = format_Export_Geburtsbriefe_geokodiertMEN_4.readFeatures(json_Export_Geburtsbriefe_geokodiertMEN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Export_Geburtsbriefe_geokodiertMEN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Geburtsbriefe_geokodiertMEN_4.addFeatures(features_Export_Geburtsbriefe_geokodiertMEN_4);cluster_Export_Geburtsbriefe_geokodiertMEN_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Export_Geburtsbriefe_geokodiertMEN_4
});
var lyr_Export_Geburtsbriefe_geokodiertMEN_4 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Export_Geburtsbriefe_geokodiertMEN_4, 
                style: style_Export_Geburtsbriefe_geokodiertMEN_4,
                interactive: true,
                title: '<img src="styles/legend/Export_Geburtsbriefe_geokodiertMEN_4.png" /> Export_Geburtsbriefe_geokodiert - MEN'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Geburtsbriefe_geokodiertWOMEN_1.setVisible(true);lyr_Geburtsbriefe_geokodiertGROUPS_2.setVisible(true);lyr_Geburtsbriefe_geokodiertFOREIGN_3.setVisible(true);lyr_Export_Geburtsbriefe_geokodiertMEN_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Geburtsbriefe_geokodiertWOMEN_1,lyr_Geburtsbriefe_geokodiertGROUPS_2,lyr_Geburtsbriefe_geokodiertFOREIGN_3,lyr_Export_Geburtsbriefe_geokodiertMEN_4];
lyr_Geburtsbriefe_geokodiertWOMEN_1.set('fieldAliases', {'Archival record': 'Archival record', 'Title': 'Title', 'Recipient\'s gender': 'Recipient\'s gender', 'Language': 'Language', 'Issuer': 'Issuer', 'Date': 'Date', 'Archival provenance': 'Archival provenance', 'Permalink': 'Permalink', 'Related place 1': 'Related place 1', 'Related place 2': 'Related place 2', 'Related place 3': 'Related place 3', 'Related place 4': 'Related place 4', 'Recipient\'s place of origin': 'Recipient\'s place of origin', 'data reliability': 'data reliability', });
lyr_Geburtsbriefe_geokodiertGROUPS_2.set('fieldAliases', {'Archival record': 'Archival record', 'Title': 'Title', 'Recipient\'s gender': 'Recipient\'s gender', 'Language': 'Language', 'Issuer': 'Issuer', 'Date': 'Date', 'Archival provenance': 'Archival provenance', 'Permalink': 'Permalink', 'Related place 1': 'Related place 1', 'Related place 2': 'Related place 2', 'Related place 3': 'Related place 3', 'Related place 4': 'Related place 4', 'Recipient\'s place of origin': 'Recipient\'s place of origin', 'data reliability': 'data reliability', });
lyr_Geburtsbriefe_geokodiertFOREIGN_3.set('fieldAliases', {'Archival record': 'Archival record', 'Title': 'Title', 'Recipient\'s gender': 'Recipient\'s gender', 'Language': 'Language', 'Issuer': 'Issuer', 'Date': 'Date', 'Archival provenance': 'Archival provenance', 'Permalink': 'Permalink', 'Related place 1': 'Related place 1', 'Related place 2': 'Related place 2', 'Related place 3': 'Related place 3', 'Related place 4': 'Related place 4', 'Recipient\'s place of origin': 'Recipient\'s place of origin', 'data reliability': 'data reliability', });
lyr_Export_Geburtsbriefe_geokodiertMEN_4.set('fieldAliases', {'Archival record': 'Archival record', 'Title': 'Title', 'Recipient\'s gender': 'Recipient\'s gender', 'Language': 'Language', 'Issuer': 'Issuer', 'Date': 'Date', 'Archival provenance': 'Archival provenance', 'Permalink': 'Permalink', 'Related place 1': 'Related place 1', 'Related place 2': 'Related place 2', 'Related place 3': 'Related place 3', 'Related place 4': 'Related place 4', 'Recipient\'s place of origin': 'Recipient\'s place of origin', 'data reliability': 'data reliability', });
lyr_Geburtsbriefe_geokodiertWOMEN_1.set('fieldImages', {'Archival record': 'TextEdit', 'Title': 'TextEdit', 'Recipient\'s gender': 'TextEdit', 'Language': 'TextEdit', 'Issuer': 'TextEdit', 'Date': 'TextEdit', 'Archival provenance': 'TextEdit', 'Permalink': 'TextEdit', 'Related place 1': 'TextEdit', 'Related place 2': 'TextEdit', 'Related place 3': 'TextEdit', 'Related place 4': 'TextEdit', 'Recipient\'s place of origin': 'TextEdit', 'data reliability': 'TextEdit', });
lyr_Geburtsbriefe_geokodiertGROUPS_2.set('fieldImages', {'Archival record': 'TextEdit', 'Title': 'TextEdit', 'Recipient\'s gender': 'TextEdit', 'Language': 'TextEdit', 'Issuer': 'TextEdit', 'Date': 'TextEdit', 'Archival provenance': 'TextEdit', 'Permalink': 'TextEdit', 'Related place 1': 'TextEdit', 'Related place 2': 'TextEdit', 'Related place 3': 'TextEdit', 'Related place 4': 'TextEdit', 'Recipient\'s place of origin': 'TextEdit', 'data reliability': 'TextEdit', });
lyr_Geburtsbriefe_geokodiertFOREIGN_3.set('fieldImages', {'Archival record': 'TextEdit', 'Title': 'TextEdit', 'Recipient\'s gender': 'TextEdit', 'Language': 'TextEdit', 'Issuer': 'TextEdit', 'Date': 'TextEdit', 'Archival provenance': 'TextEdit', 'Permalink': 'TextEdit', 'Related place 1': 'TextEdit', 'Related place 2': 'TextEdit', 'Related place 3': 'TextEdit', 'Related place 4': 'TextEdit', 'Recipient\'s place of origin': 'TextEdit', 'data reliability': 'TextEdit', });
lyr_Export_Geburtsbriefe_geokodiertMEN_4.set('fieldImages', {'Archival record': 'TextEdit', 'Title': 'TextEdit', 'Recipient\'s gender': 'TextEdit', 'Language': 'TextEdit', 'Issuer': 'TextEdit', 'Date': 'TextEdit', 'Archival provenance': 'TextEdit', 'Permalink': 'TextEdit', 'Related place 1': 'TextEdit', 'Related place 2': 'TextEdit', 'Related place 3': 'TextEdit', 'Related place 4': 'TextEdit', 'Recipient\'s place of origin': 'TextEdit', 'data reliability': 'TextEdit', });
lyr_Geburtsbriefe_geokodiertWOMEN_1.set('fieldLabels', {'Archival record': 'inline label', 'Title': 'inline label', 'Recipient\'s gender': 'inline label', 'Language': 'inline label', 'Issuer': 'inline label', 'Date': 'inline label', 'Archival provenance': 'inline label', 'Permalink': 'inline label', 'Related place 1': 'no label', 'Related place 2': 'no label', 'Related place 3': 'no label', 'Related place 4': 'no label', 'Recipient\'s place of origin': 'inline label', 'data reliability': 'inline label', });
lyr_Geburtsbriefe_geokodiertGROUPS_2.set('fieldLabels', {'Archival record': 'inline label', 'Title': 'inline label', 'Recipient\'s gender': 'inline label', 'Language': 'inline label', 'Issuer': 'inline label', 'Date': 'inline label', 'Archival provenance': 'inline label', 'Permalink': 'inline label', 'Related place 1': 'no label', 'Related place 2': 'no label', 'Related place 3': 'no label', 'Related place 4': 'no label', 'Recipient\'s place of origin': 'inline label', 'data reliability': 'inline label', });
lyr_Geburtsbriefe_geokodiertFOREIGN_3.set('fieldLabels', {'Archival record': 'inline label', 'Title': 'inline label', 'Recipient\'s gender': 'inline label', 'Language': 'inline label', 'Issuer': 'inline label', 'Date': 'inline label', 'Archival provenance': 'inline label', 'Permalink': 'inline label', 'Related place 1': 'no label', 'Related place 2': 'no label', 'Related place 3': 'no label', 'Related place 4': 'no label', 'Recipient\'s place of origin': 'inline label', 'data reliability': 'inline label', });
lyr_Export_Geburtsbriefe_geokodiertMEN_4.set('fieldLabels', {'Archival record': 'inline label', 'Title': 'inline label', 'Recipient\'s gender': 'inline label', 'Language': 'inline label', 'Issuer': 'inline label', 'Date': 'inline label', 'Archival provenance': 'inline label', 'Permalink': 'inline label', 'Related place 1': 'no label', 'Related place 2': 'no label', 'Related place 3': 'no label', 'Related place 4': 'no label', 'Recipient\'s place of origin': 'inline label', 'data reliability': 'inline label', });
lyr_Export_Geburtsbriefe_geokodiertMEN_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});