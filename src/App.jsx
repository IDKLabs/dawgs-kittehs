import _ from "lodash";
import React, { Component } from "react";
import "./app.scss";
import { getPets, getPetBatch } from "./api";
import PetListItem from "./PetListItem.jsx";

import InfiniteScroll from "react-infinite-scroller";
import { List, message, Avatar, Spin } from "antd";
import { exists } from "fs";

class App extends Component {
  state = {
    pets: [],
    loading: true,
    hasMore: true,
    totalLoads: 0
  };

  constructor(props) {
    super(props);
    this.state = {
      pets: [],
      loading: true,
      hasMore: true,
      totalLoads: 0
    };
  }

  componentDidMount = async () => {
    const pets = await getPetBatch(10, 0);
    this.setState({ pets, loading: false });
  };

  handleInfiniteOnLoad = async page => {
    console.log("Page number:", page);
    //Limit loads (for now)
    // const totalLoads = this.state.totalLoads + 1;
    // this.setState({ totalLoads });

    // if (this.state.totalLoads > 10) {
    //   this.setState({ hasMore: false, loading: false });
    //   return;
    // }
    // Prepare to load
    let pets = this.state.pets;
    this.setState({
      loading: true
    });
    // Check if done loading everything
    if (pets.length >= 1794) {
      message.warning("Infinite List loaded all");
      this.setState({
        hasMore: false,
        loading: false
      });
      return;
    }
    // Get a new batch
    const newBatch = await getPetBatch(10, page);
    pets = [...pets, ...newBatch];
    this.setState({ pets, loading: false });
  };

  render() {
    const { pets } = this.state;
    return (
      <div className="infinite-container">
        <InfiniteScroll
          initialLoad={true}
          pageStart={0}
          loadMore={page => this.handleInfiniteOnLoad(page)}
          hasMore={!this.state.loading && this.state.hasMore}
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
  }
}

export default App;
