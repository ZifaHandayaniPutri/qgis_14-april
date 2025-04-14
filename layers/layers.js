var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Padangadm_1 = new ol.format.GeoJSON();
var features_Padangadm_1 = format_Padangadm_1.readFeatures(json_Padangadm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Padangadm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Padangadm_1.addFeatures(features_Padangadm_1);
var lyr_Padangadm_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Padangadm_1, 
                style: style_Padangadm_1,
                popuplayertitle: 'Padang adm',
                interactive: true,
    title: 'Padang adm<br />\
    <img src="styles/legend/Padangadm_1_0.png" /> 78591<br />\
    <img src="styles/legend/Padangadm_1_1.png" /> 292510<br />\
    <img src="styles/legend/Padangadm_1_2.png" /> 432630<br />\
    <img src="styles/legend/Padangadm_1_3.png" /> 555640<br />\
    <img src="styles/legend/Padangadm_1_4.png" /> 594500<br />\
    <img src="styles/legend/Padangadm_1_5.png" /> 616650<br />\
    <img src="styles/legend/Padangadm_1_6.png" /> 627580<br />\
    <img src="styles/legend/Padangadm_1_7.png" /> 638860<br />\
    <img src="styles/legend/Padangadm_1_8.png" /> 1304100<br />\
    <img src="styles/legend/Padangadm_1_9.png" /> 1554850<br />\
    <img src="styles/legend/Padangadm_1_10.png" /> 2138540<br />\
    <img src="styles/legend/Padangadm_1_11.png" /> <br />' });
var format_kel3titik16_2 = new ol.format.GeoJSON();
var features_kel3titik16_2 = format_kel3titik16_2.readFeatures(json_kel3titik16_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kel3titik16_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kel3titik16_2.addFeatures(features_kel3titik16_2);
var lyr_kel3titik16_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kel3titik16_2, 
                style: style_kel3titik16_2,
                popuplayertitle: 'kel 3 titik 16',
                interactive: true,
                title: '<img src="styles/legend/kel3titik16_2.png" /> kel 3 titik 16'
            });
var format_sungai_3 = new ol.format.GeoJSON();
var features_sungai_3 = format_sungai_3.readFeatures(json_sungai_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai_3.addFeatures(features_sungai_3);
var lyr_sungai_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungai_3, 
                style: style_sungai_3,
                popuplayertitle: 'sungai',
                interactive: true,
                title: '<img src="styles/legend/sungai_3.png" /> sungai'
            });
var format_200meter_4 = new ol.format.GeoJSON();
var features_200meter_4 = format_200meter_4.readFeatures(json_200meter_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_200meter_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_200meter_4.addFeatures(features_200meter_4);
var lyr_200meter_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_200meter_4, 
                style: style_200meter_4,
                popuplayertitle: '200 meter',
                interactive: true,
                title: '<img src="styles/legend/200meter_4.png" /> 200 meter'
            });
var format_200meter_5 = new ol.format.GeoJSON();
var features_200meter_5 = format_200meter_5.readFeatures(json_200meter_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_200meter_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_200meter_5.addFeatures(features_200meter_5);
var lyr_200meter_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_200meter_5, 
                style: style_200meter_5,
                popuplayertitle: '200 meter',
                interactive: true,
                title: '<img src="styles/legend/200meter_5.png" /> 200 meter'
            });
var format_Clipped_6 = new ol.format.GeoJSON();
var features_Clipped_6 = format_Clipped_6.readFeatures(json_Clipped_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_6.addFeatures(features_Clipped_6);
var lyr_Clipped_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_6, 
                style: style_Clipped_6,
                popuplayertitle: 'Clipped',
                interactive: true,
                title: '<img src="styles/legend/Clipped_6.png" /> Clipped'
            });
