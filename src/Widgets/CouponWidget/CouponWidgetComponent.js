import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("CouponWidget", ({ widget }) => {
  const couponConfig = Scrivito.Obj.getByPermalink("couponConfig");

  return (
    <Scrivito.InPlaceEditingOff>
      <div className="card text-center bg-warning">
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
