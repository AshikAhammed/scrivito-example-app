import * as Scrivito from "scrivito";

Scrivito.provideWidgetClass("PaginatedListWidget", {
  attributes: {
    itemsCountPerPage: "integer",
    pageRangeDisplayed: "integer",
  },
});
