function imageStyle(clipShape) {
  var style = {};
  const paths = {
    none: "",
    smallCircle: "circle(20%)",
    largeCircle: "circle(38%)",
    smallInset: "inset(2% 2%)",
    largeInset: "inset(8% 8%)",
    star: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
    triangle: "polygon(50% 0%, 0% 100%, 100% 100%)",
    octagon:
      "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
    butterfly:
      "polygon(7% 6%, 33% 5%, 50% 18%, 67% 5%, 93% 6%, 83% 35%, 63% 47%, 84% 58%, 66% 90%, 50% 77%, 34% 90%, 16% 57%, 39% 47%, 17% 35%)",
  };

  if (clipShape) {
    style.clipPath = paths[clipShape];
    style.WebkitClipPtah = paths[clipShape];
  }
  return style;
}

export default imageStyle;