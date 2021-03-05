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
            }
            
            
		});
	});