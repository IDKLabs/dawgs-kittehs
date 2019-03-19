import React, { Component } from "react";
import { Menu, Dropdown, Icon, Button } from "antd";

class TableHeader extends Component {
  state = {};
  render() {
    const menu = (
      <Menu>
        <Menu.Item onClick={this.props.filterDog}>dog</Menu.Item>
        <Menu.Item onClick={this.props.filterCat}>cat</Menu.Item>
      </Menu>
    );
    return (
      <React.Fragment>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
            Filter by <Icon type="down" />
          </a>
        </Dropdown>
        <Button onClick={this.props.nameSort}>Sort by name</Button>
        <Button onClick={this.props.breedSort}>Sort by breed</Button>
        <div className="tableheader">
          <div className="type">Type</div>
          <div className="name">Name</div>
          <div className="breed">Breed</div>
        </div>
      </React.Fragment>
    );
  }
}

export default TableHeader;
