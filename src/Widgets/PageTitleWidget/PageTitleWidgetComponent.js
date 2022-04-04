import * as React from "react";
import * as Scrivito from "scrivito";

import "./PageTitleWidget.scss";

Scrivito.provideComponent("PageTitleWidget", ({ widget }) => (
  <Scrivito.ContentTag
  tag="h1"
    className="strong text-capitalize page-title-widget"
    content={widget}
    attribute="pageTitle"
  />
));
