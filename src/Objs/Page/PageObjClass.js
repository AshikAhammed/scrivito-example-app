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
          "fa-var-globe",
          "fa-var-user",
          "fa-var-paper-plane-o",
          "fa-var-cogs",
          "fa-var-star-o",
          "fa-var-heart-o",
        ],
      },
    ],
  },
  extractTextAttributes: ["navigationSection", "body"],
});

export default Page;
