import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("ListItemWidget", ({ widget }) => {
  return (
    <Scrivito.WidgetTag
      tag="li"
      className={widget.get("cssClass") || "list-group-item"}
    >
      <Scrivito.ContentTag content={widget} attribute="content" />
    </Scrivito.WidgetTag>
  );
});
