Package.describe({
    name: 'deanx:twilio-meteor',
    summary: "Twilio API Wrapper for Meteor",
    version: '1.0.0',
    git: 'https://github.com/deanx/twilio-meteor.git'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0');
    api.addFiles('deanx:twilio-meteor.js', 'server');
    api.export('Twilio', 'server');
});

Package.onTest(function(api) {
    api.use('tinytest');
    api.use('deanx:twilio-meteor');
    api.addFiles('deanx:twilio-meteor-server-tests.js', 'server');
});

Npm.depends({ "twilio": "3.7.0" });