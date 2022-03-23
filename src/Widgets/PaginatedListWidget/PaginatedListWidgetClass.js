import * as Scrivito from "scrivito";

Scrivito.provideWidgetClass("PaginatedListWidget", {
  attributes: {
    itemCounterPerPage: "integer",
    pageRangeDisplayed: "integer",
  },
});
