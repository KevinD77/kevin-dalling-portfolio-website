/* Name: Kevin Dalling
   ID#: 301247589
   Date: February 19, 2023
*/

let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    first_name: String,
    last_name: String,
    telephone: String,
    email: String

},
{
    collection: "contact"
});

module.exports = mongoose.model('Contact',contactModel )