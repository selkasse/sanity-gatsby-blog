import React from "react";
import Figure from "./Figure";

const serializers = {
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
    code: ({ node }) => <code>{node.code}</code>,
  },
};

export default serializers;