var format_clip16titik_7 = new ol.format.GeoJSON();
var features_clip16titik_7 = format_clip16titik_7.readFeatures(json_clip16titik_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip16titik_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip16titik_7.addFeatures(features_clip16titik_7);
var lyr_clip16titik_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip16titik_7, 
                style: style_clip16titik_7,
                popuplayertitle: 'clip 16 titik',
                interactive: true,
                title: '<img src="styles/legend/clip16titik_7.png" /> clip 16 titik'
            });
var format_ARENAOLAHRAGA_PT_50K_8 = new ol.format.GeoJSON();
var features_ARENAOLAHRAGA_PT_50K_8 = format_ARENAOLAHRAGA_PT_50K_8.readFeatures(json_ARENAOLAHRAGA_PT_50K_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARENAOLAHRAGA_PT_50K_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARENAOLAHRAGA_PT_50K_8.addFeatures(features_ARENAOLAHRAGA_PT_50K_8);
var lyr_ARENAOLAHRAGA_PT_50K_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARENAOLAHRAGA_PT_50K_8, 
                style: style_ARENAOLAHRAGA_PT_50K_8,
                popuplayertitle: 'ARENAOLAHRAGA_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/ARENAOLAHRAGA_PT_50K_8.png" /> ARENAOLAHRAGA_PT_50K'
            });
var format_SPBU_PT_50K_9 = new ol.format.GeoJSON();
var features_SPBU_PT_50K_9 = format_SPBU_PT_50K_9.readFeatures(json_SPBU_PT_50K_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPBU_PT_50K_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPBU_PT_50K_9.addFeatures(features_SPBU_PT_50K_9);
var lyr_SPBU_PT_50K_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPBU_PT_50K_9, 
                style: style_SPBU_PT_50K_9,
                popuplayertitle: 'SPBU_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/SPBU_PT_50K_9.png" /> SPBU_PT_50K'
            });
var format_KANTORPOS_PT_50K_10 = new ol.format.GeoJSON();
var features_KANTORPOS_PT_50K_10 = format_KANTORPOS_PT_50K_10.readFeatures(json_KANTORPOS_PT_50K_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KANTORPOS_PT_50K_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KANTORPOS_PT_50K_10.addFeatures(features_KANTORPOS_PT_50K_10);
var lyr_KANTORPOS_PT_50K_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KANTORPOS_PT_50K_10, 
                style: style_KANTORPOS_PT_50K_10,
                popuplayertitle: 'KANTORPOS_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/KANTORPOS_PT_50K_10.png" /> KANTORPOS_PT_50K'
            });
var format_TERMINALBUS_PT_50K_11 = new ol.format.GeoJSON();
var features_TERMINALBUS_PT_50K_11 = format_TERMINALBUS_PT_50K_11.readFeatures(json_TERMINALBUS_PT_50K_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TERMINALBUS_PT_50K_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TERMINALBUS_PT_50K_11.addFeatures(features_TERMINALBUS_PT_50K_11);
var lyr_TERMINALBUS_PT_50K_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TERMINALBUS_PT_50K_11, 
                style: style_TERMINALBUS_PT_50K_11,
                popuplayertitle: 'TERMINALBUS_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/TERMINALBUS_PT_50K_11.png" /> TERMINALBUS_PT_50K'
            });
var format_STASIUNKA_PT_50K_12 = new ol.format.GeoJSON();
var features_STASIUNKA_PT_50K_12 = format_STASIUNKA_PT_50K_12.readFeatures(json_STASIUNKA_PT_50K_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STASIUNKA_PT_50K_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STASIUNKA_PT_50K_12.addFeatures(features_STASIUNKA_PT_50K_12);
var lyr_STASIUNKA_PT_50K_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STASIUNKA_PT_50K_12, 
                style: style_STASIUNKA_PT_50K_12,
                popuplayertitle: 'STASIUNKA_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/STASIUNKA_PT_50K_12.png" /> STASIUNKA_PT_50K'
            });
