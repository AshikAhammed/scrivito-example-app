import * as Scrivito from "scrivito";

const AnchorNavigationWidget = Scrivito.provideWidgetClass(
  "AnchorNavigationWidget",
  {
    attributes: {
      style: ["enum", { values: ["h1", "h2", "h3"] }],
      small: "boolean",
      bold: "boolean",
      bullets: "boolean",
    },
  }
);

export default AnchorNavigationWidget;
