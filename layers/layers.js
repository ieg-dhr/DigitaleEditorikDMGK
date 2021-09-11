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
var format_GeburtsbriefefrPersonengruppen_1 = new ol.format.GeoJSON();
var features_GeburtsbriefefrPersonengruppen_1 = format_GeburtsbriefefrPersonengruppen_1.readFeatures(json_GeburtsbriefefrPersonengruppen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeburtsbriefefrPersonengruppen_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeburtsbriefefrPersonengruppen_1.addFeatures(features_GeburtsbriefefrPersonengruppen_1);
var lyr_GeburtsbriefefrPersonengruppen_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GeburtsbriefefrPersonengruppen_1, 
                style: style_GeburtsbriefefrPersonengruppen_1,
                interactive: true,
                title: '<img src="styles/legend/GeburtsbriefefrPersonengruppen_1.png" /> Geburtsbriefe für Personengruppen'
            });
var format_GeburtsbriefefrMnner_2 = new ol.format.GeoJSON();
var features_GeburtsbriefefrMnner_2 = format_GeburtsbriefefrMnner_2.readFeatures(json_GeburtsbriefefrMnner_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeburtsbriefefrMnner_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeburtsbriefefrMnner_2.addFeatures(features_GeburtsbriefefrMnner_2);
var lyr_GeburtsbriefefrMnner_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GeburtsbriefefrMnner_2, 
                style: style_GeburtsbriefefrMnner_2,
                interactive: true,
                title: '<img src="styles/legend/GeburtsbriefefrMnner_2.png" /> Geburtsbriefe für Männer'
            });
var format_GeburtsbriefefrFrauen_3 = new ol.format.GeoJSON();
var features_GeburtsbriefefrFrauen_3 = format_GeburtsbriefefrFrauen_3.readFeatures(json_GeburtsbriefefrFrauen_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeburtsbriefefrFrauen_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeburtsbriefefrFrauen_3.addFeatures(features_GeburtsbriefefrFrauen_3);
var lyr_GeburtsbriefefrFrauen_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GeburtsbriefefrFrauen_3, 
                style: style_GeburtsbriefefrFrauen_3,
                interactive: true,
                title: '<img src="styles/legend/GeburtsbriefefrFrauen_3.png" /> Geburtsbriefe für Frauen'
            });
var format_FremdsprachigeGeburtsbriefe_4 = new ol.format.GeoJSON();
var features_FremdsprachigeGeburtsbriefe_4 = format_FremdsprachigeGeburtsbriefe_4.readFeatures(json_FremdsprachigeGeburtsbriefe_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FremdsprachigeGeburtsbriefe_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FremdsprachigeGeburtsbriefe_4.addFeatures(features_FremdsprachigeGeburtsbriefe_4);
var lyr_FremdsprachigeGeburtsbriefe_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FremdsprachigeGeburtsbriefe_4, 
                style: style_FremdsprachigeGeburtsbriefe_4,
                interactive: true,
                title: '<img src="styles/legend/FremdsprachigeGeburtsbriefe_4.png" /> Fremdsprachige Geburtsbriefe'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GeburtsbriefefrPersonengruppen_1.setVisible(true);lyr_GeburtsbriefefrMnner_2.setVisible(true);lyr_GeburtsbriefefrFrauen_3.setVisible(true);lyr_FremdsprachigeGeburtsbriefe_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GeburtsbriefefrPersonengruppen_1,lyr_GeburtsbriefefrMnner_2,lyr_GeburtsbriefefrFrauen_3,lyr_FremdsprachigeGeburtsbriefe_4];
lyr_GeburtsbriefefrPersonengruppen_1.set('fieldAliases', {'Archival record': 'Archival record', 'Title': 'Title', 'Gender': 'Gender', 'Language': 'Language', 'Issuer': 'Issuer', 'Date': 'Date', 'Place': 'Place', });
lyr_GeburtsbriefefrMnner_2.set('fieldAliases', {'Archival record': 'Archival record', 'Title': 'Title', 'Gender': 'Gender', 'Language': 'Language', 'Issuer': 'Issuer', 'Date': 'Date', 'Place': 'Place', 'FIELD10': 'FIELD10', 'FIELD11': 'FIELD11', 'FIELD12': 'FIELD12', });
lyr_GeburtsbriefefrFrauen_3.set('fieldAliases', {'Archival record': 'Archival record', 'Title': 'Title', 'Gender': 'Gender', 'Language': 'Language', 'Issuer': 'Issuer', 'Date': 'Date', 'Place': 'Place', });
lyr_FremdsprachigeGeburtsbriefe_4.set('fieldAliases', {'Archival record': 'Archival record', 'Title': 'Title', 'Gender': 'Gender', 'Language': 'Language', 'Issuer': 'Issuer', 'Date': 'Date', 'Place': 'Place', });
lyr_GeburtsbriefefrPersonengruppen_1.set('fieldImages', {'Archival record': '', 'Title': '', 'Gender': '', 'Language': '', 'Issuer': '', 'Date': '', 'Place': '', });
lyr_GeburtsbriefefrMnner_2.set('fieldImages', {'Archival record': 'TextEdit', 'Title': 'TextEdit', 'Gender': '', 'Language': 'TextEdit', 'Issuer': 'TextEdit', 'Date': 'TextEdit', 'Place': '', 'FIELD10': '', 'FIELD11': '', 'FIELD12': '', });
lyr_GeburtsbriefefrFrauen_3.set('fieldImages', {'Archival record': 'TextEdit', 'Title': 'TextEdit', 'Gender': '', 'Language': 'TextEdit', 'Issuer': 'TextEdit', 'Date': 'TextEdit', 'Place': '', });
lyr_FremdsprachigeGeburtsbriefe_4.set('fieldImages', {'Archival record': 'TextEdit', 'Title': 'TextEdit', 'Gender': '', 'Language': 'TextEdit', 'Issuer': 'TextEdit', 'Date': 'TextEdit', 'Place': '', });
lyr_GeburtsbriefefrPersonengruppen_1.set('fieldLabels', {'Archival record': 'no label', 'Title': 'inline label', 'Gender': 'inline label', 'Language': 'inline label', 'Issuer': 'inline label', 'Date': 'inline label', 'Place': 'inline label', });
lyr_GeburtsbriefefrMnner_2.set('fieldLabels', {'Archival record': 'no label', 'Title': 'inline label', 'Gender': 'inline label', 'Language': 'inline label', 'Issuer': 'inline label', 'Date': 'inline label', 'Place': 'inline label', 'FIELD10': 'no label', 'FIELD11': 'no label', 'FIELD12': 'no label', });
lyr_GeburtsbriefefrFrauen_3.set('fieldLabels', {'Archival record': 'no label', 'Title': 'inline label', 'Gender': 'inline label', 'Language': 'inline label', 'Issuer': 'inline label', 'Date': 'inline label', 'Place': 'inline label', });
lyr_FremdsprachigeGeburtsbriefe_4.set('fieldLabels', {'Archival record': 'no label', 'Title': 'inline label', 'Gender': 'inline label', 'Language': 'inline label', 'Issuer': 'inline label', 'Date': 'inline label', 'Place': 'inline label', });
lyr_FremdsprachigeGeburtsbriefe_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});