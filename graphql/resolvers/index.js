const postsResolvers = require("./posts");
const usersResolvers = require("./users");

module.exports = {
  Query: {
      ...postsResolvers.Query
  },
  Mutation:{
      ...usersResolvers.Mutation,
      ...postsResolvers.Mutation, //add mutation everytime there is a new one
  }
};
