import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("OverlayImageWidget", ({ widget }) => {
  const alignment = widget.get("alignment") || "topRight";

  const width = parseInt(widget.get("width" || "25"));

  const offset = parseInt(widget.get("offset" || "0"));
  const offsetPercent = `${offset}%`;

  const corners = {
    topRight: { top: offsetPercent, right: offsetPercent },
    topLeft: { top: offsetPercent, left: offsetPercent },
    bottomRight: { bottom: offsetPercent, right: offsetPercent },
    bottomLeft: { bottom: offsetPercent, left: offsetPercent },
  };

  const style = corners[alignment];
  style.maxHeight = `${100 - offset}%`;
  style.maxWidth = `${width}%`;
  style.borderRadius = `${widget.get("borderRadius") || "0"}%`;
  style.borderWidth = `${0.1 * width - 0.5}px`;
  style.borderColor = "white";
  style.borderStyle = "solid";

  return (
    <div className="position-relative mb-3">
     
        <Scrivito.ImageTag
          content={widget}
          attribute="image"
          className="img-fluid mb-0"
        />

        <Scrivito.ImageTag
          content={widget}
          attribute="overlayImage"
          className="position-absolute mb-0"
          style={style}
        />
    </div>
  );
});
