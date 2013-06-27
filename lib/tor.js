/*
The Old Reader JS Library v.0.0.1
https://github.com/GaiusSensei/TOR.js
(c) 2013 by gaiussensei@gmail.com

This is a JS Library that simplifies connections to https://github.com/krasnoukhov/theoldreader-api

*/
(function (TOR, undefined) {
    // Public Properties
    TOR.ver = "0.0.1";
    TOR.client = "YourAppName";
    TOR.authToken = "";
    // Private Properties
    var AccountType = "HOSTED_OR_GOOGLE",
        Service = "reader";
    // Public Methods
    TOR.init = function initF(appName, email, password, callback) {
        TOR.client = trim(appName);
        var credentials = {
            client:TOR.client,
            accountType:AccountType,
            service:Service,
            Email:email,
            Passwd: password,
            output: "json"
        };
        TOR.get('accounts/ClientLogin', credentials, 
            function authF(data) {
                if (data.Auth) {
                    TOR.authToken = data.Auth;
                    callback(true);
                } else {
                    TOR.authToken = "";
                    callback(false);
                }
            });
    };
    TOR.isLoggedIn = function isLoggedInF() {
        return (TOR.authToken !== "");
    };
    // Private Methods
    var trim = function trimF(s) {
        return s.replace(/^\s+|\s+$/g, '');
    };
} (window.TOR = window.TOR || {}));
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
                        callback({ "status": this.statusText });
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
        TOR.ajax("GET", methodUrl, data, successCallback, hasNoHeader);
    };
    TOR.post = function postF(methodUrl, data, successCallback, hasNoHeader) {
        TOR.ajax("POST", methodUrl, data, successCallback, hasNoHeader);
    };
} (window.TOR = window.TOR || {}));
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