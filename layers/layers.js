var wms_layers = [];

var format_PARROQUIAS_ECUADOR_1_0 = new ol.format.GeoJSON();
var features_PARROQUIAS_ECUADOR_1_0 = format_PARROQUIAS_ECUADOR_1_0.readFeatures(json_PARROQUIAS_ECUADOR_1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARROQUIAS_ECUADOR_1_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARROQUIAS_ECUADOR_1_0.addFeatures(features_PARROQUIAS_ECUADOR_1_0);
var lyr_PARROQUIAS_ECUADOR_1_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PARROQUIAS_ECUADOR_1_0, 
                style: style_PARROQUIAS_ECUADOR_1_0,
                interactive: false,
                title: '<img src="styles/legend/PARROQUIAS_ECUADOR_1_0.png" /> PARROQUIAS_ECUADOR_1'
            });
var format_CANTONES_ECUADOR_1 = new ol.format.GeoJSON();
var features_CANTONES_ECUADOR_1 = format_CANTONES_ECUADOR_1.readFeatures(json_CANTONES_ECUADOR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CANTONES_ECUADOR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CANTONES_ECUADOR_1.addFeatures(features_CANTONES_ECUADOR_1);
var lyr_CANTONES_ECUADOR_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CANTONES_ECUADOR_1, 
                style: style_CANTONES_ECUADOR_1,
                interactive: false,
                title: '<img src="styles/legend/CANTONES_ECUADOR_1.png" /> CANTONES_ECUADOR'
            });
var format_PROVINCIAS_ECUADOR_2 = new ol.format.GeoJSON();
var features_PROVINCIAS_ECUADOR_2 = format_PROVINCIAS_ECUADOR_2.readFeatures(json_PROVINCIAS_ECUADOR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROVINCIAS_ECUADOR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROVINCIAS_ECUADOR_2.addFeatures(features_PROVINCIAS_ECUADOR_2);
var lyr_PROVINCIAS_ECUADOR_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PROVINCIAS_ECUADOR_2, 
                style: style_PROVINCIAS_ECUADOR_2,
                interactive: false,
                title: '<img src="styles/legend/PROVINCIAS_ECUADOR_2.png" /> PROVINCIAS_ECUADOR'
            });
var format_RedVial_MTOP_2011_3 = new ol.format.GeoJSON();
var features_RedVial_MTOP_2011_3 = format_RedVial_MTOP_2011_3.readFeatures(json_RedVial_MTOP_2011_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedVial_MTOP_2011_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedVial_MTOP_2011_3.addFeatures(features_RedVial_MTOP_2011_3);
var lyr_RedVial_MTOP_2011_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RedVial_MTOP_2011_3, 
                style: style_RedVial_MTOP_2011_3,
                interactive: false,
                title: '<img src="styles/legend/RedVial_MTOP_2011_3.png" /> RedVial_MTOP_2011'
            });
var format_BCIUDECU_4 = new ol.format.GeoJSON();
var features_BCIUDECU_4 = format_BCIUDECU_4.readFeatures(json_BCIUDECU_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BCIUDECU_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BCIUDECU_4.addFeatures(features_BCIUDECU_4);
var lyr_BCIUDECU_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BCIUDECU_4, 
                style: style_BCIUDECU_4,
                interactive: false,
                title: '<img src="styles/legend/BCIUDECU_4.png" /> BCIUDECU'
            });

