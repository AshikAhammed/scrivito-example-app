import * as Scrivito from "scrivito";

Scrivito.provideWidgetClass("ChildNavigationWidget", {
  attributes: {
    parentPage: "reference",
    navTitle: "string",
  },
});
                        