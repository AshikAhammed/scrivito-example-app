import * as Scrivito from "scrivito";
import faqIcon from "../../assets/images/faq.png";

Scrivito.provideEditingConfig("FaqWidget", {
  title: "FaqWidget",
  thumbnail: faqIcon,
  // description: "A frequently asked question.",

  attributes: {
    backgroundColor: {
      title: "Background color",
    },
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
