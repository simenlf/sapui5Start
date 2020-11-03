sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/odata/v2/ODataModel"
], function (Controller,ODataModel) {
	"use strict";
	
    var oModel = new ODataModel({
        serviceUrl: "/sap/opu/odata/sap/Z_TEST_EXP_SRV", json: true, useBatch: false});
        
	return Controller.extend("voestalpine.sapui5Start.lib.BaseController", {
	    
	    //handling data
		
		getData: function(sEndpoint,oParam,aFilters){
            if (oParam) {
				var urlParameters = {
					$expand: oParam.expand || "",
					$filter: oParam.filter || ""
				};			
            }
            
            if (sEndpoint.substr(0,1) !== "/"){
                sEndpoint = "/" + sEndpoint;
            }
            
            return new Promise((resolve, reject) => {
                oModel.read(sEndpoint, {
                    filters: aFilters,
                    urlParameters: urlParameters, 
                    success: (result) => {resolve(result); },
                    error: (err) => {reject(err); } 
                });	
            });
		},
		
		makeModel: function(oData){
		    return new sap.ui.model.json.JSONModel(oData);
		},
		
		// router
		
		getRouter: function() {
			return this.getOwnerComponent().getRouter();
		},
	});
});