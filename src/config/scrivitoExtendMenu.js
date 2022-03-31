import * as Scrivito from "scrivito";
import couponConfigDialogMenuIcon from "../assets/images/arrow_next.svg";

  
export function scrivitoExtendMenu(){

Scrivito.extendMenu((menu) => {
  menu.insert({
    id: "couponConfiguration",
    title: "Edit coupon configuration",
    icon: couponConfigDialogMenuIcon,
    onClick: () => Scrivito.openDialog("CouponConfigDialog"),
    position: { after: "system.openPageDetails" },
    group: "system.details",
  });
});
}
