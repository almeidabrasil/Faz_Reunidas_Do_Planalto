var wms_layers = [];


        var lyr_ESRISATELLITE_0 = new ol.layer.Tile({
            'title': 'ESRI SATELLITE',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_A1_Buriti_1 = new ol.format.GeoJSON();
var features_A1_Buriti_1 = format_A1_Buriti_1.readFeatures(json_A1_Buriti_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_A1_Buriti_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A1_Buriti_1.addFeatures(features_A1_Buriti_1);
var lyr_A1_Buriti_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_A1_Buriti_1, 
                style: style_A1_Buriti_1,
                popuplayertitle: "A1_Buriti",
                interactive: true,
                    title: '<img src="styles/legend/A1_Buriti_1.png" /> A1_Buriti'
                });
var format_AREA_Imvel_certificado_SNCI_Brasil_GO_2 = new ol.format.GeoJSON();
var features_AREA_Imvel_certificado_SNCI_Brasil_GO_2 = format_AREA_Imvel_certificado_SNCI_Brasil_GO_2.readFeatures(json_AREA_Imvel_certificado_SNCI_Brasil_GO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREA_Imvel_certificado_SNCI_Brasil_GO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_Imvel_certificado_SNCI_Brasil_GO_2.addFeatures(features_AREA_Imvel_certificado_SNCI_Brasil_GO_2);
var lyr_AREA_Imvel_certificado_SNCI_Brasil_GO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_Imvel_certificado_SNCI_Brasil_GO_2, 
                style: style_AREA_Imvel_certificado_SNCI_Brasil_GO_2,
                popuplayertitle: "AREA_Imóvel_certificado_SNCI_Brasil_GO",
                interactive: true,
                    title: '<img src="styles/legend/AREA_Imvel_certificado_SNCI_Brasil_GO_2.png" /> AREA_Imóvel_certificado_SNCI_Brasil_GO'
                });
var format_AREA_Sigef_Brasil_GO_3 = new ol.format.GeoJSON();
var features_AREA_Sigef_Brasil_GO_3 = format_AREA_Sigef_Brasil_GO_3.readFeatures(json_AREA_Sigef_Brasil_GO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREA_Sigef_Brasil_GO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_Sigef_Brasil_GO_3.addFeatures(features_AREA_Sigef_Brasil_GO_3);
var lyr_AREA_Sigef_Brasil_GO_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_Sigef_Brasil_GO_3, 
                style: style_AREA_Sigef_Brasil_GO_3,
                popuplayertitle: "AREA_Sigef_Brasil_GO",
                interactive: true,
                    title: '<img src="styles/legend/AREA_Sigef_Brasil_GO_3.png" /> AREA_Sigef_Brasil_GO'
                });
var format_Hidrografia_GO_4 = new ol.format.GeoJSON();
var features_Hidrografia_GO_4 = format_Hidrografia_GO_4.readFeatures(json_Hidrografia_GO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hidrografia_GO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hidrografia_GO_4.addFeatures(features_Hidrografia_GO_4);
var lyr_Hidrografia_GO_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hidrografia_GO_4, 
                style: style_Hidrografia_GO_4,
                popuplayertitle: "Hidrografia_GO",
                interactive: true,
                    title: '<img src="styles/legend/Hidrografia_GO_4.png" /> Hidrografia_GO'
                });
var format_ParqueNacional_GO_5 = new ol.format.GeoJSON();
var features_ParqueNacional_GO_5 = format_ParqueNacional_GO_5.readFeatures(json_ParqueNacional_GO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueNacional_GO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueNacional_GO_5.addFeatures(features_ParqueNacional_GO_5);
var lyr_ParqueNacional_GO_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueNacional_GO_5, 
                style: style_ParqueNacional_GO_5,
                popuplayertitle: "Parque Nacional_GO",
                interactive: true,
                    title: '<img src="styles/legend/ParqueNacional_GO_5.png" /> Parque Nacional_GO'
                });
