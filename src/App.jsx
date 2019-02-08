import _ from 'lodash';
import React, { Component } from 'react';
import './app.scss';
import { getPets } from './api';
import PetListItem from './PetListItem.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [],
    };
  }

  componentDidMount = async () => {
    const pets = await getPets();
    this.setState({ pets });
  }

  render() {
    const {
      pets,
    } = this.state;

    return (
      <div className="App">
        <div className="tableheader">
          <div className="type">Type</div>
          <div className="name">Name</div>
          <div className="breed">Breed</div>
        </div>
        { pets.map(({ id, ...pet }) => <PetListItem key={id} pet={pet} />) }
      </div>
    );
  }
}

export default App;
