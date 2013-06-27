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
                if (data) {
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