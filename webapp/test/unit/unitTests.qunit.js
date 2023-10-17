/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"my/app/z01_loginform/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});