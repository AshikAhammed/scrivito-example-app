import * as Scrivito from "scrivito";

const FaqWidget = Scrivito.provideWidgetClass("FaqWidget", {
  attributes: {
    questions: "string",
    answer: "html",
  },

  extractTextAttributes: ["questions", "answer"],
});

export default FaqWidget;
