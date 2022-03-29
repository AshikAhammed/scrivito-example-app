import * as Scrivito from "scrivito";
import contactFormWidgetIcon from "../../assets/images/contact_form_widget.svg";
import TextWidget from "../TextWidget/TextWidgetClass";

Scrivito.provideEditingConfig("FileUploadWidget", {
  title: "FileUpload",
  thumbnail: contactFormWidgetIcon,
  initialContent: {
    successContent: [
      new TextWidget({
        text: "<p><b>Thank you for sending in your files! Send more?</b></p>",
      }),
    ],
    failureContent: [
      new TextWidget({
        text: "<p><b>Form submission failed! Please try again!</b></p>",
      }),
    ],
  },
});
