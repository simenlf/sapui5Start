// @ts-ignore
sap.ui.define(["voestalpine/sapui5Start/lib/BaseController","voestalpine/sapui5Start/lib/formatter"],
	/**
     * @param {typeof voestalpine.sapui5Start.lib.BaseController} BaseController
     */
	function (BaseController,formatter) {
		"use strict";

		return BaseController.extend("voestalpine.sapui5Start.modules.detail", {
			formatter: formatter,
			
			onInit: function () {
			    this.getRouter().getRoute("detail").attachPatternMatched(this.startDetail, this);
            },
            
            startDetail: function(oEvent) {
                var sId = oEvent.getParameter("arguments").id;
                
                if (!sId){
                    this.getRouter().navTo("start"); 
                } else {
                     this.getData(
                         "ProdOrderSet",
                         { filter: "OrderID eq '" + sId + "'", expand: "ProdOrderToProdOrderItem"}
                         ).then((oData) => this.onDataReceived(oData));
                }
            },
            
            onDataReceived: function(oData){
                this.getView().setModel(this.makeModel(oData.results[0]));
                console.log("Received data detail page",oData.results[0]);
            }
		});
	});