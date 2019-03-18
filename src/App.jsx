import _ from "lodash";
import React, { Component } from "react";
import "./app.scss";
import { getPetBatch } from "./api";
import PetListItem from "./PetListItem.jsx";

import InfiniteScroll from "react-infinite-scroller";
import { Button, List, message, Avatar, Spin, notification } from "antd";
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
    try {
      // Load first 20 pets
      const pets = await getPetBatch(20, 0);
      this.setState({ pets, loading: false });
    } catch (err) {
      // Handle error
      this.openNotification();
    }
  };

  handleInfiniteOnLoad = async page => {
    console.log("Page number:", page);
    //Limit loads (temporary)
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
    try {
      const newBatch = await getPetBatch(20, page);
      pets = [...pets, ...newBatch];
      this.setState({ pets, loading: false });
    } catch (err) {
      // Handle error
      this.openNotification();
    }
  };

  closeNotification = key => {
    notification.close(key);
    // Go back to loading
    this.setState({ loading: false });
  };

  openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button
        type="primary"
        size="small"
        onClick={() => this.closeNotification(key)}
      >
        Try Again
      </Button>
    );
    notification.open({
      message: "Error",
      description: "We had trouble loading more pets.",
      btn,
      key,
      duration: 0
    });
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
        </InfiniteScroll>
      </div>
    );
  }
}

export default App;
