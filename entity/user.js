const { attributes } = require('structure');

const User = attributes({
  id: Number,
  firstName: String,
  lastName : String,
  nick: String
});
