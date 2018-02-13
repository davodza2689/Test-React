var $ = require('jquery');
var str = require('./constant');

var App = function() {
    $('body').html(str);
};
var app = new App();
app.get = function() {};
