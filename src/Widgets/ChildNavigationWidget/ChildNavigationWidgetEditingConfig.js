import * as Scrivito from "scrivito";

import linkListWidgetIcon from "../../assets/images/link_list_widget.svg";

Scrivito.provideEditingConfig("ChildNavigationWidget", {
  title: "Child Navigation",
  description: "Displays a navigation from children of a page",
  thumbnail: linkListWidgetIcon,

  attributes: {
    parentPage: {
      title: "Parent Page",
      description: "Leave empty for current page",
    },
  },

  properties: ["parentPage"],
});
