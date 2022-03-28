import * as React from "react";
import * as Scrivito from "scrivito";
import { kebabCase } from "lodash-es";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";

Scrivito.provideComponent("AnchorNavigationWidget", ({ widget }) => {
  const style = widget.get("style") || "h2";
  const headlineWidgets = getHeadlineWidgets(widget.obj(), style);

  if (!headlineWidgets.length) {
    return (
      <InPlaceEditingPlaceholder>
        <span className="text-danger strong">
          This page doesn't contain any {style} headlines.
        </span>
      </InPlaceEditingPlaceholder>
    );
  }

  const classNames = ["text-left"];
  if (widget.get("small")) {
    classNames.push("small");
  }
  if (widget.get("bold")) {
    classNames.push("strong");
  }
  if (!widget.get("bullets")) {
    classNames.push("list-unstyled");
  }

  return (
    <ul className={classNames.join("")}>
      {headlineWidgets.map((widget) => {
        const headline = widget.get("headline");
        const href = `#${kebabCase(headline)}`;

        return (
          <li key={widget.id()}>
            <a href={href}>{headline} </a>
          </li>
        );
      })}
    </ul>
  );
});

function getHeadlineWidgets(content, style) {
  const headlineWidgets = [];

  const attrs = content.attributeDefinitions();
  for (const attrName in attrs) {
    if (attrs[attrName][0] === "widgetlist") {
      const widgetlist = content.get(attrName);
      widgetlist.forEach((w) => {
        if (w.objClass() === "HeadlineWidget") {
          if ((w.get("style") || "h2") === style) {
            headlineWidgets.push(w);
          } else {
            headlineWidgets.push(...getHeadlineWidgets(w, style));
          }
        }
      });
    }
  }
  return headlineWidgets;
}
