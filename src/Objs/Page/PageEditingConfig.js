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
    menuIcon:{
      title: "Menu icon",
      description: "Default: none",
      values: [
        { value: "", title: ""},
        { value: "", title: ""},
        { value: "", title: ""},
        { value: "", title: ""},
        { value: "", title: ""},
        { value: "", title: ""},

      ]
    }
  },
  properties: (obj) => [...defaultPageProperties(obj)],
  propertiesGroups: [...metadataPropertiesGroups],
  initialContent: {
    ...defaultPageInitialContent,
    ...metadataInitialContent,
  },
  validations: [...defaultPageValidations, ...metadataValidations],
});
