/**
 * @fileoverview
 * Provides interactions for all pages in the UI.
 *
 * @author 
 */

/** namespace. */
var rh = rh || {};
rh.appname = rh.appname || {};
/** globals */
rh.appname.variableName = "";

rh.appname.functionName = function () {
	/** function body */
};

rh.appname.ClassName = function () {
	/** constructor */
};

rh.appname.ClassName.prototype.methodName = function (argsIfNeeded) {
	/** class method */
};

rh.appname.sharedInit = function () {
    return; // Remove this line once you are doing Firebase auth

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("Signed in with Firebase uid", user.uid);
            if ($('#name-of-page').length) {
                rh.appname.nameOfPageInit();
            }
        } else {
            console.log("No user is signed in.");
        }

        // Potential redirects
        if (user && $('#login-page').length) {
            window.location.href = "/nameOfPage.html"; // Move on to the next page.
        }
        if (!user && $('#login-page').length == 0) {
            window.location.href = "/"; // Redirect to have them login
        }
    });
};

// Login Page
rh.appname.loginPageInit = function () {
    console.log("Set on click for Rosefire button");
    $("#rosefire-button").click(function () {
        console.log("Rosefire login");

        return; // Remove this line once you have a REGISTRY_TOKEN


        const REGISTRY_TOKEN = "GetYourOwnRegistryToken"
        Rosefire.signIn(REGISTRY_TOKEN, function (err, rfUser) {
            if (err) {
                console.log("Error with Rosefire! ", err); // User not logged in!
                return;
            }
            console.log("Signed in to Rosefire as", rfUser.name);
            firebase.auth().signInWithCustomToken(rfUser.token).then(function (authData) {
                console.log("Sign in to Firebase as", authData.user.uid); // User logged in successfully 
                // Note, the onAuthStateChanged will change the page.
            }, function (error) {
                console.log("Error with Firebase! ", error); // User not logged in!
            });
        });
    });
};


/* Main */
$(document).ready(function () {
    rh.appname.sharedInit();
    rh.appname.loginPageInit();
});
