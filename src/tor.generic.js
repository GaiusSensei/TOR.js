/*
The Old Reader JS Library v.0.0.1
https://github.com/GaiusSensei/TOR.js
(c) 2013 by gaiussensei@gmail.com

This is a JS Library that simplifies connections to https://github.com/krasnoukhov/theoldreader-api

*/
(function (TOR, undefined) {
    // Private Properties
    var noAuthError = { error:"Error: Not Logged In." };
    // Public Methods
    TOR.getToken = function getTokenF(callback) {
        if (TOR.authToken === "") {
            callback(noAuthError);
        } else {
            TOR.get('token', null, callback);
        }
    };
    TOR.getUserInfo = function getUserinfoF(callback) {
        if (TOR.authToken === "") {
            callback(noAuthError);
        } else {
            TOR.get('user-info', { output:'json' }, callback);
        }
    };
    TOR.getPreferenceList = function getPreferenceListF(callback) {
        if (TOR.authToken === "") {
            callback(noAuthError);
        } else {
            TOR.get('preference/list', { output:'json' }, callback);
        }        
    };
    TOR.getFriendList = function getFriendListF(callback) {
        if (TOR.authToken === "") {
            callback(noAuthError);
        } else {
            TOR.get('friend/list', { output:'json' }, callback);
        }        
    };
} (window.TOR = window.TOR || {}));