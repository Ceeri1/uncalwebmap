ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([928331.830099, 551602.595840, 929032.342676, 552174.141381]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_unicalperimeterunical_perimeterkmz_1 = new ol.format.GeoJSON();
var features_unicalperimeterunical_perimeterkmz_1 = format_unicalperimeterunical_perimeterkmz_1.readFeatures(json_unicalperimeterunical_perimeterkmz_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_unicalperimeterunical_perimeterkmz_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_unicalperimeterunical_perimeterkmz_1.addFeatures(features_unicalperimeterunical_perimeterkmz_1);
var lyr_unicalperimeterunical_perimeterkmz_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_unicalperimeterunical_perimeterkmz_1, 
                style: style_unicalperimeterunical_perimeterkmz_1,
                popuplayertitle: 'unical perimeter — unical_perimeterkmz',
                interactive: false,
                title: '<img src="styles/legend/unicalperimeterunical_perimeterkmz_1.png" /> unical perimeter — unical_perimeterkmz'
            });
var format_Clipped_2 = new ol.format.GeoJSON();
var features_Clipped_2 = format_Clipped_2.readFeatures(json_Clipped_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_2.addFeatures(features_Clipped_2);
var lyr_Clipped_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_2, 
                style: style_Clipped_2,
                popuplayertitle: 'Clipped',
                interactive: true,
                title: '<img src="styles/legend/Clipped_2.png" /> Clipped'
            });
var format_Clipped_3 = new ol.format.GeoJSON();
var features_Clipped_3 = format_Clipped_3.readFeatures(json_Clipped_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_3.addFeatures(features_Clipped_3);
var lyr_Clipped_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_3, 
                style: style_Clipped_3,
                popuplayertitle: 'Clipped',
                interactive: true,
                title: '<img src="styles/legend/Clipped_3.png" /> Clipped'
            });
var format_Facilities_4 = new ol.format.GeoJSON();
var features_Facilities_4 = format_Facilities_4.readFeatures(json_Facilities_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Facilities_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Facilities_4.addFeatures(features_Facilities_4);
cluster_Facilities_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Facilities_4
});
var lyr_Facilities_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Facilities_4, 
                style: style_Facilities_4,
                popuplayertitle: 'Facilities',
                interactive: true,
    title: 'Facilities<br />\
    <img src="styles/legend/Facilities_4_0.png" /> Academic<br />\
    <img src="styles/legend/Facilities_4_1.png" /> Acadmeic<br />\
    <img src="styles/legend/Facilities_4_2.png" /> Admin<br />\
    <img src="styles/legend/Facilities_4_3.png" /> Bank<br />\
    <img src="styles/legend/Facilities_4_4.png" /> Health<br />\
    <img src="styles/legend/Facilities_4_5.png" /> Hostel<br />\
    <img src="styles/legend/Facilities_4_6.png" /> Others<br />\
    <img src="styles/legend/Facilities_4_7.png" /> Recreation<br />\
    <img src="styles/legend/Facilities_4_8.png" /> Security<br />\
    <img src="styles/legend/Facilities_4_9.png" /> Transport<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_unicalperimeterunical_perimeterkmz_1.setVisible(true);lyr_Clipped_2.setVisible(true);lyr_Clipped_3.setVisible(true);lyr_Facilities_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_unicalperimeterunical_perimeterkmz_1,lyr_Clipped_2,lyr_Clipped_3,lyr_Facilities_4];
lyr_unicalperimeterunical_perimeterkmz_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Clipped_2.set('fieldAliases', {'id': 'id', 'area_in_meters': 'area_in_meters', 'confidence': 'confidence', 'full_plus_code': 'full_plus_code', 'longitude_latitude': 'longitude_latitude', });
lyr_Clipped_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_Facilities_4.set('fieldAliases', {'SN': 'SN', 'EAST': 'EAST', 'NORTH': 'NORTH', 'HEIGHT': 'HEIGHT', 'Condition': 'Condition', 'Host_facul': 'Host_facul', 'Catergory': 'Catergory', });
lyr_unicalperimeterunical_perimeterkmz_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Clipped_2.set('fieldImages', {'id': 'TextEdit', 'area_in_meters': 'TextEdit', 'confidence': 'TextEdit', 'full_plus_code': 'TextEdit', 'longitude_latitude': 'JsonEdit', });
lyr_Clipped_3.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_Facilities_4.set('fieldImages', {'SN': 'TextEdit', 'EAST': 'TextEdit', 'NORTH': 'TextEdit', 'HEIGHT': 'TextEdit', 'Condition': 'TextEdit', 'Host_facul': 'TextEdit', 'Catergory': 'TextEdit', });
lyr_unicalperimeterunical_perimeterkmz_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Clipped_2.set('fieldLabels', {'id': 'no label', 'area_in_meters': 'no label', 'confidence': 'no label', 'full_plus_code': 'no label', 'longitude_latitude': 'no label', });
lyr_Clipped_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_Facilities_4.set('fieldLabels', {'SN': 'inline label - always visible', 'EAST': 'no label', 'NORTH': 'no label', 'HEIGHT': 'no label', 'Condition': 'inline label - always visible', 'Host_facul': 'inline label - always visible', 'Catergory': 'inline label - always visible', });
lyr_Facilities_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});