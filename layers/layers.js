ol.proj.get("IGNF:LAMB93").setExtent([503378.543161, 6674345.721943, 703423.674260, 6785331.351943]);
var wms_layers = [];
var format_Commune_grippeaviaire_0 = new ol.format.GeoJSON();
var features_Commune_grippeaviaire_0 = format_Commune_grippeaviaire_0.readFeatures(json_Commune_grippeaviaire_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:LAMB93'});
var jsonSource_Commune_grippeaviaire_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Commune_grippeaviaire_0.addFeatures(features_Commune_grippeaviaire_0);var lyr_Commune_grippeaviaire_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Commune_grippeaviaire_0, 
                style: style_Commune_grippeaviaire_0,
    title: 'Commune_grippeaviaire<br />\
    <img src="styles/legend/Commune_grippeaviaire_0_0.png" /> Zone a risque particulier<br />\
    <img src="styles/legend/Commune_grippeaviaire_0_1.png" /> Hors zone<br />'
        });var format_Dpartement_1 = new ol.format.GeoJSON();
var features_Dpartement_1 = format_Dpartement_1.readFeatures(json_Dpartement_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:LAMB93'});
var jsonSource_Dpartement_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Dpartement_1.addFeatures(features_Dpartement_1);var lyr_Dpartement_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dpartement_1, 
                style: style_Dpartement_1,
                title: '<img src="styles/legend/Dpartement_1.png" /> Dpartement'
            });var format_LGV_2 = new ol.format.GeoJSON();
var features_LGV_2 = format_LGV_2.readFeatures(json_LGV_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:LAMB93'});
var jsonSource_LGV_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LGV_2.addFeatures(features_LGV_2);var lyr_LGV_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LGV_2, 
                style: style_LGV_2,
                title: '<img src="styles/legend/LGV_2.png" /> LGV'
            });var format_Autoroute_3 = new ol.format.GeoJSON();
var features_Autoroute_3 = format_Autoroute_3.readFeatures(json_Autoroute_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:LAMB93'});
var jsonSource_Autoroute_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Autoroute_3.addFeatures(features_Autoroute_3);var lyr_Autoroute_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Autoroute_3, 
                style: style_Autoroute_3,
                title: '<img src="styles/legend/Autoroute_3.png" /> Autoroute'
            });var format_Coursdeau_4 = new ol.format.GeoJSON();
var features_Coursdeau_4 = format_Coursdeau_4.readFeatures(json_Coursdeau_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:LAMB93'});
var jsonSource_Coursdeau_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Coursdeau_4.addFeatures(features_Coursdeau_4);var lyr_Coursdeau_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Coursdeau_4, 
                style: style_Coursdeau_4,
                title: '<img src="styles/legend/Coursdeau_4.png" /> Cours d\'eau'
            });var format_Prfctureetsousprfecture_5 = new ol.format.GeoJSON();
var features_Prfctureetsousprfecture_5 = format_Prfctureetsousprfecture_5.readFeatures(json_Prfctureetsousprfecture_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:LAMB93'});
var jsonSource_Prfctureetsousprfecture_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Prfctureetsousprfecture_5.addFeatures(features_Prfctureetsousprfecture_5);var lyr_Prfctureetsousprfecture_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Prfctureetsousprfecture_5, 
                style: style_Prfctureetsousprfecture_5,
                title: '<img src="styles/legend/Prfctureetsousprfecture_5.png" /> Préfécture et sous-préfecture'
            });

