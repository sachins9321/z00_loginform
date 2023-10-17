sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("my.app.z01_loginform.controller.View1", {
		onInit: function () {

		},
		onLogon: function(){
			let val1 = this.getView().byId("i1").getValue();
			let val2 = this.getView().byId("i2").getValue();
			if(val1==="" || val2===""){
				sap.m.MessageToast.show("Please Enter all the value!");
			}else{
				this.getView().byId("t1").setText("Welcome! "+ val1);
				sap.m.MessageToast.show("You are in "+ val1 + " page");
			}
		},
		onReset:function(){
			this.getView().byId("i1").setValue("");
			this.getView().byId("i2").setValue("");
		}
	});
});