var format_PELABUHAN_PT_50K_13 = new ol.format.GeoJSON();
var features_PELABUHAN_PT_50K_13 = format_PELABUHAN_PT_50K_13.readFeatures(json_PELABUHAN_PT_50K_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PELABUHAN_PT_50K_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PELABUHAN_PT_50K_13.addFeatures(features_PELABUHAN_PT_50K_13);
var lyr_PELABUHAN_PT_50K_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PELABUHAN_PT_50K_13, 
                style: style_PELABUHAN_PT_50K_13,
                popuplayertitle: 'PELABUHAN_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/PELABUHAN_PT_50K_13.png" /> PELABUHAN_PT_50K'
            });
var format_KESEHATAN_PT_50K_14 = new ol.format.GeoJSON();
var features_KESEHATAN_PT_50K_14 = format_KESEHATAN_PT_50K_14.readFeatures(json_KESEHATAN_PT_50K_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KESEHATAN_PT_50K_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KESEHATAN_PT_50K_14.addFeatures(features_KESEHATAN_PT_50K_14);
var lyr_KESEHATAN_PT_50K_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KESEHATAN_PT_50K_14, 
                style: style_KESEHATAN_PT_50K_14,
                popuplayertitle: 'KESEHATAN_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/KESEHATAN_PT_50K_14.png" /> KESEHATAN_PT_50K'
            });
var format_SARANAIBADAH_PT_50K_15 = new ol.format.GeoJSON();
var features_SARANAIBADAH_PT_50K_15 = format_SARANAIBADAH_PT_50K_15.readFeatures(json_SARANAIBADAH_PT_50K_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SARANAIBADAH_PT_50K_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SARANAIBADAH_PT_50K_15.addFeatures(features_SARANAIBADAH_PT_50K_15);
var lyr_SARANAIBADAH_PT_50K_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SARANAIBADAH_PT_50K_15, 
                style: style_SARANAIBADAH_PT_50K_15,
                popuplayertitle: 'SARANAIBADAH_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/SARANAIBADAH_PT_50K_15.png" /> SARANAIBADAH_PT_50K'
            });
var format_RUMAHSAKIT_PT_50K_16 = new ol.format.GeoJSON();
var features_RUMAHSAKIT_PT_50K_16 = format_RUMAHSAKIT_PT_50K_16.readFeatures(json_RUMAHSAKIT_PT_50K_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHSAKIT_PT_50K_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHSAKIT_PT_50K_16.addFeatures(features_RUMAHSAKIT_PT_50K_16);
var lyr_RUMAHSAKIT_PT_50K_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUMAHSAKIT_PT_50K_16, 
                style: style_RUMAHSAKIT_PT_50K_16,
                popuplayertitle: 'RUMAHSAKIT_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/RUMAHSAKIT_PT_50K_16.png" /> RUMAHSAKIT_PT_50K'
            });
