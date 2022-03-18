import * as Scrivito from "scrivito";

const FaqWidget = Scrivito.provideWidgetClass("FaqWidget", {
  attributes: {
    content: "widgetlist",
    showPadding: "boolean",
    question: "string",
    answer: "html",

  },

  extractTextAttributes: ["content", "question", "answer"],
});

export default FaqWidget;
