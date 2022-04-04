import * as React from "react";
import imageStyle from "./imageStyle";

const ImageShapePicker = Scrivito.connect(({ widget, shapes }) => {
  const currentShape = widget.get("clipShape");
  const image = widget.get("image");

  return (
    <div className="image_shape_picker">
      <ul>
        {shapes.map((shape) => {
          const elementClass = currentShape === shape.value ? "active" : "";

          return (
            <li
              key={shape.value}
              onClick={(event) => onClick(event, shape, value)}
              className={elementClass}
            >
              <div className="image_shape_picker__preview">
                <div className="h-100">
                  <img
                    src={image ? Scrivito.urlFor(image) : imageWidgetIcon}
                    style={imageStyle(shape.value)}
                    className="h-100"
                  />
                </div>
              </div>

              <div className="image_shape_picker__meta">
                <div className="image_shape_picker__meta__name">
                  {shape.title}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

function onClick(event, clipShape) {
  event.preventDefault();
  widget.update({ clipShape });
}
