import * as Scrivito from "scrivito";

const PageTitleWidget = Scrivito.provideWidgetClass("PageTitleWidget", {
  attributes: {
    headline: "string",
  },
  extractTextAttributes: ["headline"],
});

export default PageTitleWidget;