var format_PUSKESMAS_PT_50K_17 = new ol.format.GeoJSON();
var features_PUSKESMAS_PT_50K_17 = format_PUSKESMAS_PT_50K_17.readFeatures(json_PUSKESMAS_PT_50K_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUSKESMAS_PT_50K_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUSKESMAS_PT_50K_17.addFeatures(features_PUSKESMAS_PT_50K_17);
var lyr_PUSKESMAS_PT_50K_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUSKESMAS_PT_50K_17, 
                style: style_PUSKESMAS_PT_50K_17,
                popuplayertitle: 'PUSKESMAS_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/PUSKESMAS_PT_50K_17.png" /> PUSKESMAS_PT_50K'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Padangadm_1.setVisible(true);lyr_kel3titik16_2.setVisible(true);lyr_sungai_3.setVisible(true);lyr_200meter_4.setVisible(true);lyr_200meter_5.setVisible(true);lyr_Clipped_6.setVisible(true);lyr_clip16titik_7.setVisible(true);lyr_ARENAOLAHRAGA_PT_50K_8.setVisible(true);lyr_SPBU_PT_50K_9.setVisible(true);lyr_KANTORPOS_PT_50K_10.setVisible(true);lyr_TERMINALBUS_PT_50K_11.setVisible(true);lyr_STASIUNKA_PT_50K_12.setVisible(true);lyr_PELABUHAN_PT_50K_13.setVisible(true);lyr_KESEHATAN_PT_50K_14.setVisible(true);lyr_SARANAIBADAH_PT_50K_15.setVisible(true);lyr_RUMAHSAKIT_PT_50K_16.setVisible(true);lyr_PUSKESMAS_PT_50K_17.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Padangadm_1,lyr_kel3titik16_2,lyr_sungai_3,lyr_200meter_4,lyr_200meter_5,lyr_Clipped_6,lyr_clip16titik_7,lyr_ARENAOLAHRAGA_PT_50K_8,lyr_SPBU_PT_50K_9,lyr_KANTORPOS_PT_50K_10,lyr_TERMINALBUS_PT_50K_11,lyr_STASIUNKA_PT_50K_12,lyr_PELABUHAN_PT_50K_13,lyr_KESEHATAN_PT_50K_14,lyr_SARANAIBADAH_PT_50K_15,lyr_RUMAHSAKIT_PT_50K_16,lyr_PUSKESMAS_PT_50K_17];
