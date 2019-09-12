/*const mongoose = require('mongoose');
var areaCity = mangoose.City({
_id: mangoose.City.Types.ObjectID,
fromOne*/

const mongoose = require('mongoose');
const Flight = require('./models/travelSchema');
mongoose.connect('mongodb://128.0.15.66:885566/Travel', function
(err) {
if (err) {
console.log('Error, try again.');
throw err;
}
console.log('Yeah, You are connected');

let flight1 = new Flight({
_id: new mongoose.Types.ObjectId(),

fromCity: ‘MEL’,
to: ‘JNB’,
airline: ‘VA’,
cost: 2500
});

flight1.save(function (err) {
if (err) throw err;
console.log('Successful');
});
});