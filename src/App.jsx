import _ from "lodash";
import React, { Component } from "react";
import "./app.scss";
import { getPets } from "./api";
import PetListItem from "./PetListItem.jsx";

import InfiniteScroll from "react-infinite-scroller";
import { List, message, Avatar, Spin } from "antd";

class App extends Component {
  state = {
    pets: [],
    loading: false,
    hasMore: true
  };

  constructor(props) {
    super(props);
    this.state = {
      pets: []
    };
  }

  componentDidMount = async () => {
    const pets = await getPets(); // currently returns all pets
    this.setState({ pets });
  };

  handleInfiniteOnLoad = () => {
    let pets = this.state.pets;
    this.setState({
      loading: true
    });
    if (pets.length > 14) {
      message.warning("Infinite List loaded all");
      this.setState({
        hasMore: false,
        loading: false
      });
      return;
    }

    // TODO: Get more pets, set loading to false
  };

  render() {
    const { pets } = this.state;

    return (
      <div className="infinite-container">
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!this.state.loading && this.state.hasMore}
          useWindow={false}
        >
          {/* Header */}
          <div className="tableheader">
            <div className="type">Type</div>
            <div className="name">Name</div>
            <div className="breed">Breed</div>
          </div>

          {/* List of pets */}
          {pets.map(({ id, ...pet }) => (
            <PetListItem key={id} pet={pet} />
          ))}

          {/* Loading message */}
          {this.state.loading && this.state.hasMore && (
            <div className="demo-loading-container">
              <Spin />
            </div>
          )}
        </InfiniteScroll>
      </div>
    );

    // <div className="App">
    //   <div className="tableheader">
    //     <div className="type">Type</div>
    //     <div className="name">Name</div>
    //     <div className="breed">Breed</div>
    //   </div>
    //   { pets.map(({ id, ...pet }) => <PetListItem key={id} pet={pet} />) }
    // </div>
  }
}

export default App;
