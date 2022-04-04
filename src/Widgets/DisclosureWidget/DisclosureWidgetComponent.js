import * as React from "react";
import * as Scrivito from "scrivito";

class DisclosureWidget extends React.Component {
  constructor() {
    super();
    this.state = { isDisclosed: false };
  }

  switchState() {
    this.setState({ isDisclosed: !this.state.isDisclosed });
  }

  render() {
    const widget = this.props.widget;
    const isDisclosed = this.state.isDisclosed;
    const label = isDisclosed
      ? widget.get("labelDisclosed") || "Here we go!"
      : widget.get("labelHidden") || "Disclosed";

    return (
      <div>
        <div className="text-center">
          <span className="btn btn-primary" onClick={() => this.switchState()}>
            {label}
          </span>
        </div>
        <div className={`panel panel-default ${isDisclosed ? "" : "d-none"}`}>
          <Scrivito.ContentTag
            className="panel-heading"
            content={widget}
            attribute="heading"
          />
          <Scrivito.ConntentTag
            className="panel-body"
            content={widget}
            attribute="body"
          />
        </div>
      </div>
    );
  }
}

Scrivito.provideComponent("DisclosureWidget", DisclosureWidget);
