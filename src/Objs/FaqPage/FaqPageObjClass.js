import * as Scrivito from "scrivito";
import metadataAttributes from "../_metadataAttributes";
import defaultPageAttributes from "../_defaultPageAttributes";

const FaqPage = Scrivito.provideObjClass("FaqPage", {
  attributes: {
    ...defaultPageAttributes,
    question:[ "widgetlist", {only: 'FaqWidget'}],
    ...metadataAttributes,
  },
  extractTextAttributes: ["navigationSection", "question"],
});

export default FaqPage;
