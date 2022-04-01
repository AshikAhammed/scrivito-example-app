import * as React from "react";
import * as Scrivito from "scrivito";
import { kebabCase } from "lodash-es";
import "./CouponWidget.scss";

Scrivito.provideComponent("CouponWidget", ({ widget }) => {
  const style = widget.get("style");
  const bgColor = widget.get("bgColor");
  const couponConfig = Scrivito.Obj.getByPermalink("couponConfig");
  const classNames = ["coupon-widget", style];

  if (bgColor) {
    classNames.push(`bg-${bgColor}`);
  }

  return (
    <Scrivito.InPlaceEditingOff>
      <div
        className={classNames.join("")}
        id={kebabCase(widget.get("coupon-widget"))}
      >
        <div className="card-body pb-0">
          <Scrivito.ContentTag
            content={couponConfig}
            attribute="couponCode"
            className="h4 mb-0 strong"
          />

          <Scrivito.ContentTag
            content={couponConfig}
            attribute="message"
            className="mt-0 strong"
          />
        </div>
      </div>
    </Scrivito.InPlaceEditingOff>
  );
});
