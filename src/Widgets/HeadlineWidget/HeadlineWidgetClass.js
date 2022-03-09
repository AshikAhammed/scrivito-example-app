import * as Scrivito from "scrivito";

const HeadlineWidget = Scrivito.provideWidgetClass("HeadlineWidget", {
  attributes: {
    headline: "string",
    bgColor: ['enum', { values: ['primary', 'success', 'info', 'warning', 'danger']}],
    level: ["enum", { values: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    style: ["enum", { values: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    alignment: ["enum", { values: ["left", "center", "right"] }],
    showDividingLine: "boolean",
    showMargin: "boolean",

  },
  extractTextAttributes: ["headline"],
});

export default HeadlineWidget;