var format_Faz_ReunidasDoPlanalto_6 = new ol.format.GeoJSON();
var features_Faz_ReunidasDoPlanalto_6 = format_Faz_ReunidasDoPlanalto_6.readFeatures(json_Faz_ReunidasDoPlanalto_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Faz_ReunidasDoPlanalto_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Faz_ReunidasDoPlanalto_6.addFeatures(features_Faz_ReunidasDoPlanalto_6);
var lyr_Faz_ReunidasDoPlanalto_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Faz_ReunidasDoPlanalto_6, 
                style: style_Faz_ReunidasDoPlanalto_6,
                popuplayertitle: "Faz_ReunidasDoPlanalto",
                interactive: true,
                    title: '<img src="styles/legend/Faz_ReunidasDoPlanalto_6.png" /> Faz_ReunidasDoPlanalto'
                });
var group_SaoJoaoAliana = new ol.layer.Group({
                                layers: [lyr_A1_Buriti_1,lyr_AREA_Imvel_certificado_SNCI_Brasil_GO_2,lyr_AREA_Sigef_Brasil_GO_3,lyr_Hidrografia_GO_4,lyr_ParqueNacional_GO_5,lyr_Faz_ReunidasDoPlanalto_6,],
                                fold: "open",
                                title: "SaoJoaoAliança"});
var group_SIGEF_GO = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "SIGEF_GO"});
var group_CARTAS_IBGE_Mosaico = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "CARTAS_IBGE_Mosaico"});
var group_RASTER = new ol.layer.Group({
                                layers: [lyr_ESRISATELLITE_0,],
                                fold: "open",
                                title: "RASTER"});
var group_Mapas_Historicos = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Mapas_Historicos"});
var group_Ponte_Alta = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Ponte_Alta"});

