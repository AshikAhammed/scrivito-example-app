import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("CouponWidget", {
  title: "Coupon",
  attributes: {
    bgColor: {
      title: "Background color",
      description: "The background color of the coupon container",
    },
  },

  properties: ["bgColor"],
  initialContent: {
    bgColor: "",
  },
});
