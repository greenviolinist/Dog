import React from 'react';
import './App.css';
import Header from './components/Header'
import RandomDogs from './components/RandomDogs'
import BreedList from './components/BreedList'

import {
  fetchRandomDog,
  fetchDogBreeds
} from './services/api-helper'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dogPic: null,
      breedList: [],
      currentView: ''
    }
  }

  getDogs = async () => {
    const goodDogs = await fetchDogBreeds();
    this.setState({
      breedList: goodDogs
    })
  }

  randomDog = async (breed) => {
    const puppyPic = await fetchRandomDog(breed);
    this.setState({
      dogPic: puppyPic
    })
  }

  setView = (currentView) => {
    this.setState({ currentView })
  }

  pageView() {
    const { currentView } = this.state;

    switch (currentView) {
      case 'dog breeds':
        return <BreedList
          getDogs={this.getDogs}
          breedList={this.state.breedList} />
      default:
        return <RandomDogs
          randomDog={this.randomDog}
          dogPic={this.state.dogPic} />
    }
  }

  render() {
    return (
      <div className="App">
        <Header setView={this.setView} />
        {this.pageView()}
      </div>
    );
  }
}


export default App;