import * as Scrivito from "scrivito";

const CouponConfig= Scrivito.provideObjClass("CouponConfig", {
  attributes: {
    couponCode: "string",
    message: "html",
  },
});

export default CouponConfig;