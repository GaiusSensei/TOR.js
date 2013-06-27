/*
The Old Reader JS Library v.0.0.1
https://github.com/GaiusSensei/TOR.js
(c) 2013 by gaiussensei@gmail.com

This is a JS Library that simplifies connections to https://github.com/krasnoukhov/theoldreader-api

*/
(function (TOR, undefined) {
    // Private Properties    
    var apiUrl = "https://theoldreader.com/reader/api/0/",
        authHeaderKey = "Authorization",
        authHeaderVal = "GoogleLogin auth=";
    // Public Methods
    TOR.ajax = function ajaxF(httpMethod, methodUrl, data, callback, hasNoHeader) {
        var e = new XMLHttpRequest();
        e.open(httpMethod, apiUrl + methodUrl, true);
        e.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE) {
                if (this.status === '200') {
                    if (callback) {
                        callback(JSON.parse(this.responseText));
                    }
                } else {
                    if (callback) {
                        callback({ status: this.statusText });
                    }
                }
            }
        };
        e.setRequestHeader("Accept", "text/html,application/json;q=0.9,*/*;q=0.8");
        e.setRequestHeader("content-type", "application/json");
        if (!hasNoHeader) {
            e.setRequestHeader(authHeaderKey, authHeaderVal + TOR.authToken);
        }
        if (data) {
            e.send(JSON.stringify(data));
        } else {
            e.send();
        }
    };
    TOR.get = function getF(methodUrl, data, successCallback, hasNoHeader) {
        TOR.ajax("GET", methodUrl, data, hasNoHeader, successCallback);
    };
    TOR.post = function postF(methodUrl, data, successCallback, hasNoHeader) {
        TOR.ajax("POST", methodUrl, data, hasNoHeader, successCallback);
    };
} (window.TOR = window.TOR || {}));