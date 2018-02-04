var exec = require('cordova/exec');

var pluginName = "cordova-plugin-altbeacon-marking";

exports.enabled = function(success, error) {
    exec(success, error, pluginName, "enabled", []);
};

exports.start = function(secret,major,minor , success, error) {
    exec(success, error, pluginName, "start", [secret, major, minor]);
};

exports.stop = function(success, error) {
    exec(success, error, pluginName, "stop", []);
};
