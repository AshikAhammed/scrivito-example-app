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
        { value: "fa-var-globe", title: "Globe" },
        { value: "fa-var-user", title: "User" },
        { value: "fa-var-paper-plane-o", title: "Plane" },
        { value: "fa-var-cogs", title: "Cogs" },
        { value: "fa-var-star-o", title: "Star" },
        { value: "fa-var-heart-o", title: "Heart" },
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
