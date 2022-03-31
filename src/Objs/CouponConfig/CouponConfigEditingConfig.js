import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("CouponConfig", {
    hideInSelectionDialogs: true,
    initialContent: {
        couponCode: "BOOKS150FF",
        message: "Get 15% off on all books today!"
    }
})