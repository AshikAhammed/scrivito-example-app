import * as React from "react";
import * as Scrivito from "scrivito";

function CouponConfigDialog() {
  const couponConfig = Scrivito.Obj.getByPermalink("couponconfig");
  const attributes = { couponCode: "Coupon code", message: "Message" };

  return (
    <div className="container-fluid pt-4">
      {Object.keys(attributes).map((key) => {
        return (
          <div key={key} className="card mb-2">
            <div className="card-title strong ml-2 mr-2 mt-1">
              <span>{attributes[key]}</span>
            </div>
            <hr className="mt-0 mb-1" />
            <div className="pb-2">
              <Scrivito.ContentTag
                className="card-text ml-2 mr-2 mt-1"
                content={couponConfig}
                attribute={key}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

Scrivito.registerComponent("CouponConfigDialog", CouponConfigDialog);
