import React, { Component } from "react";
import "./app.scss";
import { getPetBatch } from "./api";
import PetListItem from "./PetListItem.jsx";
import TableHeader from "./TableHeader.jsx";
import InfiniteScroll from "react-infinite-scroller";
import { Button, message, notification } from "antd";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [],
      loading: true,
      hasMore: true,
      page: 0,
      sortBy: null,
      filterBy: null
    };
  }

  componentDidMount = async () => {
    try {
      // Load first 20 pets
      const pets = await getPetBatch(20, 0);
      this.setState({ pets, page: 1, loading: false });
    } catch (err) {
      // Handle error
      this.openNotification();
    }
  };

  handleLoad = async () => {
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
      const newBatch = await getPetBatch(
        20,
        this.state.page,
        this.state.sortBy,
        this.state.filterBy
      );
      pets = [...pets, ...newBatch];
      const newPage = this.state.page + 1;
      this.setState({ pets, page: newPage, loading: false });
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
      description: "Having trouble loading more pets.",
      btn,
      key,
      duration: 0
    });
  };

  initiateNameSort = () => {
    this.setState({ pets: [], page: 0, sortBy: "name" });
  };

  initiateBreedSort = () => {
    this.setState({ pets: [], page: 0, sortBy: "breed" });
  };

  filterDog = type => {
    this.setState({
      pets: [],
      page: 0,
      loading: false,
      sortBy: null,
      filterBy: "dog"
    });
  };

  filterCat = () => {
    this.setState({ pets: [], page: 0, sortBy: null, filterBy: "cat" });
  };

  render() {
    const { pets } = this.state;

    return (
      <React.Fragment>
        <h1>Dawgs and Kittehs</h1>
        <div className="infinite-container">
          <InfiniteScroll
            initialLoad={true}
            pageStart={0}
            loadMore={page => this.handleLoad(page)}
            hasMore={!this.state.loading && this.state.hasMore}
          >
            <TableHeader
              nameSort={this.initiateNameSort}
              breedSort={this.initiateBreedSort}
              filterDog={this.filterDog}
              filterCat={this.filterCat}
            />
            {pets.map(({ id, ...pet }) => (
              <PetListItem key={id} pet={pet} />
            ))}
          </InfiniteScroll>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
