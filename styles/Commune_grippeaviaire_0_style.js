var size = 0;
var placement = 'point';
function categories_Commune_grippeaviaire_0(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Zone a risque particulier':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(217,90,111,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),fill: new ol.style.Fill({color: 'rgba(217,90,111,0.30196078431372547)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Hors zone':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(178,223,138,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(178,223,138,0.30196078431372547)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Commune_grippeaviaire_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Zonesarisq");
    var labelText = "";
    size = 0;
    var labelFont = "10.4px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Commune_grippeaviaire_0(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
