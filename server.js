'use strict';
const express     = require('express');
const bcrypt      = require('bcrypt');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
fccTesting(app);
const saltRounds  = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.

bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    /*Store hash in your db*/
    try {
        console.log({hashed : hash})
        bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
            /*res == true or false*/
                console.log(res)
          });
    } catch (err) {
        console.error(err)
    }
  });

//END_ASYNC

//START_SYNC
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
var result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log({nMetho : hash})
console.log(result)



//END_SYNC






























app.listen(process.env.PORT || 3000, () => {
    console.log('$>> here on port 3k =>')
});
