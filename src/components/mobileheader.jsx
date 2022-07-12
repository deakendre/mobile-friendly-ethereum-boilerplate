import React from "react";
import { Sidebar } from "semantic-ui-react";
import debounce from "debounce";

import DocSidebar from "./sidebar";


class Layout extends React.Component {
  state = { visible: true };

  handleHideClick = () => this.setState({ visible: false });
  handleShowClick = () => this.setState({ visible: true });
  handleSidebarHide = () => this.setState({ visible: false });

  componentDidMount() {
    window.addEventListener("resize", debounce(this.resize.bind(this), 250));
    this.resize();
  }

  resize() {
    let currentHideNav = window.innerWidth <= 760;
    if (!currentHideNav !== this.state.visible) {
      this.setState({ visible: !currentHideNav });
    }
  }

  render() {
    const { children, className } = this.props;
    const { visible } = this.state;
    return (
      <>
        <Sidebar.Pushable as="section">
          <DocSidebar visible={visible} />
          <Sidebar.Pusher as="main" className={className}>
            <div className="ui text container">{children}</div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </>
    );
  }
}
export default Layout;