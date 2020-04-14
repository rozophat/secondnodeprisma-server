"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Author",
    embedded: false
  },
  {
    name: "Book",
    embedded: false
  },
  {
    name: "Book1",
    embedded: false
  },
  {
    name: "Lead",
    embedded: false
  },
  {
    name: "SequelizeMeta",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
