# The Old Reader JS Library v.0.0.1
_https://github.com/GaiusSensei/TOR.js_

This is a JS Library that simplifies connections to https://github.com/krasnoukhov/theoldreader-api

### How to use:

1. Reference `tor.js` (or `tor.min.js`)
2. Login to The Old Reader via `TOR.init(YourAppName, UsersEmail, UsersPassword)`. You can attach a callback function as an extra parameter after the User's Password, which will be called whether the login is successful or not.
3. After successfully logging in, you may use any of the methods below.

### Reference

#### Initialization Methods
##### TOR.init
* Implemented on v.0.0.1; This method would attempt to log in to The Old Reader.
* **TOR.init**([string] YourAppName, [string] UsersEmail, [string] UsersPassword, [function] Callback);
* Response: Callback([bool] LogInSuccessful); 

#### Generic Methods
##### TOR.getToken
* Implemented on v.0.0.1; This method would return the user's authentication token.
* **TOR.getToken**([function] Callback);
* Response: Callback([JSONObject] response); 

##### TOR.getUserInfo
* Implemented on v.0.0.1; This method would return the user's information.
* **TOR.getToken**([function] Callback);
* Response: Callback([JSONObject] response); 

##### TOR.getPreferenceList
* Implemented on v.0.0.1; This method would return the user's list of preferences.
* **TOR.getToken**([function] Callback);
* Response: Callback([JSONObject] response); 

##### TOR.getFriendList
* Implemented on v.0.0.1; This method would return the user's list of friends.
* **TOR.getToken**([function] Callback);
* Response: Callback([JSONObject] response); 

#### Folders
* Not yet implemented

#### Subscriptions
* Not yet implemented

#### Items
* Not yet implemented

### F.A.Q.

*Q*: It's throwing an `Origin http://something.com is not allowed by Access-Control-Allow-Origin.` error.

*A*: As per the [Issue#1](https://github.com/krasnoukhov/theoldreader-api/issues/1), The Old Reader API does not support cross domain requests. In order to use this library, you must ask Sir Krasnoukhov (https://github.com/krasnoukhov/theoldreader-api) to whitelist your domain.

*Q*: Something's wrong/There's a bug/Can you add a feature?

*A*: File an issue at https://github.com/GaiusSensei/TOR.js :)