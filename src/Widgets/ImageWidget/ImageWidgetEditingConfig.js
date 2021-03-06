import * as React from "react";
import * as Scrivito from "scrivito";
import imageWidgetIcon from "../../assets/images/image_widget.svg";
import { InstagramStyleTab } from "../../Components/ScrivitoExtensions/InstagramStyleTab";
import { ImageShapePicker } from "../../Components/ScrivitoExtensions/ImageShapePicker";

const shapes = [
  [
    { value: "none", title: "None" },
    { value: "smallCircle", title: "Small circle" },
    { value: "largeCircle", title: "Large circle" },
    { value: "smallInset", title: "Small inset" },
    { value: "largeInset", title: "Large inset" },
    { value: "star", title: "Star" },
    { value: "triangle", title: "Triangle" },
    { value: "octagon", title: "Octagon" },
    { value: "butterfly", title: "Butterfly" },
  ],
];

Scrivito.provideEditingConfig("ImageWidget", {
  title: "Image",
  thumbnail: imageWidgetIcon,
  attributes: {
    alignment: {
      title: "Alignment",
      description: "Default: Left",
      values: [
        { value: "left", title: "Left" },
        { value: "center", title: "Center" },
        { value: "right", title: "Right" },
      ],
    },
    alternativeText: {
      title: "Alternative text (optional)",
      description:
        "Brief description of what the image is about." +
        " If empty, the alternative text of the image is used.",
    },
    link: {
      title: "Link (optional)",
      description: "The page to open after clicking the image.",
    },
    animation: {
      title: "Animation",
      description:
        "The animation to perform as this image becomes visible. Default: None",
      values: [
        { value: "none", title: "None" },
        { value: "fadeInLeft", title: "Left to center" },
        { value: "fadeInRight", title: "Right to center" },
        { value: "fadeInDown", title: "Top to center" },
        { value: "fadeInUp", title: "Bottom to center" },
        { value: "zoomIn", title: "Zoom in" },
      ],
    },
  },
  properties: ["animation", "alignment", "alternativeText", "link"],
  initialContent: {
    alignment: "left",
    animation: "none",
  },
  validations: [
    [
      "image",

      (image) => {
        if (!image) {
          return {
            message: "The image should be set.",
            severity: "warning",
          };
        }
      },
    ],
  ],

  propertiesGroups: (widget) => [
    {
      title: "Instagram style",
      key: "instagram-style-tab",
      component: () => {
        <InstagramStyleTab widget={widget} />;
      },
    },

    {
      title: "Shape",
      key: "shape",
      component: ({ widget }) => (
        <ImageShapePicker widget={widget} shapes={shapes} />
      ),
    },
  ],
});
