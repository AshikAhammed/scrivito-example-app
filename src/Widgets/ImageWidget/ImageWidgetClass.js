import * as Scrivito from "scrivito";

const ImageWidget = Scrivito.provideWidgetClass("ImageWidget", {
  attributes: {
    image: ["reference", { only: "Image" }],
    alignment: ["enum", { values: ["left", "center", "right"] }],
    alternativeText: "string",
    link: "link",
    animation: [
      "enum",
      {
        values: [
          "none",
          "fadeInLeft",
          "fadeInRight",
          "fadeInDown",
          "fadeInUp",
          "zoomIn",
        ],
      },
    ],
    instagramStyle:["enum", {
      values: [
        "filter-1977",
        "filter-aden",
        "filter-amaro",
        "filter-ashby",
        "filter-brannan",
        "filter-brooklyn",
        "filter-charmes",
        "filter-clarendon",
        "filter-crema",
        "filter-dogpatch",
        "filter-earlybird",
        "filter-gingham",
        "filter-ginza",
        "filter-hefe",
        "filter-helena",
        "filter-hudson",
        "filter-inkwell",
        "filter-kelvin",
        "filter-juno",
        "filter-lark",
        "filter-lofi",
        "filter-ludwig",
        "filter-maven",
        "filter-mayfair",
        "filter-moon",
        "filter-nashville",
        "filter-perpetua",
        "filter-poprocket",
        "filter-reyes",
        "filter-rise",
        "filter-sierra",
        "filter-skyline",
        "filter-slumber",
        "filter-stinson",
        "filter-sutro",
        "filter-toaster",
        "filter-valencia",
        "filter-vesper",
        "filter-walden",
        "filter-willow",
        "filter-xpro-ii",


      ]
    }]
  },
});

export default ImageWidget;
