// @ts-ignore
sap.ui.define(["voestalpine/sapui5Start/lib/BaseController","voestalpine/sapui5Start/lib/formatter"],
	/**
     * @param {typeof voestalpine.sapui5Start.lib.BaseController} BaseController
     */
	function (BaseController,formatter) {
		"use strict";

		return BaseController.extend("voestalpine.sapui5Start.modules.start", {
			formatter: formatter,
			
			onInit: function () {
			    this.getRouter().getRoute("start").attachPatternMatched(this.getInitialData(), this);
            },
            
            getInitialData: function(){
                this.getData("ProdOrderSet").then(
                    (oData) => this.onDataReceived(oData));
            },
            
            // events
            
            onDataReceived: function(oData){
                this.getView().setModel(this.makeModel(oData.results));
                
                console.log("Received data",oData.results);
            },
            
            onRowSelect: function(oEvent){
                var rowContext  = oEvent.getParameter("rowContext");
                var sPath       = rowContext.sPath;
                var sOrder      = rowContext.oModel.getProperty(sPath).OrderID;
                
                this.getRouter().navTo("detail",{id: sOrder});
            }
		});
	});