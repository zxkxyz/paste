# Paste #

A version of Paste is running using Heroku and Firebase right now at http://paste.0x7cf.com

## Lightweight gisting ##
Paste was designed to be a lightweight code sharing service. Simply drag and drop a file into the built in text editor or start typing code. Syntax highlighting is automatically applied on a per language basis once the code is saved. The best part? It uses free platforms and libraries. Just fork it and you'll have your own lightweight Gist up and running in minutes.

## Get Started ##
In addition to working with standard web servers, Paste was designed to work with deployment/prototyping services so that (if you wish) you don't even need hosting to get this working.
### Requirements ###
 - [Heroku](https://www.heroku.com/home) account (free tier will do)
 - Free/development [Firebase](https://www.firebase.com/) database
 - A CNAME record on your domain if you really want a custom domain

### Installation ###
#### Heroku/Firebase version ####
- Make a new application on Heroku
- Make a new free database on Firebase
- Add a config var called `FIREBASE_URL` to your Config Vars for that app as such:
![alt text](https://i.imgur.com/feacN7T.png)
- Fork [this repo](https://github.com/zakarhino/paste) then clone it to your computer
- Follow the instructions to push your local fork of Paste to your heroku app
- Optionally, follow the heroku instructions to add a CNAME record from a custom domain that points to your Heroku Paste app.
- You're done! It's as simple as that!

Pushing to Heroku automatically builds/downloads the dependencies for you so there's nothing else involved. You will not have the same site fonts as I do because I'm importing a TypeKit. You can simply edit this code in case you want to import your own TypeKit. But don't worry, the CSS will default to matching system fonts in case TypeKit fails.

#### Custom/Firebase version ####
If you'd like to run the application outside of Heroku you'll still need a Firebase database. If you plan on doing this, make sure you edit the _config.example.js_ file with your Firebase DB details and then rename the file to _config.js_.

## That's it ##
#### Libraries: ####
[CodeMirror](https://codemirror.net)
[highlightjs](https://highlightjs.org/)
[jQuery](https://jquery.com/)
[sweetAlert](https://t4t5.github.io/sweetalert/)