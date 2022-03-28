import * as Scrivito from "scrivito";
import iconAnchorNavigationWidget from "../../assets/images/icon_anchor_navigation_widget.svg";

Scrivito.provideEditingConfig("AnchorNavigationWidget", {
  title: "Anchor Navigation",
  thumbnail: iconAnchorNavigationWidget,
  attributes: {
    style: {
      title: "Headline style",
      description: "Default : Heading 2",
      values: [
        { value: "h1", title: "Heading 1" },
        { value: "h2", title: "Heading 2" },
        { value: "h3", title: "Heading 3" },
      ],
    },
    small: {
      title: "Small font",
    },
    bold: {
      title: "Bold font",
    },
    bullets: {
      title: "Display bullets",
    },
  },

  properties: ["style", "small", "bold", "bullets"],
  initialContent: {
    style: "h2",
    small: true,
    bold: true,
    bullets: true,
  },
});
