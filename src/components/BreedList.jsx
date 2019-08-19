import React from 'react';

class BreedList extends React.Component {


  render() {
    return (
      <div>
        <button onClick={this.props.getDogs}>Click to get dog breed list!</button>
        <ul className="list">
          {this.props.breedList.map((breed) => (
            <li key={breed}>{breed}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default BreedList;