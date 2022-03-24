import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("ChildNavigationWidget", ({ widget }) => {
  let parentPage = widget.get("parentPage");

  if (!parentPage) {
    parentPage = widget.obj();
  }

  return (
      
    <div className="childNav">
      <Scrivito.ContentTag
        tag="h4"
        className="title"
        content={widget}
        attribute="navTitle"
      />

      <ParentLink page={parentPage} 
      
      
      />

      <Scrivito.ChildListTag
        tag="url"
        className="page-list"
        parent={parentPage}
        renderChild={renderChild}
      />

      
    </div>
    
  );
  const ParentLink = Scrivito.connect((props) => {
    let target = props.page;
    if (!target || !target.parent()) {
      return null;
    }

    if (target.id() === Scrivito.currentPage().id()) {
      target = target.parent();
    }

    return (
      <div className="parent">
        <Scrivito.LinkTag to={target}>{target.get("title")}</Scrivito.LinkTag>
      </div>
    );
  });

});
