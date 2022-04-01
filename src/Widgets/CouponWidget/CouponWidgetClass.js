import * as Scrivito from "scrivito";

const CouponWidget = Scrivito.provideWidgetClass("CouponWidget", {
  attributes: {
    bgColor: [
      "enum",
      { values: ["primary", "success", "danger", "info", "warning", "danger"] },
    ],
  },
});
export default CouponWidget;
