import * as React from "react";
import * as Scrivito from "scrivito";
import { kebabCase } from "lodash-es";
import "./CouponWidget.scss";

Scrivito.provideComponent("CouponWidget", ({ widget }) => {
  const couponConfig = Scrivito.Obj.getByPermalink("couponConfig");


//   not working properly
//   const classNames = ["coupon-widget", style];
//   const style = widget.get("style") || "warning";
//   const bgColor = widget.get("bgColor");

  //   not working properly
  //   if (widget.get("alignment")) {
  //     classNames.push(`text-${widget.get("alignment")}`);
  //   }

  // not working properly
  //   if (bgColor) {
  //     classNames.push(`bg-${bgColor}`);
  //   }

  return (
    <Scrivito.InPlaceEditingOff>
      {/* <span
        className="coupon-widget--card"
        id={kebabCase(widget.get("coupon-widget"))}
      >
      </span> */}

      <div className="card text-center bg-warning">
        <div className="card-body pb-0">
          <Scrivito.ContentTag
            content={couponConfig}
            attribute="couponCode"
            className="h3 mb-0 strong"
          />

          <Scrivito.ContentTag
            content={couponConfig}
            attribute="message"
            className="h4 mt-0 strong color-white"
          />
        </div>
      </div>
    </Scrivito.InPlaceEditingOff>
  );
});
