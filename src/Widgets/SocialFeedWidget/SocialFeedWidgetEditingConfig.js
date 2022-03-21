import * as Scrivito from "scrivito";
import socialMediaIcons from "../../assets/images/social-media-icons.png";

Scrivito.provideEditingConfig("SocialFeedWidget", {
  title: "Social Feed Buttons",
  thumbnail: socialMediaIcons,
  attributes: {
    shareButtons: {
      title: "Share Buttons",
      description: "Social feed buttons to display",
      values: [
        { value: "facebook", title: "Facebook" },
        { value: "twitter", title: "Twitter" },
        { value: "linkedin", title: "LinkedIn" },
        { value: "e-mail", title: "Email"}
      ],
    },
  },

  properties: ["shareButtons"],
  initialContent: {
    shareButtons: ["facebook"],
  },
});
