import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("FaqWidget", ({ widget }) => {
  return (
    <div className="faq">
      <Scrivito.ContentTag tag="h3" content={widget} attribute="question" />

      <Scrivito.ContentTag content={widget} attribute="answer" />
    </div>
  );
});
