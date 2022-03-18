import * as Scrivito from "scrivito";
import faqIcon from "../../assets/images/favicon.png";

Scrivito.provideEditingConfig("FaqWidget", {
  title: "FaqWidget",
  thumbnail: faqIcon,
  // description: "A frequently asked question.",

  attributes: {
    question: {
      title: "Question",
      description: "State the frequently asked question",
    },
    answer: {
      title: "Answer",
      description: "Provide an eloquent answer",
    },
  },

  properties: ["question", "answer"],
});
