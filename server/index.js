const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const { typeDefs } = require("./graphql/typeDefs");
const { resolvers } = require("./graphql/resolvers");

const app = express();

app.use(cors());

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log(
      "server online at ",
      `http://localhost:4000${server.graphqlPath}`
    );
  });
};
startServer();
