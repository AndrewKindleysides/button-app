const PanicButton = require('./');
const panicButton = new PanicButton();
var request = require('request');

panicButton.on('pressed', () => {
  request.post({
        url: 'http://192.168.0.33:3000/play/everybody'
    });
});