lyr_PARROQUIAS_ECUADOR_1_0.setVisible(true);lyr_CANTONES_ECUADOR_1.setVisible(true);lyr_PROVINCIAS_ECUADOR_2.setVisible(true);lyr_RedVial_MTOP_2011_3.setVisible(true);lyr_BCIUDECU_4.setVisible(true);
var layersList = [lyr_PARROQUIAS_ECUADOR_1_0,lyr_CANTONES_ECUADOR_1,lyr_PROVINCIAS_ECUADOR_2,lyr_RedVial_MTOP_2011_3,lyr_BCIUDECU_4];
lyr_PARROQUIAS_ECUADOR_1_0.set('fieldAliases', {'DPA_PARROQ': 'DPA_PARROQ', 'DPA_DESPAR': 'DPA_DESPAR', 'DPA_ANIO': 'DPA_ANIO', 'DPA_CANTON': 'DPA_CANTON', 'DPA_PROVIN': 'DPA_PROVIN', 'DPA_DESPRO': 'DPA_DESPRO', 'DPA_DESCAN': 'DPA_DESCAN', 'REGIONAL': 'REGIONAL', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'DPA_ANIO_1': 'DPA_ANIO_1', 'REGIONAL_1': 'REGIONAL_1', 'ID_SISDAT': 'ID_SISDAT', 'Area_de_Co': 'Area_de_Co', 'Provincia': 'Provincia', 'IdCanton': 'IdCanton', 'Canton': 'Canton', 'IdParroqui': 'IdParroqui', 'Parroquia': 'Parroquia', 'RedEmpresa': 'RedEmpresa', 'PanelSolar': 'PanelSolar', 'Generadord': 'Generadord', 'OtraFuente': 'OtraFuente', 'NoTieneLuz': 'NoTieneLuz', 'TotalVivie': 'TotalVivie', 'NSAFuente': 'NSAFuente', 'ReddelaEmp': 'ReddelaEmp', 'DelaRedyDe': 'DelaRedyDe', 'DelaRedySi': 'DelaRedySi', 'NSAMedidor': 'NSAMedidor', 'pORCENTAJE': 'pORCENTAJE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_CANTONES_ECUADOR_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DPA_ANIO': 'DPA_ANIO', 'REGIONAL': 'REGIONAL', 'ID_SISDAT': 'ID_SISDAT', 'Área_de_Co': 'Área_de_Co', 'IdProvinci': 'IdProvinci', 'Provincia': 'Provincia', 'Región': 'Región', 'IdCanton': 'IdCanton', 'Canton': 'Canton', 'Tipo_Area': 'Tipo_Area', 'Red_de_emp': 'Red_de_emp', 'Panel_Sola': 'Panel_Sola', 'Generador_': 'Generador_', 'Otra_Fuent': 'Otra_Fuent', 'No_tiene_L': 'No_tiene_L', 'Total_Vivi': 'Total_Vivi', 'NSAFuente': 'NSAFuente', 'Red_de_la_': 'Red_de_la_', 'uso_común_': 'uso_común_', 'sin_medido': 'sin_medido', 'NSAMedidor': 'NSAMedidor', 'Suma_de__': 'Suma_de__', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PROVINCIAS_ECUADOR_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DPA_ANIO': 'DPA_ANIO', 'REGIONAL': 'REGIONAL', 'ID_SISDAT': 'ID_SISDAT', 'Área_de_Co': 'Área_de_Co', 'IdProvinci': 'IdProvinci', 'Provincia': 'Provincia', 'Región': 'Región', 'Tipo_Area': 'Tipo_Area', 'Red_de_emp': 'Red_de_emp', 'Panel_Sola': 'Panel_Sola', 'Generador_': 'Generador_', 'Otra_Fuent': 'Otra_Fuent', 'No_tiene_L': 'No_tiene_L', 'Total_Vivi': 'Total_Vivi', 'NSAFuente': 'NSAFuente', 'Red_de_la_': 'Red_de_la_', 'uso_común_': 'uso_común_', 'sin_medido': 'sin_medido', 'NSAMedidor': 'NSAMedidor', 'Suma_de__': 'Suma_de__', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RedVial_MTOP_2011_3.set('fieldAliases', {'TIPO': 'TIPO', 'CLASE': 'CLASE', 'PROVINCIA': 'PROVINCIA', 'EST_042011': 'EST_042011', 'Shape_Leng': 'Shape_Leng', });
lyr_BCIUDECU_4.set('fieldAliases', {'ID': 'ID', 'Ciud_Codig': 'Ciud_Codig', 'Ciud_Nombr': 'Ciud_Nombr', 'Ciud_Jeraq': 'Ciud_Jeraq', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PARROQUIAS_ECUADOR_1_0.set('fieldImages', {'DPA_PARROQ': 'TextEdit', 'DPA_DESPAR': 'TextEdit', 'DPA_ANIO': 'TextEdit', 'DPA_CANTON': 'TextEdit', 'DPA_PROVIN': 'TextEdit', 'DPA_DESPRO': 'TextEdit', 'DPA_DESCAN': 'TextEdit', 'REGIONAL': 'TextEdit', 'OBJECTID_2': 'Range', 'OBJECTID': 'TextEdit', 'DPA_ANIO_1': 'TextEdit', 'REGIONAL_1': 'TextEdit', 'ID_SISDAT': 'TextEdit', 'Area_de_Co': 'TextEdit', 'Provincia': 'TextEdit', 'IdCanton': 'TextEdit', 'Canton': 'TextEdit', 'IdParroqui': 'TextEdit', 'Parroquia': 'TextEdit', 'RedEmpresa': 'TextEdit', 'PanelSolar': 'TextEdit', 'Generadord': 'TextEdit', 'OtraFuente': 'TextEdit', 'NoTieneLuz': 'TextEdit', 'TotalVivie': 'TextEdit', 'NSAFuente': 'TextEdit', 'ReddelaEmp': 'TextEdit', 'DelaRedyDe': 'TextEdit', 'DelaRedySi': 'TextEdit', 'NSAMedidor': 'TextEdit', 'pORCENTAJE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CANTONES_ECUADOR_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'DPA_ANIO': 'TextEdit', 'REGIONAL': 'TextEdit', 'ID_SISDAT': 'TextEdit', 'Área_de_Co': 'TextEdit', 'IdProvinci': 'TextEdit', 'Provincia': 'TextEdit', 'Región': 'TextEdit', 'IdCanton': 'TextEdit', 'Canton': 'TextEdit', 'Tipo_Area': 'TextEdit', 'Red_de_emp': 'TextEdit', 'Panel_Sola': 'TextEdit', 'Generador_': 'TextEdit', 'Otra_Fuent': 'TextEdit', 'No_tiene_L': 'TextEdit', 'Total_Vivi': 'TextEdit', 'NSAFuente': 'TextEdit', 'Red_de_la_': 'TextEdit', 'uso_común_': 'TextEdit', 'sin_medido': 'TextEdit', 'NSAMedidor': 'TextEdit', 'Suma_de__': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PROVINCIAS_ECUADOR_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'DPA_ANIO': 'TextEdit', 'REGIONAL': 'TextEdit', 'ID_SISDAT': 'TextEdit', 'Área_de_Co': 'TextEdit', 'IdProvinci': 'TextEdit', 'Provincia': 'TextEdit', 'Región': 'TextEdit', 'Tipo_Area': 'TextEdit', 'Red_de_emp': 'TextEdit', 'Panel_Sola': 'TextEdit', 'Generador_': 'TextEdit', 'Otra_Fuent': 'TextEdit', 'No_tiene_L': 'TextEdit', 'Total_Vivi': 'TextEdit', 'NSAFuente': 'TextEdit', 'Red_de_la_': 'TextEdit', 'uso_común_': 'TextEdit', 'sin_medido': 'TextEdit', 'NSAMedidor': 'TextEdit', 'Suma_de__': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RedVial_MTOP_2011_3.set('fieldImages', {'TIPO': 'TextEdit', 'CLASE': 'TextEdit', 'PROVINCIA': 'TextEdit', 'EST_042011': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_BCIUDECU_4.set('fieldImages', {'ID': 'TextEdit', 'Ciud_Codig': 'TextEdit', 'Ciud_Nombr': 'TextEdit', 'Ciud_Jeraq': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PARROQUIAS_ECUADOR_1_0.set('fieldLabels', {'DPA_PARROQ': 'no label', 'DPA_DESPAR': 'no label', 'DPA_ANIO': 'no label', 'DPA_CANTON': 'no label', 'DPA_PROVIN': 'no label', 'DPA_DESPRO': 'no label', 'DPA_DESCAN': 'no label', 'REGIONAL': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'DPA_ANIO_1': 'no label', 'REGIONAL_1': 'no label', 'ID_SISDAT': 'no label', 'Area_de_Co': 'no label', 'Provincia': 'no label', 'IdCanton': 'no label', 'Canton': 'no label', 'IdParroqui': 'no label', 'Parroquia': 'no label', 'RedEmpresa': 'no label', 'PanelSolar': 'no label', 'Generadord': 'no label', 'OtraFuente': 'no label', 'NoTieneLuz': 'no label', 'TotalVivie': 'no label', 'NSAFuente': 'no label', 'ReddelaEmp': 'no label', 'DelaRedyDe': 'no label', 'DelaRedySi': 'no label', 'NSAMedidor': 'no label', 'pORCENTAJE': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_CANTONES_ECUADOR_1.set('fieldLabels', {'OBJECTID': 'no label', 'DPA_ANIO': 'no label', 'REGIONAL': 'no label', 'ID_SISDAT': 'no label', 'Área_de_Co': 'no label', 'IdProvinci': 'no label', 'Provincia': 'no label', 'Región': 'no label', 'IdCanton': 'no label', 'Canton': 'no label', 'Tipo_Area': 'no label', 'Red_de_emp': 'no label', 'Panel_Sola': 'no label', 'Generador_': 'no label', 'Otra_Fuent': 'no label', 'No_tiene_L': 'no label', 'Total_Vivi': 'no label', 'NSAFuente': 'no label', 'Red_de_la_': 'no label', 'uso_común_': 'no label', 'sin_medido': 'no label', 'NSAMedidor': 'no label', 'Suma_de__': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_PROVINCIAS_ECUADOR_2.set('fieldLabels', {'OBJECTID': 'no label', 'DPA_ANIO': 'no label', 'REGIONAL': 'no label', 'ID_SISDAT': 'no label', 'Área_de_Co': 'no label', 'IdProvinci': 'no label', 'Provincia': 'no label', 'Región': 'no label', 'Tipo_Area': 'no label', 'Red_de_emp': 'no label', 'Panel_Sola': 'no label', 'Generador_': 'no label', 'Otra_Fuent': 'no label', 'No_tiene_L': 'no label', 'Total_Vivi': 'no label', 'NSAFuente': 'no label', 'Red_de_la_': 'no label', 'uso_común_': 'no label', 'sin_medido': 'no label', 'NSAMedidor': 'no label', 'Suma_de__': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_RedVial_MTOP_2011_3.set('fieldLabels', {'TIPO': 'no label', 'CLASE': 'no label', 'PROVINCIA': 'no label', 'EST_042011': 'no label', 'Shape_Leng': 'no label', });
lyr_BCIUDECU_4.set('fieldLabels', {'ID': 'no label', 'Ciud_Codig': 'no label', 'Ciud_Nombr': 'no label', 'Ciud_Jeraq': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_BCIUDECU_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});