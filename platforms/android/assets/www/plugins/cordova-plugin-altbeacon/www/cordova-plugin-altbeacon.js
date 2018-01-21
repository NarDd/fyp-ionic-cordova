cordova.define("cordova-plugin-altbeacon.ble", function(require, exports, module) {
var exec = require('cordova/exec');

var pluginName = "cordova-plugin-altbeacon";

exports.enabled = function(success, error) {
    exec(success, error, pluginName, "enabled", []);
};

exports.start = function(secret, success, error) {
    exec(success, error, pluginName, "start", [secret]);
};

exports.stop = function(success, error) {
    exec(success, error, pluginName, "stop", []);
};

});
