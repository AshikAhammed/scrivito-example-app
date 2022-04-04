import * as Scrivito from "scrivito";

Scrivito.provideWidgetClass("DisclosureWidget", {
  attributes: {
    heading: "string",
    body: "widgetlist",
    labelHidden: "string",
    labelDisclosed: "string",
  },
});
