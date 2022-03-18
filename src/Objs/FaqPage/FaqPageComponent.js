import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("FaqPage", ({ page }) => {
  <div className="container">
    <h1 className="text-center">FQA</h1>
    <Scrivito.ContentTag  content={page} attribute="questions" />
  </div>;
});
