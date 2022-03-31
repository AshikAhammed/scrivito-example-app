import * as Scrivito from "scrivito";
import PageObjIcon from "../../assets/images/page_obj.svg";
import {
  defaultPageEditingConfigAttributes,
  defaultPageInitialContent,
  defaultPageProperties,
  defaultPageValidations,
} from "../_defaultPageEditingConfig";
import {
  metadataEditingConfigAttributes,
  metadataInitialContent,
  metadataPropertiesGroups,
  metadataValidations,
} from "../_metadataEditingConfig";

Scrivito.provideEditingConfig("Page", {
  title: "Page",
  thumbnail: PageObjIcon,
  attributes: {
    ...defaultPageEditingConfigAttributes,
    ...metadataEditingConfigAttributes,
    menuIcon: {
      title: "Menu icon",
      description: "Default: none",
      values: [
        { value: "fa-globe", title: "Globe" },
        { value: "fa-user", title: "User" },
        { value: "fa-paper-plane-o", title: "Plane" },
        { value: "fa-cogs", title: "Cogs" },
        { value: "fa-star-o", title: "Star" },
        { value: "fa-heart-o", title: "Heart" },
      ],
    },
  },
  properties: (obj) => ["menuIcon",...defaultPageProperties(obj)],
  propertiesGroups: [...metadataPropertiesGroups],
  initialContent: {
    ...defaultPageInitialContent,
    ...metadataInitialContent,
  },
  validations: [...defaultPageValidations, ...metadataValidations],
});
