import React, { Component } from "react";
import { Button } from "antd";

class TableHeader extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
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