lyr_ESRISATELLITE_0.setVisible(true);lyr_A1_Buriti_1.setVisible(true);lyr_AREA_Imvel_certificado_SNCI_Brasil_GO_2.setVisible(true);lyr_AREA_Sigef_Brasil_GO_3.setVisible(true);lyr_Hidrografia_GO_4.setVisible(true);lyr_ParqueNacional_GO_5.setVisible(true);lyr_Faz_ReunidasDoPlanalto_6.setVisible(true);
var layersList = [group_RASTER,group_SaoJoaoAliana];
lyr_A1_Buriti_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudemo': 'altitudemo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'draworder': 'draworder', 'icon': 'icon', });
lyr_AREA_Imvel_certificado_SNCI_Brasil_GO_2.set('fieldAliases', {'fid': 'fid', 'num_proces': 'num_proces', 'sr': 'sr', 'num_certif': 'num_certif', 'data_certi': 'data_certi', 'qtd_area_p': 'qtd_area_p', 'cod_profis': 'cod_profis', 'cod_imovel': 'cod_imovel', 'nome_imove': 'nome_imove', 'uf_municip': 'uf_municip', });
lyr_AREA_Sigef_Brasil_GO_3.set('fieldAliases', {'fid': 'fid', 'parcela_co': 'parcela_co', 'rt': 'rt', 'art': 'art', 'situacao_i': 'situacao_i', 'codigo_imo': 'codigo_imo', 'data_submi': 'data_submi', 'data_aprov': 'data_aprov', 'status': 'status', 'nome_area': 'nome_area', 'registro_m': 'registro_m', 'registro_d': 'registro_d', 'municipio_': 'municipio_', 'uf_id': 'uf_id', 'Nome_Title': 'Nome_Title', });
lyr_Hidrografia_GO_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'geometriaa': 'geometriaa', 'tipotrecho': 'tipotrecho', 'navegavel': 'navegavel', 'larguramed': 'larguramed', 'regime': 'regime', 'encoberto': 'encoberto', });
lyr_ParqueNacional_GO_5.set('fieldAliases', {'fid': 'fid', 'Nome_UC': 'Nome_UC', 'Descricao': 'Descricao', 'Categoria': 'Categoria', 'Municipios': 'Municipios', 'Ato_Legal': 'Ato_Legal', 'Tipo': 'Tipo', 'Responsabi': 'Responsabi', 'Area_ha': 'Area_ha', });
lyr_Faz_ReunidasDoPlanalto_6.set('fieldAliases', {'fid': 'fid', 'num_proces': 'num_proces', 'sr': 'sr', 'num_certif': 'num_certif', 'data_certi': 'data_certi', 'qtd_area_p': 'qtd_area_p', 'cod_profis': 'cod_profis', 'cod_imovel': 'cod_imovel', 'nome_imove': 'nome_imove', 'uf_municip': 'uf_municip', });
lyr_A1_Buriti_1.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudemo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'draworder': 'TextEdit', 'icon': 'TextEdit', });
lyr_AREA_Imvel_certificado_SNCI_Brasil_GO_2.set('fieldImages', {'fid': '', 'num_proces': 'TextEdit', 'sr': 'TextEdit', 'num_certif': 'TextEdit', 'data_certi': 'DateTime', 'qtd_area_p': 'TextEdit', 'cod_profis': 'TextEdit', 'cod_imovel': 'TextEdit', 'nome_imove': 'TextEdit', 'uf_municip': 'TextEdit', });
lyr_AREA_Sigef_Brasil_GO_3.set('fieldImages', {'fid': 'TextEdit', 'parcela_co': 'TextEdit', 'rt': 'TextEdit', 'art': 'TextEdit', 'situacao_i': 'TextEdit', 'codigo_imo': 'TextEdit', 'data_submi': 'DateTime', 'data_aprov': 'DateTime', 'status': 'TextEdit', 'nome_area': 'TextEdit', 'registro_m': 'TextEdit', 'registro_d': 'DateTime', 'municipio_': 'Range', 'uf_id': 'Range', 'Nome_Title': 'TextEdit', });
lyr_Hidrografia_GO_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'nome': 'TextEdit', 'geometriaa': 'TextEdit', 'tipotrecho': 'TextEdit', 'navegavel': 'TextEdit', 'larguramed': 'TextEdit', 'regime': 'TextEdit', 'encoberto': 'TextEdit', });
lyr_ParqueNacional_GO_5.set('fieldImages', {'fid': '', 'Nome_UC': 'TextEdit', 'Descricao': 'TextEdit', 'Categoria': 'TextEdit', 'Municipios': 'TextEdit', 'Ato_Legal': 'TextEdit', 'Tipo': 'TextEdit', 'Responsabi': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_Faz_ReunidasDoPlanalto_6.set('fieldImages', {'fid': 'TextEdit', 'num_proces': 'TextEdit', 'sr': 'TextEdit', 'num_certif': 'TextEdit', 'data_certi': 'DateTime', 'qtd_area_p': 'TextEdit', 'cod_profis': 'TextEdit', 'cod_imovel': 'TextEdit', 'nome_imove': 'TextEdit', 'uf_municip': 'TextEdit', });
lyr_A1_Buriti_1.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudemo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'draworder': 'no label', 'icon': 'no label', });
lyr_AREA_Imvel_certificado_SNCI_Brasil_GO_2.set('fieldLabels', {'fid': 'no label', 'num_proces': 'no label', 'sr': 'no label', 'num_certif': 'no label', 'data_certi': 'no label', 'qtd_area_p': 'no label', 'cod_profis': 'no label', 'cod_imovel': 'no label', 'nome_imove': 'no label', 'uf_municip': 'no label', });
lyr_AREA_Sigef_Brasil_GO_3.set('fieldLabels', {'fid': 'no label', 'parcela_co': 'no label', 'rt': 'no label', 'art': 'no label', 'situacao_i': 'no label', 'codigo_imo': 'no label', 'data_submi': 'no label', 'data_aprov': 'no label', 'status': 'no label', 'nome_area': 'no label', 'registro_m': 'no label', 'registro_d': 'no label', 'municipio_': 'no label', 'uf_id': 'no label', 'Nome_Title': 'no label', });
lyr_Hidrografia_GO_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'nome': 'no label', 'geometriaa': 'no label', 'tipotrecho': 'no label', 'navegavel': 'no label', 'larguramed': 'no label', 'regime': 'no label', 'encoberto': 'no label', });
lyr_ParqueNacional_GO_5.set('fieldLabels', {'fid': 'no label', 'Nome_UC': 'no label', 'Descricao': 'no label', 'Categoria': 'no label', 'Municipios': 'no label', 'Ato_Legal': 'no label', 'Tipo': 'no label', 'Responsabi': 'no label', 'Area_ha': 'no label', });
lyr_Faz_ReunidasDoPlanalto_6.set('fieldLabels', {'fid': 'no label', 'num_proces': 'no label', 'sr': 'no label', 'num_certif': 'no label', 'data_certi': 'no label', 'qtd_area_p': 'no label', 'cod_profis': 'no label', 'cod_imovel': 'no label', 'nome_imove': 'no label', 'uf_municip': 'no label', });
lyr_Faz_ReunidasDoPlanalto_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});