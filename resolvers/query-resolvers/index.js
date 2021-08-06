const hello = require("./hello");
const bookings = require("./booking");
module.exports = {
  ...hello,
  ...bookings
};
