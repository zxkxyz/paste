// In order to store data, you'll need a firebase database running. This file is for using the database when running locally.
// If you're running Paste on Heroku, use a Heroku environment variable instead.
var FIREBASE_URL = "https://YOUR_FIREBASE_DB.firebaseio.com/";

module.exports = {
  FIREBASE_URL: FIREBASE_URL
}

/*
*     *     *     *     *     *     *     *     *     *     *     *     *     *     *     *     *
RENAME THIS FILE TO config.js IF YOU END UP NEEDING TO USE IT FOR RUNNING PASTE OUTSIDE OF HEROKU
*     *     *     *     *     *     *     *     *     *     *     *     *     *     *     *     *
*/