lyr_Padangadm_1.set('fieldAliases', {'Id': 'Id', 'kecamatan': 'kecamatan', 'jml penddk': 'jml penddk', });
lyr_kel3titik16_2.set('fieldAliases', {'name': 'name', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_sungai_3.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'fid': 'fid', 'objectid': 'objectid', 'namobj': 'namobj', 'fcode': 'fcode', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', 'adatgl': 'adatgl', 'dmax': 'dmax', 'fngair': 'fngair', 'jnssng': 'jnssng', 'klssng': 'klssng', 'ltksgi': 'ltksgi', 'namws': 'namws', 'status': 'status', 'ukrsgi': 'ukrsgi', 'wmax': 'wmax', 'dbtmxs': 'dbtmxs', 'namdas': 'namdas', 'shape_leng': 'shape_leng', });
lyr_200meter_4.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'fid': 'fid', 'objectid': 'objectid', 'namobj': 'namobj', 'fcode': 'fcode', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', 'adatgl': 'adatgl', 'dmax': 'dmax', 'fngair': 'fngair', 'jnssng': 'jnssng', 'klssng': 'klssng', 'ltksgi': 'ltksgi', 'namws': 'namws', 'status': 'status', 'ukrsgi': 'ukrsgi', 'wmax': 'wmax', 'dbtmxs': 'dbtmxs', 'namdas': 'namdas', 'shape_leng': 'shape_leng', });
lyr_200meter_5.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'fid': 'fid', 'objectid': 'objectid', 'namobj': 'namobj', 'fcode': 'fcode', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', 'adatgl': 'adatgl', 'dmax': 'dmax', 'fngair': 'fngair', 'jnssng': 'jnssng', 'klssng': 'klssng', 'ltksgi': 'ltksgi', 'namws': 'namws', 'status': 'status', 'ukrsgi': 'ukrsgi', 'wmax': 'wmax', 'dbtmxs': 'dbtmxs', 'namdas': 'namdas', 'shape_leng': 'shape_leng', });
lyr_Clipped_6.set('fieldAliases', {'name': 'name', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_clip16titik_7.set('fieldAliases', {'name': 'name', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_ARENAOLAHRAGA_PT_50K_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'ELEVAS': 'ELEVAS', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_SPBU_PT_50K_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KANTORPOS_PT_50K_10.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'JNKPOS': 'JNKPOS', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_TERMINALBUS_PT_50K_11.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'KODTRM': 'KODTRM', 'MGTTRM': 'MGTTRM', 'STATRM': 'STATRM', 'KATTRM': 'KATTRM', 'TIPTRM': 'TIPTRM', 'LUAS': 'LUAS', 'THBTRM': 'THBTRM', 'THOTRM': 'THOTRM', 'THSTRM': 'THSTRM', 'KONKON': 'KONKON', 'JLBTRM': 'JLBTRM', 'KEBTRM': 'KEBTRM', 'JLDTRM': 'JLDTRM', 'KEDTRM': 'KEDTRM', 'PARTRM': 'PARTRM', 'KEPTRM': 'KEPTRM', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_STASIUNKA_PT_50K_12.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSSTA': 'FGSSTA', 'KLSSTA': 'KLSSTA', 'FCODE': 'FCODE', 'KODKOD': 'KODKOD', 'WILSTA': 'WILSTA', 'DOPSTA': 'DOPSTA', 'KMTSTA': 'KMTSTA', 'LINSTA': 'LINSTA', 'KONKON': 'KONKON', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PELABUHAN_PT_50K_13.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'ADMPEL': 'ADMPEL', 'JNSPEL': 'JNSPEL', 'FGSPEL': 'FGSPEL', 'PJAPEL': 'PJAPEL', 'LAMPEL': 'LAMPEL', 'STUPEL': 'STUPEL', 'KONKON': 'KONKON', 'LUAS': 'LUAS', 'KMXPEL': 'KMXPEL', 'KMNPEL': 'KMNPEL', 'STPPEL': 'STPPEL', 'SRPPEL': 'SRPPEL', 'ALJPEL': 'ALJPEL', 'REMARK': 'REMARK', 'KLSPEL': 'KLSPEL', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KODPEL': 'KODPEL', });
lyr_KESEHATAN_PT_50K_14.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'REMARK': 'REMARK', 'TIPSHT': 'TIPSHT', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FSKADD': 'FSKADD', });
lyr_SARANAIBADAH_PT_50K_15.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FGSIBD': 'FGSIBD', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_RUMAHSAKIT_PT_50K_16.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', });
lyr_PUSKESMAS_PT_50K_17.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'SRS_ID': 'SRS_ID', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'KWKPKM_': 'KWKPKM_', 'KMPPKM_': 'KMPPKM_', 'JPLPKM_': 'JPLPKM_', 'PKMKODE_': 'PKMKODE_', 'PKMKAT_': 'PKMKAT_', 'PKMLMT_': 'PKMLMT_', });
lyr_Padangadm_1.set('fieldImages', {'Id': 'Range', 'kecamatan': 'TextEdit', 'jml penddk': 'Range', });
lyr_kel3titik16_2.set('fieldImages', {'name': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_sungai_3.set('fieldImages', {'ogc_fid': '', 'fid': '', 'objectid': '', 'namobj': '', 'fcode': '', 'remark': '', 'metadata': '', 'srs_id': '', 'adatgl': '', 'dmax': '', 'fngair': '', 'jnssng': '', 'klssng': '', 'ltksgi': '', 'namws': '', 'status': '', 'ukrsgi': '', 'wmax': '', 'dbtmxs': '', 'namdas': '', 'shape_leng': '', });
lyr_200meter_4.set('fieldImages', {'ogc_fid': '', 'fid': '', 'objectid': '', 'namobj': '', 'fcode': '', 'remark': '', 'metadata': '', 'srs_id': '', 'adatgl': '', 'dmax': '', 'fngair': '', 'jnssng': '', 'klssng': '', 'ltksgi': '', 'namws': '', 'status': '', 'ukrsgi': '', 'wmax': '', 'dbtmxs': '', 'namdas': '', 'shape_leng': '', });
lyr_200meter_5.set('fieldImages', {'ogc_fid': '', 'fid': '', 'objectid': '', 'namobj': '', 'fcode': '', 'remark': '', 'metadata': '', 'srs_id': '', 'adatgl': '', 'dmax': '', 'fngair': '', 'jnssng': '', 'klssng': '', 'ltksgi': '', 'namws': '', 'status': '', 'ukrsgi': '', 'wmax': '', 'dbtmxs': '', 'namdas': '', 'shape_leng': '', });
lyr_Clipped_6.set('fieldImages', {'name': '', 'Longitude': '', 'Latitude': '', });
lyr_clip16titik_7.set('fieldImages', {'name': '', 'Longitude': '', 'Latitude': '', });
lyr_ARENAOLAHRAGA_PT_50K_8.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'ELEVAS': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_SPBU_PT_50K_9.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_KANTORPOS_PT_50K_10.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'JNKPOS': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_TERMINALBUS_PT_50K_11.set('fieldImages', {'NAMOBJ': '', 'KODTRM': '', 'MGTTRM': '', 'STATRM': '', 'KATTRM': '', 'TIPTRM': '', 'LUAS': '', 'THBTRM': '', 'THOTRM': '', 'THSTRM': '', 'KONKON': '', 'JLBTRM': '', 'KEBTRM': '', 'JLDTRM': '', 'KEDTRM': '', 'PARTRM': '', 'KEPTRM': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_STASIUNKA_PT_50K_12.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FGSSTA': 'TextEdit', 'KLSSTA': 'TextEdit', 'FCODE': 'TextEdit', 'KODKOD': 'TextEdit', 'WILSTA': 'TextEdit', 'DOPSTA': 'TextEdit', 'KMTSTA': 'TextEdit', 'LINSTA': 'TextEdit', 'KONKON': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_PELABUHAN_PT_50K_13.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'ADMPEL': 'TextEdit', 'JNSPEL': 'TextEdit', 'FGSPEL': 'TextEdit', 'PJAPEL': 'TextEdit', 'LAMPEL': 'TextEdit', 'STUPEL': 'TextEdit', 'KONKON': 'TextEdit', 'LUAS': 'TextEdit', 'KMXPEL': 'TextEdit', 'KMNPEL': 'TextEdit', 'STPPEL': 'TextEdit', 'SRPPEL': 'TextEdit', 'ALJPEL': 'TextEdit', 'REMARK': 'TextEdit', 'KLSPEL': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KODPEL': 'TextEdit', });
lyr_KESEHATAN_PT_50K_14.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'REMARK': '', 'TIPSHT': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'FSKADD': '', });
lyr_SARANAIBADAH_PT_50K_15.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'FGSIBD': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_RUMAHSAKIT_PT_50K_16.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPRST': 'TextEdit', 'JPLYRS': 'TextEdit', 'ALAMAT': 'TextEdit', });
lyr_PUSKESMAS_PT_50K_17.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'SRS_ID': '', 'REMARK': '', 'METADATA': '', 'KWKPKM_': '', 'KMPPKM_': '', 'JPLPKM_': '', 'PKMKODE_': '', 'PKMKAT_': '', 'PKMLMT_': '', });
lyr_Padangadm_1.set('fieldLabels', {'Id': 'no label', 'kecamatan': 'no label', 'jml penddk': 'no label', });
lyr_kel3titik16_2.set('fieldLabels', {'name': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', });
lyr_sungai_3.set('fieldLabels', {'ogc_fid': 'no label', 'fid': 'no label', 'objectid': 'no label', 'namobj': 'no label', 'fcode': 'no label', 'remark': 'no label', 'metadata': 'no label', 'srs_id': 'no label', 'adatgl': 'no label', 'dmax': 'no label', 'fngair': 'no label', 'jnssng': 'no label', 'klssng': 'no label', 'ltksgi': 'no label', 'namws': 'no label', 'status': 'no label', 'ukrsgi': 'no label', 'wmax': 'no label', 'dbtmxs': 'no label', 'namdas': 'no label', 'shape_leng': 'no label', });
lyr_200meter_4.set('fieldLabels', {'ogc_fid': 'no label', 'fid': 'no label', 'objectid': 'no label', 'namobj': 'no label', 'fcode': 'no label', 'remark': 'no label', 'metadata': 'no label', 'srs_id': 'no label', 'adatgl': 'no label', 'dmax': 'no label', 'fngair': 'no label', 'jnssng': 'no label', 'klssng': 'no label', 'ltksgi': 'no label', 'namws': 'no label', 'status': 'no label', 'ukrsgi': 'no label', 'wmax': 'no label', 'dbtmxs': 'no label', 'namdas': 'no label', 'shape_leng': 'no label', });
lyr_200meter_5.set('fieldLabels', {'ogc_fid': 'no label', 'fid': 'no label', 'objectid': 'no label', 'namobj': 'no label', 'fcode': 'no label', 'remark': 'no label', 'metadata': 'no label', 'srs_id': 'no label', 'adatgl': 'no label', 'dmax': 'no label', 'fngair': 'no label', 'jnssng': 'no label', 'klssng': 'no label', 'ltksgi': 'no label', 'namws': 'no label', 'status': 'no label', 'ukrsgi': 'no label', 'wmax': 'no label', 'dbtmxs': 'no label', 'namdas': 'no label', 'shape_leng': 'no label', });
lyr_Clipped_6.set('fieldLabels', {'name': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', });
lyr_clip16titik_7.set('fieldLabels', {'name': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', });
lyr_ARENAOLAHRAGA_PT_50K_8.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'ELEVAS': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_SPBU_PT_50K_9.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KANTORPOS_PT_50K_10.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'JNKPOS': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_TERMINALBUS_PT_50K_11.set('fieldLabels', {'NAMOBJ': 'no label', 'KODTRM': 'no label', 'MGTTRM': 'no label', 'STATRM': 'no label', 'KATTRM': 'no label', 'TIPTRM': 'no label', 'LUAS': 'no label', 'THBTRM': 'no label', 'THOTRM': 'no label', 'THSTRM': 'no label', 'KONKON': 'no label', 'JLBTRM': 'no label', 'KEBTRM': 'no label', 'JLDTRM': 'no label', 'KEDTRM': 'no label', 'PARTRM': 'no label', 'KEPTRM': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_STASIUNKA_PT_50K_12.set('fieldLabels', {'NAMOBJ': 'no label', 'FGSSTA': 'no label', 'KLSSTA': 'no label', 'FCODE': 'no label', 'KODKOD': 'no label', 'WILSTA': 'no label', 'DOPSTA': 'no label', 'KMTSTA': 'no label', 'LINSTA': 'no label', 'KONKON': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PELABUHAN_PT_50K_13.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'ADMPEL': 'no label', 'JNSPEL': 'no label', 'FGSPEL': 'no label', 'PJAPEL': 'no label', 'LAMPEL': 'no label', 'STUPEL': 'no label', 'KONKON': 'no label', 'LUAS': 'no label', 'KMXPEL': 'no label', 'KMNPEL': 'no label', 'STPPEL': 'no label', 'SRPPEL': 'no label', 'ALJPEL': 'no label', 'REMARK': 'no label', 'KLSPEL': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KODPEL': 'no label', });
lyr_KESEHATAN_PT_50K_14.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'REMARK': 'no label', 'TIPSHT': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FSKADD': 'no label', });
lyr_SARANAIBADAH_PT_50K_15.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'FGSIBD': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_RUMAHSAKIT_PT_50K_16.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', });
lyr_PUSKESMAS_PT_50K_17.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'SRS_ID': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'KWKPKM_': 'no label', 'KMPPKM_': 'no label', 'JPLPKM_': 'no label', 'PKMKODE_': 'no label', 'PKMKAT_': 'no label', 'PKMLMT_': 'no label', });
lyr_PUSKESMAS_PT_50K_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});