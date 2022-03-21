import * as Scrivito from "scrivito";

import PageObjIcon from "../../assets/images/page_obj.svg";

import DividerWidget from "../../Widgets/DividerWidget/DividerWidgetClass";
import HeadlineWidget from "../../Widgets/HeadlineWidget/HeadlineWidgetClass";
import TextWidget from "../../Widgets/TextWidget/TextWidgetClass";

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

Scrivito.provideEditingConfig("FaqPage", {
  title: "FaqPage",
  thumbnail: PageObjIcon,
  attributes:{
    ...defaultPageEditingConfigAttributes,
    ...metadataEditingConfigAttributes,
  },

  properties:(obj)=>[...defaultPageProperties(obj)],
  propertiesGroups: [...metadataPropertiesGroups],
  initialContent: {
    ...defaultPageInitialContent,
    ...metadataInitialContent,
    question: [
      new DividerWidget({ showLogo: "no" }),
      new HeadlineWidget({ headline: "The questions is?" }),
      new TextWidget({
        text: "This is the eloquent answer to the question above.",
      }),
      new DividerWidget({ showLogo: "no" }),
    ],
  },
  validations: [...defaultPageValidations, ...metadataValidations],
});
