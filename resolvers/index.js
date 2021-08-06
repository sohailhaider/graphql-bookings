const QueryResolvers = require("./query-resolvers");
const dateScalar = require("./scalar-resolvers/Date");

module.exports = {
  Query: QueryResolvers,
  Date: dateScalar
};
