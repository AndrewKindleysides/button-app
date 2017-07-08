const PanicButton = require('./');
const panicButton = new PanicButton();
var request = require('request');

panicButton.on('pressed', () => {
  request.post({
        url: 'http://localhost:3000/play/everybody'
    });
});