import React, { PureComponent } from "react";
import "./Badge.scss";

class Badge extends PureComponent {
  state = {
    hovered: false
  };

  showBadge = () => {
    this.setState({ hovered: true });
  };
  hideBadge = () => {
    this.setState({ hovered: false });
  };

  render() {
    const { children, badgeLabel } = this.props;

    return (
      <div
        className="badge-component"
        onMouseOver={this.showBadge}
        onMouseOut={this.hideBadge}
      >
        {this.state.hovered && (
          <span className="badge-label">{badgeLabel}</span>
        )}

        {children}
      </div>
    );
  }
}

export default Badge;
