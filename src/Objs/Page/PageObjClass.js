import * as Scrivito from "scrivito";
import metadataAttributes from "../_metadataAttributes";
import defaultPageAttributes from "../_defaultPageAttributes";

const Page = Scrivito.provideObjClass("Page", {
  attributes: {
    ...defaultPageAttributes,
    childOrder: "referencelist",
    ...metadataAttributes,
    menuIcon: [
      "enum",
      {
        values: [
          "fa-globe",
          "fa-user",
          "fa-paper-plane-o",
          "fa-cogs",
          "fa-star-o",
          "fa-heart-o",
        ],
      },
    ],
  },
  extractTextAttributes: ["navigationSection", "body"],
});

export default Page;