lyr_Commune_grippeaviaire_0.setVisible(true);lyr_Dpartement_1.setVisible(true);lyr_LGV_2.setVisible(true);lyr_Autoroute_3.setVisible(true);lyr_Coursdeau_4.setVisible(true);lyr_Prfctureetsousprfecture_5.setVisible(true);
var layersList = [lyr_Commune_grippeaviaire_0,lyr_Dpartement_1,lyr_LGV_2,lyr_Autoroute_3,lyr_Coursdeau_4,lyr_Prfctureetsousprfecture_5];
lyr_Commune_grippeaviaire_0.set('fieldAliases', {'NOM': 'NOM', 'CODE_INSEE': 'CODE_INSEE', 'Zonesarisq': 'Zonesarisq', });
lyr_Dpartement_1.set('fieldAliases', {'ID_GEOFLA': 'ID_GEOFLA', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_CHF': 'CODE_CHF', 'NOM_CHF': 'NOM_CHF', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', 'SURF': 'SURF', 'orig_ogc_fid': 'orig_ogc_fid', });
lyr_LGV_2.set('fieldAliases', {'ID': 'ID', 'PREC_PLANI': 'PREC_PLANI', 'PREC_ALTI': 'PREC_ALTI', 'NATURE': 'NATURE', 'ELECTRIFIE': 'ELECTRIFIE', 'FRANCHISST': 'FRANCHISST', 'LARGEUR': 'LARGEUR', 'NB_VOIES': 'NB_VOIES', 'POS_SOL': 'POS_SOL', 'ETAT': 'ETAT', 'Z_INI': 'Z_INI', 'Z_FIN': 'Z_FIN', });
lyr_Autoroute_3.set('fieldAliases', {'ID': 'ID', 'PREC_PLANI': 'PREC_PLANI', 'PREC_ALTI': 'PREC_ALTI', 'NATURE': 'NATURE', 'NUMERO': 'NUMERO', 'NOM_VOIE_G': 'NOM_VOIE_G', 'NOM_VOIE_D': 'NOM_VOIE_D', 'IMPORTANCE': 'IMPORTANCE', 'CL_ADMIN': 'CL_ADMIN', 'GESTION': 'GESTION', 'MISE_SERV': 'MISE_SERV', 'IT_VERT': 'IT_VERT', 'IT_EUROP': 'IT_EUROP', 'FICTIF': 'FICTIF', 'FRANCHISST': 'FRANCHISST', 'LARGEUR': 'LARGEUR', 'NOM_ITI': 'NOM_ITI', 'NB_VOIES': 'NB_VOIES', 'POS_SOL': 'POS_SOL', 'SENS': 'SENS', 'ALIAS_G': 'ALIAS_G', 'ALIAS_D': 'ALIAS_D', 'INSEECOM_G': 'INSEECOM_G', 'INSEECOM_D': 'INSEECOM_D', 'CODEVOIE_G': 'CODEVOIE_G', 'CODEVOIE_D': 'CODEVOIE_D', 'CODEPOST_G': 'CODEPOST_G', 'CODEPOST_D': 'CODEPOST_D', 'TYP_ADRES': 'TYP_ADRES', 'BORNEDEB_G': 'BORNEDEB_G', 'BORNEDEB_D': 'BORNEDEB_D', 'BORNEFIN_G': 'BORNEFIN_G', 'BORNEFIN_D': 'BORNEFIN_D', 'ETAT': 'ETAT', 'Z_INI': 'Z_INI', 'Z_FIN': 'Z_FIN', });
lyr_Coursdeau_4.set('fieldAliases', {'ID': 'ID', 'PREC_PLANI': 'PREC_PLANI', 'PREC_ALTI': 'PREC_ALTI', 'ARTIF': 'ARTIF', 'FICTIF': 'FICTIF', 'FRANCHISST': 'FRANCHISST', 'NOM': 'NOM', 'POS_SOL': 'POS_SOL', 'REGIME': 'REGIME', 'Z_INI': 'Z_INI', 'Z_FIN': 'Z_FIN', });
lyr_Prfctureetsousprfecture_5.set('fieldAliases', {'ID': 'ID', 'ID_COM': 'ID_COM', 'ORIGIN_NOM': 'ORIGIN_NOM', 'NATURE': 'NATURE', 'NOM': 'NOM', 'IMPORTANCE': 'IMPORTANCE', 'NOM_CARTO': 'NOM_CARTO', });
lyr_Commune_grippeaviaire_0.set('fieldImages', {'NOM': 'TextEdit', 'CODE_INSEE': 'TextEdit', 'Zonesarisq': 'TextEdit', });
lyr_Dpartement_1.set('fieldImages', {'ID_GEOFLA': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_CHF': 'TextEdit', 'NOM_CHF': 'TextEdit', 'X_CHF_LIEU': 'TextEdit', 'Y_CHF_LIEU': 'TextEdit', 'X_CENTROID': 'TextEdit', 'Y_CENTROID': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', 'SURF': 'TextEdit', 'orig_ogc_fid': 'TextEdit', });
lyr_LGV_2.set('fieldImages', {'ID': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'NATURE': 'TextEdit', 'ELECTRIFIE': 'TextEdit', 'FRANCHISST': 'TextEdit', 'LARGEUR': 'TextEdit', 'NB_VOIES': 'TextEdit', 'POS_SOL': 'TextEdit', 'ETAT': 'TextEdit', 'Z_INI': 'TextEdit', 'Z_FIN': 'TextEdit', });
lyr_Autoroute_3.set('fieldImages', {'ID': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'NATURE': 'TextEdit', 'NUMERO': 'TextEdit', 'NOM_VOIE_G': 'TextEdit', 'NOM_VOIE_D': 'TextEdit', 'IMPORTANCE': 'TextEdit', 'CL_ADMIN': 'TextEdit', 'GESTION': 'TextEdit', 'MISE_SERV': 'TextEdit', 'IT_VERT': 'TextEdit', 'IT_EUROP': 'TextEdit', 'FICTIF': 'TextEdit', 'FRANCHISST': 'TextEdit', 'LARGEUR': 'TextEdit', 'NOM_ITI': 'TextEdit', 'NB_VOIES': 'TextEdit', 'POS_SOL': 'TextEdit', 'SENS': 'TextEdit', 'ALIAS_G': 'TextEdit', 'ALIAS_D': 'TextEdit', 'INSEECOM_G': 'TextEdit', 'INSEECOM_D': 'TextEdit', 'CODEVOIE_G': 'TextEdit', 'CODEVOIE_D': 'TextEdit', 'CODEPOST_G': 'TextEdit', 'CODEPOST_D': 'TextEdit', 'TYP_ADRES': 'TextEdit', 'BORNEDEB_G': 'TextEdit', 'BORNEDEB_D': 'TextEdit', 'BORNEFIN_G': 'TextEdit', 'BORNEFIN_D': 'TextEdit', 'ETAT': 'TextEdit', 'Z_INI': 'TextEdit', 'Z_FIN': 'TextEdit', });
lyr_Coursdeau_4.set('fieldImages', {'ID': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'ARTIF': 'TextEdit', 'FICTIF': 'TextEdit', 'FRANCHISST': 'TextEdit', 'NOM': 'TextEdit', 'POS_SOL': 'TextEdit', 'REGIME': 'TextEdit', 'Z_INI': 'TextEdit', 'Z_FIN': 'TextEdit', });
lyr_Prfctureetsousprfecture_5.set('fieldImages', {'ID': 'TextEdit', 'ID_COM': 'TextEdit', 'ORIGIN_NOM': 'TextEdit', 'NATURE': 'TextEdit', 'NOM': 'TextEdit', 'IMPORTANCE': 'TextEdit', 'NOM_CARTO': 'TextEdit', });
lyr_Commune_grippeaviaire_0.set('fieldLabels', {'NOM': 'header label', 'CODE_INSEE': 'header label', 'Zonesarisq': 'header label', });
lyr_Dpartement_1.set('fieldLabels', {'ID_GEOFLA': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_CHF': 'no label', 'NOM_CHF': 'no label', 'X_CHF_LIEU': 'no label', 'Y_CHF_LIEU': 'no label', 'X_CENTROID': 'no label', 'Y_CENTROID': 'no label', 'CODE_REG': 'no label', 'NOM_REG': 'no label', 'SURF': 'no label', 'orig_ogc_fid': 'no label', });
lyr_LGV_2.set('fieldLabels', {'ID': 'no label', 'PREC_PLANI': 'no label', 'PREC_ALTI': 'no label', 'NATURE': 'no label', 'ELECTRIFIE': 'no label', 'FRANCHISST': 'no label', 'LARGEUR': 'no label', 'NB_VOIES': 'no label', 'POS_SOL': 'no label', 'ETAT': 'no label', 'Z_INI': 'no label', 'Z_FIN': 'no label', });
lyr_Autoroute_3.set('fieldLabels', {'ID': 'no label', 'PREC_PLANI': 'no label', 'PREC_ALTI': 'no label', 'NATURE': 'no label', 'NUMERO': 'no label', 'NOM_VOIE_G': 'no label', 'NOM_VOIE_D': 'no label', 'IMPORTANCE': 'no label', 'CL_ADMIN': 'no label', 'GESTION': 'no label', 'MISE_SERV': 'no label', 'IT_VERT': 'no label', 'IT_EUROP': 'no label', 'FICTIF': 'no label', 'FRANCHISST': 'no label', 'LARGEUR': 'no label', 'NOM_ITI': 'no label', 'NB_VOIES': 'no label', 'POS_SOL': 'no label', 'SENS': 'no label', 'ALIAS_G': 'no label', 'ALIAS_D': 'no label', 'INSEECOM_G': 'no label', 'INSEECOM_D': 'no label', 'CODEVOIE_G': 'no label', 'CODEVOIE_D': 'no label', 'CODEPOST_G': 'no label', 'CODEPOST_D': 'no label', 'TYP_ADRES': 'no label', 'BORNEDEB_G': 'no label', 'BORNEDEB_D': 'no label', 'BORNEFIN_G': 'no label', 'BORNEFIN_D': 'no label', 'ETAT': 'no label', 'Z_INI': 'no label', 'Z_FIN': 'no label', });
lyr_Coursdeau_4.set('fieldLabels', {'ID': 'no label', 'PREC_PLANI': 'no label', 'PREC_ALTI': 'no label', 'ARTIF': 'no label', 'FICTIF': 'no label', 'FRANCHISST': 'no label', 'NOM': 'no label', 'POS_SOL': 'no label', 'REGIME': 'no label', 'Z_INI': 'no label', 'Z_FIN': 'no label', });
lyr_Prfctureetsousprfecture_5.set('fieldLabels', {'ID': 'no label', 'ID_COM': 'no label', 'ORIGIN_NOM': 'no label', 'NATURE': 'no label', 'NOM': 'no label', 'IMPORTANCE': 'no label', 'NOM_CARTO': 'no label', });
lyr_Prfctureetsousprfecture_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});